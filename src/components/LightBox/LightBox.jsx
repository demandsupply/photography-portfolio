"use client";
import { useEffect } from "react";
import Image from "next/image";
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
        <Image
          src={currentPhoto.fullRes}
          alt={currentPhoto.title}
          fill
          className={styles.photoFull}
        />
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
