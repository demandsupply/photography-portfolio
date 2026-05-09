"use client";
import { useEffect } from "react";
import styles from "./LightBox.module.css";

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
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
          onPrev();
        }}
        style={{ left: 30 }}
      >
        &#10094;
      </button>

      <button
        className={styles.navBtn}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        style={{ right: 30 }}
      >
        &#10095;
      </button>
    </div>
  );
}
