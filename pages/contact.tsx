import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from './contact.module.css';
import { contactLimits as limits } from '../lib/contactForm';

const inter = Inter({ subsets: ['latin'] });

type Status = { state: 'idle' } | { state: 'sending' } | { state: 'sent' } | { state: 'error'; message: string };

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>({ state: 'idle' });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ state: 'sending' });
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error ?? 'Something went wrong sending that. Please try again.');
      }
      setStatus({ state: 'sent' });
    } catch (err) {
      setStatus({ state: 'error', message: (err as Error).message });
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Speedshift LLC</title>
        <meta name="description" content="Tell Speedshift about your project." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href="https://speedshift.com/contact" />
      </Head>

      <main className={`${styles.page} ${inter.className}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.homeLink}>
            ← Speedshift home
          </Link>

          <h1 className={styles.title}>Let’s talk.</h1>
          <p className={styles.lede}>
            Tell me what you’re working on and where you want to get to. I’ll get back to you within a couple of
            business days.
          </p>

          {status.state === 'sent' ? (
            <div className={styles.success} role="status">
              <p className={styles.successTitle}>Thanks — message received.</p>
              <p>I’ll reply to the email you gave.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span className={styles.label}>Name</span>
                  <input name="name" type="text" autoComplete="name" required maxLength={limits.name} />
                </label>
                <label className={styles.field}>
                  <span className={styles.label}>Email</span>
                  <input name="email" type="email" autoComplete="email" required maxLength={limits.email} />
                </label>
              </div>
              <label className={styles.field}>
                <span className={styles.label}>
                  Company <span className={styles.optional}>optional</span>
                </span>
                <input name="company" type="text" autoComplete="organization" maxLength={limits.company} />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Message</span>
                <textarea name="message" rows={6} required maxLength={limits.message} />
              </label>

              {/* Honeypot: hidden from people, filled in by bots. */}
              <div className={styles.honeypot} aria-hidden>
                <label>
                  Website
                  <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              {status.state === 'error' ? (
                <p className={styles.error} role="alert">
                  {status.message}
                </p>
              ) : null}

              <button type="submit" className={styles.submit} disabled={status.state === 'sending'}>
                {status.state === 'sending' ? 'Sending…' : 'Send'}
              </button>
              <p className={styles.fineprint}>
                See the <Link href="/privacy">Privacy Policy</Link> for how messages are handled.
              </p>
            </form>
          )}
        </div>
      </main>
    </>
  );
};

export default Contact;
