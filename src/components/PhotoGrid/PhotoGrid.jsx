import ImageCard from "../ImageCard/ImageCard";
import styles from "./PhotoGrid.module.css";
import JSONPhotos from "@/data/photos.json";

export default function PhotoGrid({ categoryName }) {
  const PHOTOS = JSONPhotos;

  return (
    <div className={styles.photoGridContainer}>
      <p>Photos</p>
      {PHOTOS[categoryName].map((photo) => (
        <div key={photo.id}>
          <ImageCard
            title={photo.title}
            src={photo.thumb}
            orientation={photo.orientation}
            alt={photo.title}
          ></ImageCard>
          <p className={styles.title}>{photo.title}</p>
        </div>
      ))}
    </div>
  );
}
