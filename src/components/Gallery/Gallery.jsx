import { CATEGORIES } from "@/data/categories";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./Gallery.module.css";

export default function Gallery({ src, alt, slug, className = "" }) {
  const IMAGES = CATEGORIES;
  return (
    <div className={styles.galleryContainer}>
      <p>images</p>
      {IMAGES.map((image) => (
        <ImageCard
          key={image.id}
          src={image.src}
          alt={image.alt}
          orientation={image.orientation}
          className={styles.categoryCard}
        ></ImageCard>
      ))}
    </div>
  );
}
