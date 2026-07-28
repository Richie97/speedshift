import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import LegalDocument from '../components/LegalDocument';
import { effectiveDate, privacySections } from '../lib/legalContent';

const inter = Inter({ subsets: ['latin'] });

const lede =
  'What Speedshift LLC collects, why, and what you can do about it — written per product, because a static website, a track-day logbook and a relationship manager do not handle data the same way.';

const Privacy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Speedshift LLC</title>
        <meta
          name="description"
          content="Privacy Policy for the Speedshift website, Track Evolution and Orbit Rings. What we collect, how it is used, who it is shared with, and how to delete it."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Privacy Policy | Speedshift LLC" />
        <meta
          property="og:description"
          content="How Speedshift LLC handles data across the Speedshift website, Track Evolution and Orbit Rings."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | Speedshift LLC" />
        <meta
          name="twitter:description"
          content="How Speedshift LLC handles data across the Speedshift website, Track Evolution and Orbit Rings."
        />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href="https://speedshift.com/privacy" />
        <meta name="last-modified" content={effectiveDate} />
      </Head>

      <div className={inter.className}>
        <LegalDocument
          title="Privacy Policy"
          lede={lede}
          sections={privacySections}
          counterpart={{ href: '/terms', label: 'Terms of Service' }}
        />
      </div>
    </>
  );
};

export default Privacy;
