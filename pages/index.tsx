import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Speedshift LLC | Digital AI Consultancy</title>
        <meta name="description" content="Speedshift LLC is a Digital Consultancy focused on bringing companies into the AI era. Transform your business with cutting-edge AI solutions." />
        <meta name="keywords" content="AI consultancy, digital transformation, artificial intelligence, business innovation, AI solutions" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Speedshift" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Speedshift LLC | Digital AI Consultancy" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions. Speedshift LLC helps companies navigate the AI era." />
        <meta property="og:site_name" content="Speedshift LLC" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Speedshift LLC | Digital AI Consultancy" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI solutions. Speedshift LLC helps companies navigate the AI era." />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://speedshift.com" />
      </Head>
      
      <div className={`${styles.container} ${inter.className}`}>
        <div className={styles.titleContainer}>
          <Image
            src="/logo.svg"
            alt="Speedshift Logo"
            className={styles.logo}
            width={60}
            height={60}
            priority
          />
          <h1 className={styles.title}>Speedshift</h1>
        </div>
        <a href="mailto:eric@speedshift.io" className={styles.subtitle}>
          Accelerate your business
        </a>
      </div>
    </>
  );
};

export default Home;
