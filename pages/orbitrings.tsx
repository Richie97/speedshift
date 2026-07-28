import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Mulish, Quicksand } from 'next/font/google';
import styles from './orbitrings.module.css';
import {
  coldSeats,
  craft,
  dunbar,
  features,
  headline,
  lede,
  name,
  repoUrl,
  rings,
  status,
  warmth,
} from '../lib/orbitRingsContent';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['500', '600', '700'] });
const mulish = Mulish({ subsets: ['latin'], weight: ['400', '600', '700'] });

const description =
  'Orbit Rings is a personal relationship manager for iOS and Android. Sort the people in your life into concentric circles of friendship, and get nudged before a friendship goes cold.';

const icons: Record<string, React.ReactNode> = {
  orbit: (
    <>
      <circle cx="12" cy="12" r="3" />
      <ellipse cx="12" cy="12" rx="9.5" ry="5" transform="rotate(-30 12 12)" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6" />
      <path d="M10.3 20a2 2 0 0 0 3.4 0" />
    </>
  ),
  contacts: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </>
  ),
  activity: <path d="M3 12h4l2.5-7 4 14L16 12h5" />,
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-5" />
    </>
  ),
  cloud: (
    <path d="M7 18a4 4 0 0 1-.4-8A5.5 5.5 0 0 1 17.2 11 3.5 3.5 0 0 1 17 18Z" />
  ),
};

/** Diagram geometry — mirrors the app's CircleDiagram. */
const SIZE = 400;
const CENTER = SIZE / 2;
const R = 176;
const SPIN_SECONDS = [150, 190, 230, 280];

type Seat = { x: number; y: number; initials: string; cold: boolean };

const seatsFor = (ring: (typeof rings)[number]): Seat[] => {
  const radius = R * ring.radius;
  const stagger = -90 + rings.indexOf(ring) * 18;
  const cold = coldSeats[ring.key] ?? [];
  return Array.from({ length: ring.seats }, (_, i) => {
    const angle = ((stagger + (360 / ring.seats) * i) * Math.PI) / 180;
    return {
      x: CENTER + radius * Math.cos(angle),
      y: CENTER + radius * Math.sin(angle),
      initials: ring.initials[i] ?? '',
      cold: cold.includes(i),
    };
  });
};

const OrbitDiagram: React.FC = () => (
  <svg
    className={styles.diagram}
    viewBox={`0 0 ${SIZE} ${SIZE}`}
    role="img"
    aria-label="Four concentric rings of contacts orbiting a centre point, with the people who are overdue for contact highlighted."
  >
    <defs>
      <radialGradient id="orbit-aura">
        <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.42" />
        <stop offset="70%" stopColor="var(--brand)" stopOpacity="0.06" />
        <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
      </radialGradient>
    </defs>

    <circle
      className={styles.aura}
      cx={CENTER}
      cy={CENTER}
      r={R}
      fill="url(#orbit-aura)"
    />

    {rings.map((ring) => (
      <circle
        key={`track-${ring.key}`}
        className={`${styles.ringTrack} ${styles[ring.key]}`}
        cx={CENTER}
        cy={CENTER}
        r={R * ring.radius}
      />
    ))}

    {rings.map((ring, ringIndex) => (
      <g
        key={`seats-${ring.key}`}
        className={styles.ringSpin}
        style={{ ['--spin' as string]: `${SPIN_SECONDS[ringIndex]}s` }}
      >
        {seatsFor(ring).map((seat) => (
          <g key={`${ring.key}-${seat.initials}`} transform={`translate(${seat.x} ${seat.y})`}>
            <g
              className={styles.seat}
              style={{ ['--spin' as string]: `${SPIN_SECONDS[ringIndex]}s` }}
            >
              {seat.cold ? (
                <circle
                  className={styles.seatNudge}
                  r={ring.dot + 5}
                  fill="none"
                />
              ) : null}
              <circle
                className={`${styles.seatDot} ${styles[ring.key]}`}
                r={ring.dot}
              />
              <text
                className={`${styles.seatLabel} ${styles[ring.key]}`}
                y={ring.dot * 0.33}
                fontSize={ring.dot * 0.82}
                textAnchor="middle"
              >
                {seat.initials}
              </text>
            </g>
          </g>
        ))}
      </g>
    ))}

    <circle className={styles.you} cx={CENTER} cy={CENTER} r={11} />
    <text
      className={styles.youLabel}
      x={CENTER}
      y={CENTER + 3.5}
      textAnchor="middle"
    >
      You
    </text>
  </svg>
);

