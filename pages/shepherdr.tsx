import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from './shepherdr.module.css';
import {
  appName,
  availability,
  features,
  herdrUrl,
  intro,
  repoUrl,
  requirements,
  screenshots,
  setupUrl,
  subtitle,
  supportUrl,
} from '../lib/shepherdrContent';

const inter = Inter({ subsets: ['latin'] });

const pageTitle = `${appName}: ${subtitle} | Speedshift`;
const description =
  'Shepherdr is an iPhone app for the AI coding agents you run in Herdr: see every agent on every machine, approve from a notification, attach to a live terminal and start new agents, all over your own Tailscale network.';

const Shepherdr: React.FC = () => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${appName}: ${subtitle}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://speedshift.io/apps/shepherdr/icon.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${appName}: ${subtitle}`} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href="https://speedshift.io/shepherdr" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.page} ${inter.className}`}>
        <div className={styles.glow} aria-hidden />
        <div className={styles.inner}>
          <Link href="/" className={styles.homeLink}>
            ← Speedshift home
          </Link>

          <header className={styles.hero}>
            <Image
              src="/apps/shepherdr/icon.png"
              alt=""
              width={112}
              height={112}
              className={styles.appIcon}
              priority
            />
            <div>
              <h1 className={styles.appName}>{appName}</h1>
              <p className={styles.subtitle}>{subtitle}</p>
              <p className={styles.availability}>{availability}</p>
            </div>
          </header>

          <p className={styles.intro}>{intro}</p>
          <p className={styles.introSecondary}>
            A companion for{' '}
            <a href={herdrUrl} target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
              Herdr
            </a>
            , the terminal workspace for coding agents. It connects to all of your machines at once,
            over your own private Tailscale network.
          </p>

          <div className={styles.ctaRow}>
            <a href={repoUrl} className={styles.ctaPrimary} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
            <a href={setupUrl} className={styles.ctaGhost} target="_blank" rel="noopener noreferrer">
              Setup guide
            </a>
          </div>
        </div>

        <div className={styles.shotsWrap}>
          <ul className={styles.shots} aria-label="Screenshots">
            {screenshots.map((s, i) => (
              <li key={s.src} className={styles.shot}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={660}
                  height={1434}
                  sizes="(min-width: 720px) 260px, 62vw"
                  priority={i < 2}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.inner}>
          <p className={styles.sectionLabel}>Features</p>
          <div className={styles.featureGrid}>
            {features.map((f) => (
              <section key={f.title} className={styles.featureCard}>
                <h2 className={styles.featureTitle}>{f.title}</h2>
                <ul className={styles.featureList}>
                  {f.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className={styles.sectionLabel}>What you’ll need</p>
          <div className={styles.requirements}>
            <ul className={styles.featureList}>
              {requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <a href={setupUrl} className={styles.inlineLink} target="_blank" rel="noopener noreferrer">
              Read the setup guide →
            </a>
          </div>

          <p className={styles.footnote}>
            Open source under the MIT license.{' '}
            <Link href="/privacy#shepherdr" className={styles.footLink}>
              Privacy policy
            </Link>
            {' · '}
            <Link href="/terms#shepherdr-terms" className={styles.footLink}>
              Terms
            </Link>
            {' · '}
            <a href={supportUrl} className={styles.footLink} target="_blank" rel="noopener noreferrer">
              Support
            </a>
          </p>
        </div>
      </main>
    </>
  );
};

export default Shepherdr;
