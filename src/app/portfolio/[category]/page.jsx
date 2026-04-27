import Gallery from "@/components/Gallery/Gallery";
import styles from "./gallery.module.css";
import { CATEGORIES } from "@/data/categories";

export default async function CategoryGallery({ params }) {
  //   const { category } = await params;
  const obtainedParamsFromURL = await params;
  const category = obtainedParamsFromURL.category;
  const currentCategory = CATEGORIES.find(
    (category) => category.slug === category,
  );

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{currentCategory.alt}</h1>
      <Gallery />
    </main>
  );
}