const OrbitRings: React.FC = () => {
  return (
    <>
      <Head>
        <title>{`${name} — a personal relationship manager`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="relationship manager, personal CRM, Dunbar number, friendship, iOS app, Android app, contacts, reminders"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={name} />
        <meta property="og:title" content={`${name} — a personal relationship manager`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://speedshift.io/orbitrings" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${name} — a personal relationship manager`} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" type="image/svg+xml" href="/orbit-mark.svg" />
        <link rel="canonical" href="https://speedshift.io/orbitrings" />
      </Head>

      <div className={`${styles.page} ${mulish.className}`}>
        <header className={styles.header}>
          <div className={styles.wrap}>
            <span className={`${styles.brand} ${quicksand.className}`}>
              <OrbitMark />
              {name}
            </span>
            <nav className={styles.nav}>
              <Link href="/portfolio">Portfolio</Link>
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section className={styles.hero}>
            <div className={`${styles.wrap} ${styles.heroGrid}`}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>A Speedshift project</p>
                <h1 className={`${styles.headline} ${quicksand.className}`}>
                  {headline}
                </h1>
                <p className={styles.lede}>{lede}</p>

                <div className={styles.statusPill}>
                  <span className={styles.statusDot} aria-hidden />
                  {status.label} — iOS &amp; Android
                </div>

                <div className={styles.ctaRow}>
                  <a
                    className={styles.btnPrimary}
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow along on GitHub
                  </a>
                  <a className={styles.btn} href="#circles">
                    How it works
                  </a>
                </div>
                <p className={styles.statusNote}>{status.body}</p>
              </div>

              <div className={styles.heroArt}>
                <OrbitDiagram />
                <div className={styles.legend}>
                  {warmth.map((state) => (
                    <span key={state.key} className={styles.legendItem}>
                      <span
                        className={`${styles.legendDot} ${styles[state.key]}`}
                        aria-hidden
                      />
                      {state.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section} id="circles">
            <div className={styles.wrap}>
              <h2 className={`${styles.sectionTitle} ${quicksand.className}`}>
                Four circles, and they have room limits
              </h2>
              <p className={styles.sectionSub}>{dunbar}</p>

              <div className={styles.ringGrid}>
                {rings.map((ring) => (
                  <article
                    key={ring.key}
                    className={`${styles.ringCard} ${styles[ring.key]}`}
                  >
                    <span className={styles.ringBadge} aria-hidden />
                    <h3 className={`${styles.ringName} ${quicksand.className}`}>
                      {ring.name}
                    </h3>
                    <p className={styles.ringBlurb}>{ring.blurb}</p>
                    <dl className={styles.ringMeta}>
                      <div>
                        <dt>Holds</dt>
                        <dd>{ring.capacity}</dd>
                      </div>
                      <div>
                        <dt>Cadence</dt>
                        <dd>{ring.cadence}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.sectionAlt}`}>
            <div className={styles.wrap}>
              <h2 className={`${styles.sectionTitle} ${quicksand.className}`}>
                What the app does
              </h2>
              <p className={styles.sectionSub}>
                A map of your people, a feed of who needs a nudge, and an honest read
                on how you&rsquo;re doing.
              </p>

              <div className={styles.featureGrid}>
                {features.map((feature) => (
                  <article key={feature.title} className={styles.feature}>
                    <span className={styles.glyph} aria-hidden>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {icons[feature.icon]}
                      </svg>
                    </span>
                    <h3 className={`${styles.featureTitle} ${quicksand.className}`}>
                      {feature.title}
                    </h3>
                    <p className={styles.featureBody}>{feature.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.wrap}>
              <h2 className={`${styles.sectionTitle} ${quicksand.className}`}>
                Warmth, not a scoreboard
              </h2>
              <p className={styles.sectionSub}>
                Every person carries a last-contacted date. Measured against their
                circle&rsquo;s cadence, that gives one of three states — which is all the
                colour on the map means.
              </p>

              <div className={styles.warmthRow}>
                {warmth.map((state) => (
                  <div key={state.key} className={styles.warmthCard}>
                    <span
                      className={`${styles.warmthDot} ${styles[state.key]}`}
                      aria-hidden
                    />
                    <div>
                      <h3 className={`${styles.featureTitle} ${quicksand.className}`}>
                        {state.label}
                      </h3>
                      <p className={styles.featureBody}>{state.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2
                className={`${styles.sectionTitle} ${styles.sectionTitleSpaced} ${quicksand.className}`}
              >
                How it&rsquo;s built
              </h2>
              <div className={styles.craftGrid}>
                {craft.map((item) => (
                  <article key={item.title} className={styles.craftCard}>
                    <h3 className={`${styles.featureTitle} ${quicksand.className}`}>
                      {item.title}
                    </h3>
                    <p className={styles.featureBody}>{item.body}</p>
                  </article>
                ))}
              </div>

              <div className={styles.ctaRow}>
                <a
                  className={styles.btnPrimary}
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the spec on GitHub
                </a>
                <a className={styles.btn} href="mailto:eric@speedshift.io">
                  Ask about the beta
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.wrap}>
            <span>{name} — a personal relationship manager by Speedshift.</span>
            <span className={styles.footerLinks}>
              <Link href="/">Speedshift</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

const OrbitMark: React.FC = () => (
  <svg
    className={styles.brandMark}
    viewBox="0 0 100 100"
    role="img"
    aria-hidden
    focusable="false"
  >
    <defs>
      <radialGradient id="orbit-mark-bg" cx="50%" cy="41%" r="76%">
        <stop offset="0%" stopColor="#7a70d6" />
        <stop offset="100%" stopColor="#221d44" />
      </radialGradient>
    </defs>
    <rect width="100" height="100" rx="22" fill="url(#orbit-mark-bg)" />
    <g fill="none" strokeWidth="2.6">
      <circle cx="50" cy="50" r="36" stroke="#91a1de" strokeOpacity="0.55" />
      <circle cx="50" cy="50" r="27.8" stroke="#74c7ae" strokeOpacity="0.72" />
      <circle cx="50" cy="50" r="19.6" stroke="#e3b071" strokeOpacity="0.88" />
      <circle cx="50" cy="50" r="11.4" stroke="#e39193" />
    </g>
    <circle cx="50" cy="50" r="5.4" fill="#fff" fillOpacity="0.92" />
  </svg>
);

export default OrbitRings;
