import Gallery from "@/components/Gallery/Gallery";
import styles from "./gallery.module.css";
import { CATEGORIES } from "@/data/categories";
import PhotoGrid from "@/components/PhotoGrid/PhotoGrid";

export default async function CategoryGallery({ params }) {
  //   const { category } = await params;
  const obtainedParamsFromURL = await params;
  const categoryName = obtainedParamsFromURL.category;
  const currentCategory = CATEGORIES.find(
    (category) => category.slug === categoryName,
  );

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{currentCategory.alt}</h1>
      <PhotoGrid categoryName={categoryName} />
    </main>
  );
}
