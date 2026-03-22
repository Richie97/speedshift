import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from './portfolio.module.css';
import {
  earlierRoles,
  featuredRoles,
  intro,
  linkedInUrl,
  name,
  selectedProjects,
  shiftLinks,
  skillTags,
  tagline,
  willowTreeRoles,
  willowTreeSummary,
} from '../lib/portfolioContent';

const inter = Inter({ subsets: ['latin'] });

const Portfolio: React.FC = () => {
  return (
    <>
      <Head>
        <title>{name} | Portfolio</title>
        <meta
          name="description"
          content="Engineering leadership, AI-forward delivery, and selected client work. Full history on LinkedIn."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={`${name} | Portfolio`} />
        <meta
          property="og:description"
          content="VP of Engineering at Shift, founder of Speedshift LLC, and former Partner in Engineering at WillowTree."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${name} | Portfolio`} />
        <meta
          name="twitter:description"
          content="Engineering leadership and AI-era product delivery. Connect on LinkedIn for the full profile."
        />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.page} ${inter.className}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.homeLink}>
            ← Speedshift home
          </Link>

          <h1 className={styles.heroName}>{name}</h1>
          <p className={styles.heroTagline}>{tagline}</p>
          <p className={styles.heroIntro}>{intro}</p>

          <div className={styles.ctaRow}>
            <a
              href={linkedInUrl}
              className={styles.ctaPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              View full profile on LinkedIn
            </a>
            <a
              href="mailto:eric@speedshift.io"
              className={styles.ctaGhost}
            >
              Email
            </a>
          </div>

          <p className={styles.sectionLabel}>Now</p>
          {featuredRoles.map((role) => (
            <article key={`${role.org}-${role.title}`} className={styles.card}>
              <div className={styles.cardTitle}>{role.title}</div>
              <div className={styles.cardOrg}>{role.org}</div>
              <div className={styles.cardRange}>{role.range}</div>
              <p className={styles.cardDetail}>{role.detail}</p>
              {role.meta ? (
                <div className={styles.cardMeta}>{role.meta}</div>
              ) : null}
              {role.org === 'Shift' ? (
                <div className={styles.shiftLinks}>
                  {shiftLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className={styles.shiftLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label} — shifthq.ai
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}

          <hr className={styles.sectionDivider} aria-hidden />

          <p className={styles.sectionLabel}>WillowTree</p>
          <p className={styles.proseBlock}>{willowTreeSummary}</p>
          <ul className={styles.timeline}>
            {willowTreeRoles.map((row) => (
              <li key={`${row.title}-${row.range}`}>
                <span className={styles.timelineTitle}>{row.title}</span>
                <span className={styles.timelineRange}>{row.range}</span>
              </li>
            ))}
          </ul>

          <p className={styles.sectionLabel}>Earlier</p>
          <ul className={styles.compactList}>
            {earlierRoles.map((r) => (
              <li key={r.org}>
                <div className={styles.compactOrg}>{r.org}</div>
                <div className={styles.compactTitle}>{r.title}</div>
                <div className={styles.compactRange}>{r.range}</div>
                <p className={styles.compactDetail}>{r.detail}</p>
              </li>
            ))}
          </ul>

          <p className={styles.sectionLabel}>Selected client work</p>
          <p className={styles.sectionHint}>
            Representative engagements while at WillowTree.
          </p>
          <div className={styles.projectGrid}>
            {selectedProjects.map((p) => (
              <div key={`${p.client}-${p.range}`} className={styles.projectCell}>
                <div className={styles.projectClient}>{p.client}</div>
                <div className={styles.projectRange}>{p.range}</div>
                <p className={styles.projectNote}>{p.note}</p>
              </div>
            ))}
          </div>

          <p className={styles.sectionLabel}>Focus areas</p>
          <div className={styles.skills}>
            {skillTags.map((s) => (
              <span key={s} className={styles.skillChip}>
                {s}
              </span>
            ))}
          </div>

          <p className={styles.footnote}>
            This page is a curated snapshot. Roles, dates, and projects match my public profile; for
            the authoritative timeline and recommendations, use LinkedIn.
          </p>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
