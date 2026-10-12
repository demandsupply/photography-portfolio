"use client";
import { useState } from "react";
import styles from "./LightBox.module.css";

export default function Lightbox({
  photos,
  index,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(index);

  // const openLightbox = (index) => setCurrentIndex(index);
  // const closeLightbox = () => setCurrentIndex(null);

  const showNext = () =>
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  const showPrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + photos.length) % photos.length);

  const currentPhoto = photos[currentIndex];
  console.log("currentPhoto: ", currentPhoto.fullRes);

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <button className={styles.closeBtn} onClick={onClose}>
        &#10005;
      </button>

      <div className={styles.photoContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={currentPhoto.fullRes}
            alt={currentPhoto.title}
            loading="lazy"
            className={`${styles.photoFull} ${styles[currentPhoto.orientation]}`}
          />
          <p className={styles.caption}>{currentPhoto.title}</p>
        </div>
      </div>

      <button
        className={styles.navBtn}
        onClick={(e) => {
          e.stopPropagation();
          showPrev();
        }}
        style={{ left: 30 }}
      >
        &#10094;
      </button>

      <button
        className={styles.navBtn}
        onClick={(e) => {
          e.stopPropagation();
          showNext();
        }}
        style={{ right: 30 }}
      >
        &#10095;
      </button>
    </div>
  );
}
