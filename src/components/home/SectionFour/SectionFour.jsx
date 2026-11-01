import styles from "./SectionFour.module.css";
import ImageCard from "@/components/ImageCard/ImageCard";
import { CATEGORIES } from "@/data/categories";
import Link from "next/link";
import { useTranslations } from "next-intl";

const categoriesList = CATEGORIES.map((category) => category.alt).join("  |  ");

export default function SectionFour() {
  const t = useTranslations("SectionFour");
  const tCategories = useTranslations("Categories");
  const categoriesList = CATEGORIES.map((category) =>
    tCategories(category.slug),
  ).join("   |   ");

  return (
    <section className={styles.sectionFour}>
      <h2 className={styles.title}>{t("title")}</h2>
      <p className={styles.subtitle}>{categoriesList}</p>
      <div className={styles.categoriesContainer}>
        {CATEGORIES.map((category) => (
          <Link href={`/portfolio/${category.slug}`} key={category.id}>
            <ImageCard
              key={category.id}
              src={category.src}
              alt={tCategories(category.slug)}
              orientation={category.orientation}
              className={styles.categoryCard}
            >
              <div className={styles.categoryOverlay}>
                <h3>{tCategories(category.slug)}</h3>
              </div>
            </ImageCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
