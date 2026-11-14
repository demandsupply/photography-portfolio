import Gallery from "@/components/Gallery/Gallery";
import styles from "./gallery.module.css";
import { CATEGORIES } from "@/data/categories";
import PhotoGridColumns from "@/components/PhotoGrid/PhotoGridColumns";
import PhotoGridRows from "@/components/PhotoGrid/PhotoGridRows";
import { getTranslations } from "next-intl/server";

export default async function CategoryGallery({ params }) {
  //   const { category } = await params;
  const obtainedParamsFromURL = await params;
  const categoryName = obtainedParamsFromURL.category;
  const tCategories = await getTranslations("Categories");

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{tCategories(categoryName)}</h1>
      <PhotoGridRows categoryName={categoryName} />
      {/* <PhotoGridColumns categoryName={categoryName} /> */}
    </main>
  );
}
