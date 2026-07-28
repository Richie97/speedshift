import React from 'react';
import Link from 'next/link';
import styles from '../pages/legal.module.css';
import type { LegalBlock, LegalSection } from '../lib/legalContent';
import { effectiveDate, entity, products } from '../lib/legalContent';

type Props = {
  title: string;
  lede: string;
  sections: readonly LegalSection[];
  /** The sibling document, linked from the footer. */
  counterpart: { href: string; label: string };
};

const Block: React.FC<{ block: LegalBlock }> = ({ block }) => {
  switch (block.kind) {
    case 'p':
      return <p className={styles.paragraph}>{block.text}</p>;
    case 'list':
      return (
        <ul className={styles.list}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'defs':
      return (
        <div className={styles.defs}>
          {block.items.map((item) => (
            <div key={item.term} className={styles.defItem}>
              <div className={styles.defTerm}>{item.term}</div>
              <div className={styles.defBody}>{item.body}</div>
            </div>
          ))}
        </div>
      );
  }
};

const LegalDocument: React.FC<Props> = ({ title, lede, sections, counterpart }) => {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link href="/" className={styles.homeLink}>
          ← Speedshift home
        </Link>

        <h1 className={styles.title}>{title}</h1>
        <p className={styles.effective}>Effective {effectiveDate}</p>
        <p className={styles.lede}>{lede}</p>

        <p className={styles.sectionLabel}>Applies to</p>
        <div className={styles.scopeGrid}>
          {products.map((product) => (
            <div key={product.name} className={styles.scopeCell}>
              <div className={styles.scopeName}>{product.name}</div>
              <div className={styles.scopeDetail}>{product.detail}</div>
            </div>
          ))}
        </div>

        <p className={styles.sectionLabel}>Contents</p>
        <ol className={styles.toc}>
          {sections.map((section, i) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>
                <span className={styles.tocIndex}>{String(i + 1).padStart(2, '0')}</span>
                {section.heading}
              </a>
            </li>
          ))}
        </ol>

        <hr className={styles.divider} aria-hidden />

        {sections.map((section, i) => (
          <section key={section.id} id={section.id} className={styles.section}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>{String(i + 1).padStart(2, '0')}</span>
              {section.heading}
            </h2>
            {section.blocks.map((block, blockIndex) => (
              <Block key={blockIndex} block={block} />
            ))}
          </section>
        ))}

        <footer className={styles.footer}>
          <span>
            © {new Date().getFullYear()} {entity}
          </span>
          <span className={styles.footerLinks}>
            <Link href={counterpart.href}>{counterpart.label}</Link>
            <Link href="/">Speedshift</Link>
            <Link href="/trackevolution">Track Evolution</Link>
            <Link href="/orbitrings">Orbit Rings</Link>
          </span>
        </footer>
      </div>
    </main>
  );
};

export default LegalDocument;
