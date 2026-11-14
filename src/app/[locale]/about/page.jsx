import styles from "./page.module.css";
import ImageCard from "@/components/ImageCard/ImageCard";

import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <main>
      <h1 className={styles.titleHidden}>{t("title")}</h1>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <h1 className={styles.title}>{t("title")}</h1>
          <div className={styles.bioContainer}>
            <p className={styles.bio}>{t("paragraphs.p1")}</p>
            <p className={styles.bio}>{t("paragraphs.p2")}</p>
            <p className={styles.bio}>{t("paragraphs.p3")}</p>
            <p className={styles.bio}>{t("paragraphs.p4")}</p>
          </div>
        </div>
        <ImageCard
          src="/home/sample-img-vertical.jpg"
          orientation="vertical"
          className={styles.customImgCard}
          variant="none"
        />
      </div>
    </main>
  );
}
