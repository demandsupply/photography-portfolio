import styles from "./SectionFour.module.css";
import ImageCard from "@/components/ImageCard/ImageCard";
import { CATEGORIES } from "@/data/categories";

const categoriesList = CATEGORIES.map((category) => category.alt).join("  |  ");

export default function SectionFour() {
  return (
    <section className={styles.sectionFour}>
      <h2 className={styles.title}>Portfolio</h2>
      <p className={styles.subtitle}>{categoriesList}</p>
      <div className={styles.categoriesContainer}>
        {CATEGORIES.map((category) => (
          <ImageCard
            key={category.id}
            src={category.src}
            alt={category.alt}
            orientation={category.orientation}
            className={styles.categoryCard}
          >
            <div className={styles.categoryOverlay}>
              <h3>{category.alt}</h3>
            </div>
          </ImageCard>
        ))}
      </div>
    </section>
  );
}
