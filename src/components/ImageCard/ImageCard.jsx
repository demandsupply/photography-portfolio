import Image from "next/image";
import styles from "./ImageCard.module.css";

export default function ImageCard({
  src,
  alt,
  category,
  orientation,
  className = "",
  children,
  variant = "default",
}) {
  const cardClassName = `${styles.cardContainer} ${styles[orientation]} ${className}`;

  return (
    <div className={cardClassName}>
      <div className={styles.imageWrapper}>
        <Image src={src} alt={alt} fill className={styles.image} />
      </div>

      {variant !== "none" && (
        <div
          className={
            variant === "bottom" ? styles.customBottomOverlay : styles.overlay
          }
        >
          {children}
        </div>
      )}
    </div>
  );
}
