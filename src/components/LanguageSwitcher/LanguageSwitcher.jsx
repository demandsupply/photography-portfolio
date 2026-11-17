"use client";

import { useRouter, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useState, useEffect, useTransition } from "react";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (e) => {
    const switchLocale = e.target.checked ? "en" : "it";
    router.replace(pathname, { locale: switchLocale, scroll: false });
  };
  return (
    <div className={styles.container}>
      <span
        className={`${styles.label} ${locale === "it" ? styles.active : ""}`}
      >
        IT
      </span>
      <label className={styles.switch}>
        <input
          key={locale}
          type="checkbox"
          role="switch"
          className={styles.input}
          defaultChecked={locale === "en"}
          onChange={changeLanguage}
          aria-label="Selettore-lingua"
        />
        <span className={styles.slider}></span>
      </label>
      <span
        className={`${styles.label} ${locale === "en" ? styles.active : ""}`}
      >
        EN
      </span>
    </div>
  );
}
