import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';
import DarkModeButton from '../util/darkModeButton/darkModeButton';

export default function Footer({ accounts, onThemeButtonClick, darkTheme }) {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="flex items-center gap-8">
        <DarkModeButton onButtonClick={onThemeButtonClick} darkTheme={darkTheme} className={styles.darkModeButton} />
        <span className="text-center text-sm text-text-primary xs:text-base mobile:text-left">
          Copyright Léa Shamaa © All rights reserved.
        </span>
      </div>
      <div className="flex gap-4">
        {accounts.map((account) => (
          <a
            className="relative h-8 w-8 transition-transform hover:scale-110 active:scale-95"
            key={account.name}
            title={account.name}
            href={account.url}
            rel="noreferrer"
            target="_blank"
          >
            <Image fill sizes="32px" alt={account.name} className="rounded" src={account.icon} />
          </a>
        ))}
      </div>
    </footer>
  );
}
