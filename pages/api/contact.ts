import type { NextApiRequest, NextApiResponse } from 'next';
import { contactLimits as limits } from '../../lib/contactForm';

type Result = { ok: true } | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field = (body: Record<string, unknown>, key: string, max: number) => {
  const value = body[key];
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
};

/** Slack treats &, < and > as control characters (links, @channel, user mentions). */
const escapeSlack = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const isDiscord = (url: string) => {
  const host = new URL(url).hostname;
  return host === 'discord.com' || host.endsWith('.discord.com') || host === 'discordapp.com';
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Result>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  const body = (typeof req.body === 'object' && req.body) || {};

  // Hidden field real visitors never fill in; quietly accept and drop bot posts.
  if (field(body, 'website', 200)) {
    return res.status(200).json({ ok: true });
  }

  const name = field(body, 'name', limits.name);
  const email = field(body, 'email', limits.email);
  const company = field(body, 'company', limits.company);
  const message = field(body, 'message', limits.message);

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Name, email and message are required.' });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ ok: false, error: 'That email address doesn’t look right.' });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('contact: CONTACT_WEBHOOK_URL is not set');
    return res.status(500).json({ ok: false, error: 'The form isn’t set up yet. Please email eric@speedshift.io.' });
  }

  const from = company ? `${name} (${company})` : name;

  try {
    // Discord caps plain content at 2000 characters, so the message goes in an embed (4096).
    const payload = isDiscord(webhookUrl)
      ? {
          allowed_mentions: { parse: [] },
          embeds: [
            {
              title: 'New contact form submission',
              description: message,
              fields: [
                { name: 'From', value: from },
                { name: 'Email', value: email },
              ],
            },
          ],
        }
      : {
          text: escapeSlack(`*New contact form submission*\n*From:* ${from}\n*Email:* ${email}\n\n${message}`),
        };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      console.error('contact: webhook responded', response.status, await response.text());
      throw new Error(`webhook ${response.status}`);
    }
  } catch (err) {
    console.error('contact: delivery failed', err);
    return res.status(502).json({ ok: false, error: 'Something went wrong sending that. Please try again or email eric@speedshift.io.' });
  }

  return res.status(200).json({ ok: true });
}
