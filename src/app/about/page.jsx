import styles from "./page.module.css";
import ImageCard from "@/components/ImageCard/ImageCard";

export default function AboutPage() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <h1 className={styles.title}>Stefano Scalon</h1>
          <div className={styles.bioContainer}>
            <p className={styles.bio}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className={styles.bio}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className={styles.bio}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className={styles.bio}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <ImageCard
          src="/home/sample-img-vertical.jpg"
          orientation="vertical"
          className={styles.customImgCard}
          variant="none"
        />
      </div>
    </main>
  );
}
