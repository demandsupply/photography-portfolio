import { useTranslations } from "next-intl";
import styles from "./SectionTwo.module.css";

export default function SectionTwo({ title, subtitle }) {
  const t = useTranslations("SectionTwo");

  return (
    <section className={styles.sectionTwo}>
      <div className={styles.content}>
        <p className={styles.title + " headingFont"}>{t("title")}</p>
        <p className={styles.subtitle}>{t("subtitle")}</p>
      </div>
    </section>
  );
}
