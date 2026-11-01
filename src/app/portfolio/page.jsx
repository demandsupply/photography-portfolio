import { SiSystem76 } from "react-icons/si";
import styles from "./page.module.css";
import { CATEGORIES } from "@/data/categories";
import ImageCard from "@/components/ImageCard/ImageCard";
import Link from "next/link";

import { useTranslations } from "next-intl";

export default function PortfolioPage() {
  const t = useTranslations("PortfolioPage");
  const tCategories = useTranslations("Categories");

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{t("title")}</h1>
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
    </main>
  );
}
