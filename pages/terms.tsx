import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import LegalDocument from '../components/LegalDocument';
import { effectiveDate, termsSections } from '../lib/legalContent';

const inter = Inter({ subsets: ['latin'] });

const lede =
  'The agreement between you and Speedshift LLC for the Speedshift website, Track Evolution and Orbit Rings. Plain terms where possible, and the safety section for Track Evolution is worth actually reading.';

const Terms: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | Speedshift LLC</title>
        <meta
          name="description"
          content="Terms of Service for the Speedshift website, Track Evolution and Orbit Rings — accounts, your content, acceptable use, track-day safety, and the legal terms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Terms of Service | Speedshift LLC" />
        <meta
          property="og:description"
          content="The agreement covering the Speedshift website, Track Evolution and Orbit Rings."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms of Service | Speedshift LLC" />
        <meta
          name="twitter:description"
          content="The agreement covering the Speedshift website, Track Evolution and Orbit Rings."
        />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href="https://speedshift.com/terms" />
        <meta name="last-modified" content={effectiveDate} />
      </Head>

      <div className={inter.className}>
        <LegalDocument
          title="Terms of Service"
          lede={lede}
          sections={termsSections}
          counterpart={{ href: '/privacy', label: 'Privacy Policy' }}
        />
      </div>
    </>
  );
};

export default Terms;
