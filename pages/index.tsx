import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const portfolioEntryRef = useRef<HTMLDivElement>(null);
  const portfolioLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    const portfolioEntry = portfolioEntryRef.current;
    if (!el) return;

    const root = document.documentElement;

    const syncPortfolioMask = (clientX: number, clientY: number) => {
      const link = portfolioLinkRef.current;
      if (!link) return;
      const r = link.getBoundingClientRect();
      link.style.setProperty('--portfolio-mask-x', `${clientX - r.left}px`);
      link.style.setProperty('--portfolio-mask-y', `${clientY - r.top}px`);
    };

    const setCenter = (x: number, y: number) => {
      root.style.setProperty('--spotlight-x', `${x}px`);
      root.style.setProperty('--spotlight-y', `${y}px`);
      syncPortfolioMask(x, y);
    };

    setCenter(window.innerWidth / 2, window.innerHeight / 2);

    const onMove = (e: MouseEvent) => setCenter(e.clientX, e.clientY);

    const onLeaveWindow = () => {
      el.classList.add(styles.spotlightHidden);
      portfolioEntry?.classList.add(styles.spotlightHidden);
    };
    const onEnterWindow = () => {
      el.classList.remove(styles.spotlightHidden);
      portfolioEntry?.classList.remove(styles.spotlightHidden);
    };

    window.addEventListener('mousemove', onMove);
    root.addEventListener('mouseleave', onLeaveWindow);
    root.addEventListener('mouseenter', onEnterWindow);

    return () => {
      window.removeEventListener('mousemove', onMove);
      root.removeEventListener('mouseleave', onLeaveWindow);
      root.removeEventListener('mouseenter', onEnterWindow);
      portfolioLinkRef.current?.style.removeProperty('--portfolio-mask-x');
      portfolioLinkRef.current?.style.removeProperty('--portfolio-mask-y');
    };
  }, []);

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
        <div ref={spotlightRef} className={styles.spotlight} aria-hidden />
        <div ref={portfolioEntryRef} className={styles.portfolioEntry}>
          <Link
            ref={portfolioLinkRef}
            href="/portfolio"
            className={styles.portfolioLink}
            aria-label="Eric Richardson — portfolio"
          >
            <span className={styles.portfolioIcon} aria-hidden>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 9V6a3 3 0 0 1 6 0v3" />
                <path d="M4 11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9H4v-9Z" />
                <path d="M4 14h16" />
              </svg>
            </span>
          </Link>
        </div>
        <div className={styles.content}>
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
      </div>
    </>
  );
};

export default Home;
