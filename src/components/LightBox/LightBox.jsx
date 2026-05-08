"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./LightBox.module.css";

export default function Lightbox({ photos, currentIndex, onClose }) {
  const currentPhoto = photos[currentIndex];
  console.log("currentPhoto: ", currentPhoto.fullRes);

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <button className={styles.closeBtn} onClick={onclick}>
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
    </div>
  );
}
