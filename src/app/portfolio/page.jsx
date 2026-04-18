import { SiSystem76 } from "react-icons/si";
import styles from "./portfolio.module.css";
import { CATEGORIES } from "@/data/categories";
import ImageCard from "@/components/ImageCard/ImageCard";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoriesContainer}>
        {CATEGORIES.map((category) => (
          <Link href={`/portfolio/${category.slug}`} key={category.id}>
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
          </Link>
        ))}
      </div>
    </main>
  );
}
