"use client";
import { useState } from "react";
import styles from "./LightBox.module.css";

export default function Lightbox({
  photos,
  initialIndex = 0,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

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
        close
      </button>

      <div className={styles.photoContainer}>
        <img
          src={currentPhoto.fullRes}
          alt={currentPhoto.title}
          loading="lazy"
          className={styles.photoFull}
        />
        <p className={styles.caption}>{currentPhoto.title}</p>
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
