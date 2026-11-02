import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from './apps.module.css';

const inter = Inter({ subsets: ['latin'] });

const apps = [
  {
    name: 'Track Evolution',
    href: '/trackevolution',
    icon: '/track-evolution-mark.svg',
    iconShape: 'circle',
    summary: 'A track-day logbook with lap times, progress charts and telemetry import.',
    platforms: 'Web · iOS · Android',
  },
  {
    name: 'Orbit Rings',
    href: '/orbitrings',
    icon: '/orbit-mark.svg',
    iconShape: 'circle',
    summary: 'A personal relationship manager built on circles of friendship.',
    platforms: 'iOS · Android',
  },
  {
    name: 'Shepherdr',
    href: '/shepherdr',
    icon: '/apps/shepherdr/icon.png',
    iconShape: 'rounded',
    summary: 'Watch, approve and steer your AI coding agents from your iPhone.',
    platforms: 'iPhone',
  },
] as const;

const Apps: React.FC = () => {
  return (
    <>
      <Head>
        <title>Apps | Speedshift</title>
        <meta
          name="description"
          content="Apps from Speedshift: Track Evolution, Orbit Rings and Shepherdr."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Apps | Speedshift" />
        <meta
          property="og:description"
          content="Apps from Speedshift: Track Evolution, Orbit Rings and Shepherdr."
        />
        <link rel="canonical" href="https://speedshift.io/apps" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.page} ${inter.className}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.homeLink}>
            ← Speedshift home
          </Link>

          <h1 className={styles.title}>Apps</h1>
          <p className={styles.lede}>Things I’m building and shipping.</p>

          <ul className={styles.list}>
            {apps.map((app) => (
              <li key={app.href}>
                <Link href={app.href} className={styles.card}>
                  <Image
                    src={app.icon}
                    alt=""
                    width={64}
                    height={64}
                    className={app.iconShape === 'circle' ? styles.iconCircle : styles.iconRounded}
                  />
                  <span className={styles.text}>
                    <span className={styles.name}>{app.name}</span>
                    <span className={styles.summary}>{app.summary}</span>
                    <span className={styles.platforms}>{app.platforms}</span>
                  </span>
                  <span className={styles.chevron} aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className={styles.footer}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default Apps;
