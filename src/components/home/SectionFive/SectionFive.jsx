import styles from "./SectionFive.module.css";
import ImageCard from "@/components/ImageCard/ImageCard";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function SectionFive() {
  // fetch from it.json namespace "SectionFive"
  const t = useTranslations('SectionFive');

  return (
    <section className={styles.sectionFive}>
      <div className={styles.aboutContainer}>
        <h2 className={`${styles.titleHidden} ${styles.titleProperties}`}>About Me</h2>
        <ImageCard
          src="/home/sample-img-vertical.jpg"
          orientation="vertical"
          className={styles.customImgCard}
          variant="none"
        />
        <div className={styles.container}>
          <h2 className={`${styles.title} ${styles.titleProperties}`}>{t('title')}</h2>
          <div className={styles.aboutText}>
            <p>{t('paragraphs.p1')}</p>
            <p>{t('paragraphs.p2')}</p>
            <p>{t('paragraphs.p3')}</p>
          </div>
            <Button variant="secondary" href="/about">{t('button')}</Button>
        </div>
      </div>
    </section>
  );
}
