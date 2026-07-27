import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Inter, JetBrains_Mono } from 'next/font/google';
import styles from './trackevolution.module.css';
import {
  appUrl,
  buildNote,
  docsUrl,
  features,
  headline,
  heroChart,
  heroStats,
  lede,
  lineNote,
  name,
  repoUrl,
  sources,
  steps,
} from '../lib/trackEvolutionContent';

const inter = Inter({ subsets: ['latin'] });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'] });

const description =
  'Track Evolution is an HPDE and track-day logbook: events, sessions and lap times per track, progress charts, and in-browser telemetry import from Corvette PDR, GoPro and VBOX files. Free at trackevolution.app.';

const icons: Record<string, React.ReactNode> = {
  chart: <path d="M4 19V5m0 14h16M8 15v-4m4 4V7m4 8v-6" />,
  import: <path d="M12 3v13m0 0 4-4m-4 4-4-4M5 21h14" />,
  stopwatch: (
    <>
      <path d="M12 2v3M4.9 4.9l2.1 2.1M2 12h3m14 0h3m-4.9-7.1-2.1 2.1" />
      <circle cx="12" cy="14" r="7" />
      <path d="M12 14l3-3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0 5 5L17 14l-7 7-3-3 7-7-2.7-2.7a4 4 0 0 0-5-5l3 3-2 2-3-3" />
  ),
  link: (
    <path d="M9 13a4 4 0 0 1 0-6l2-2a4 4 0 0 1 6 6l-1 1M15 11a4 4 0 0 1 0 6l-2 2a4 4 0 0 1-6-6l1-1" />
  ),
};

const chartPath = heroChart.points.map(([x, y]) => `${x},${y}`).join(' ');

const TrackEvolution: React.FC = () => {
  return (
    <>
      <Head>
        <title>{`${name} — a track-day logbook`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="HPDE, track day, lap times, logbook, telemetry, Corvette PDR, GoPro, VBOX, lap timer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={name} />
        <meta property="og:title" content={`${name} — a track-day logbook`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://speedshift.io/trackevolution" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${name} — a track-day logbook`} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" type="image/svg+xml" href="/track-evolution-mark.svg" />
        <link rel="canonical" href="https://speedshift.io/trackevolution" />
      </Head>

      <div className={`${styles.page} ${inter.className}`}>
        <header className={styles.header}>
          <div className={styles.wrap}>
            <span className={styles.brand}>
              <TrackEvolutionMark />
              {name}
            </span>
            <nav className={styles.nav}>
              <Link href="/portfolio">Portfolio</Link>
              <a href={docsUrl} target="_blank" rel="noopener noreferrer">
                Docs
              </a>
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section className={styles.hero}>
            <div className={styles.wrap}>
              <p className={styles.eyebrow}>A Speedshift project</p>
              <h1 className={styles.headline}>
                Your track days,{' '}
                <span className={styles.accentText}>remembered lap by lap</span>.
              </h1>
              <p className={styles.lede}>{lede}</p>

              <div className={styles.ctaRow}>
                <a
                  className={styles.btnPrimary}
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the app
                </a>
                <a
                  className={styles.btn}
                  href={docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the docs
                </a>
              </div>

              <figure className={styles.heroChart}>
                <svg viewBox="0 0 680 240" role="img" aria-label={headline}>
                  <g className={styles.chartGrid}>
                    {[30, 75, 120, 165, 210].map((y) => (
                      <line key={y} x1="48" y1={y} x2="660" y2={y} />
                    ))}
                  </g>
                  <g
                    className={`${styles.chartAxis} ${mono.className}`}
                    textAnchor="end"
                  >
                    {heroChart.yLabels.map((label, i) => (
                      <text key={label} x="42" y={34 + i * 45}>
                        {label}
                      </text>
                    ))}
                  </g>
                  <polyline className={styles.chartLine} points={chartPath} />
                  <g className={styles.chartDots}>
                    {heroChart.points.map(([x, y], i) => (
                      <circle
                        key={`${x}-${y}`}
                        cx={x}
                        cy={y}
                        r={i === heroChart.points.length - 1 ? 4.5 : 3.5}
                      />
                    ))}
                  </g>
                  <text
                    className={`${styles.chartBest} ${mono.className}`}
                    x="658"
                    y="152"
                    textAnchor="end"
                  >
                    {heroChart.bestLabel} ★
                  </text>
                </svg>
                <figcaption>
                  Best lap per event — lower is faster, so improvement trends downward.
                </figcaption>
              </figure>

              <dl className={styles.stats}>
                {heroStats.map((stat) => (
                  <div key={stat.label} className={styles.stat}>
                    <dt className={styles.statValue}>{stat.value}</dt>
                    <dd className={styles.statLabel}>{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.wrap}>
              <h2 className={styles.sectionTitle}>
                Built around how track days actually work
              </h2>
              <p className={styles.sectionSub}>
                Tracks contain events, events contain sessions, sessions contain laps —
                the same shape as your weekend.
              </p>

              <div className={styles.featureGrid}>
                {features.map((feature) => (
                  <article key={feature.title} className={styles.feature}>
                    <span className={styles.glyph} aria-hidden>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {icons[feature.icon]}
                      </svg>
                    </span>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureBody}>{feature.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.sectionAlt}`}>
            <div className={styles.wrap}>
              <h2 className={styles.sectionTitle}>From memory card to logbook</h2>
              <p className={styles.sectionSub}>{lineNote}</p>

              <div className={styles.sourceGrid}>
                {sources.map((source) => (
                  <article key={source.title} className={styles.source}>
                    <h3 className={styles.featureTitle}>{source.title}</h3>
                    <p className={styles.featureBody}>{source.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.wrap}>
              <h2 className={styles.sectionTitle}>Start your logbook in minutes</h2>
              <p className={styles.sectionSub}>
                Nothing to install and nothing to pay for — sign in and log your first
                event.
              </p>

              <ol className={styles.steps}>
                {steps.map((step, i) => (
                  <li key={step.title} className={styles.step}>
                    <span className={`${styles.stepNum} ${mono.className}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={styles.featureTitle}>{step.title}</h3>
                    <p className={styles.featureBody}>{step.body}</p>
                  </li>
                ))}
              </ol>

              <p className={styles.buildNote}>{buildNote}</p>

              <div className={styles.ctaRow}>
                <a
                  className={styles.btnPrimary}
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the app
                </a>
                <a
                  className={styles.btn}
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View the source
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.wrap}>
            <span>{name} — a personal HPDE / track-day logbook.</span>
            <span className={styles.footerLinks}>
              <Link href="/">Speedshift</Link>
              <Link href="/portfolio">Portfolio</Link>
              <a href={appUrl} target="_blank" rel="noopener noreferrer">
                trackevolution.app
              </a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

const TrackEvolutionMark: React.FC = () => (
  <svg
    className={styles.brandMark}
    viewBox="0 0 100 100"
    role="img"
    aria-hidden
    focusable="false"
  >
    <circle cx="50" cy="50" r="50" fill="#c8f24e" />
    <g transform="translate(31.24 22.5) scale(0.0874)" fill="#0c1400">
      <rect
        x="0.59"
        y="115.85"
        width="163"
        height="442.77"
        transform="rotate(-44.9265 0.59 115.85)"
      />
      <rect
        x="311.97"
        y="198.25"
        width="163"
        height="442.77"
        transform="rotate(44.5184 311.97 198.25)"
      />
    </g>
  </svg>
);

export default TrackEvolution;
