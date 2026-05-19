import ImageCard from "@/components/ImageCard/ImageCard";
import styles from "./SectionThree.module.css";

export default function SectionThree({ title, subtitle }) {
  return (
    <section className={styles.sectionThree}>
      <h2 className={styles.title}>Selected Works</h2>
      {/* ROWS GRID */}
      <div className={styles.imagesGridRows}>
        <div className={styles.row}>
          <ImageCard
            src="/home/sample-img-horizontal.jpg"
            orientation="horizontal"
          />
          <ImageCard
            src="/home/sample-img-vertical.jpg"
            orientation="vertical"
          />
          <ImageCard
            src="/home/sample-img-horizontal.jpg"
            orientation="horizontal"
          />
        </div>
        <div className={styles.row}>
          <ImageCard
            src="/home/sample-img-vertical.jpg"
            orientation="vertical"
          />
          <ImageCard
            src="/home/sample-img-horizontal.jpg"
            orientation="horizontal"
          />
          <ImageCard
            src="/home/sample-img-horizontal.jpg"
            orientation="horizontal"
          />
        </div>
        <div className={styles.row}>
          <ImageCard
            src="/home/sample-img-horizontal.jpg"
            orientation="horizontal"
          />
          <ImageCard
            src="/home/sample-img-horizontal.jpg"
            orientation="horizontal"
          />
          <ImageCard
            src="/home/sample-img-vertical.jpg"
            orientation="vertical"
          />
        </div>
        <div className={styles.row}>
          <ImageCard
            src="/home/sample-img-vertical.jpg"
            orientation="vertical"
          />
          <ImageCard
            src="/home/sample-img-horizontal.jpg"
            orientation="horizontal"
          />
          <ImageCard
            src="/home/sample-img-horizontal.jpg"
            orientation="horizontal"
          />
        </div>
      </div>

      {/* COLUMNS GRID */}
      {/* <div className={styles.imagesGridColumns}>
        <div className={styles.column}>
          <ImageCard
            src="/home/sample-img-horizontal.jpg"
            orientation="horizontal"
          />
          <ImageCard
            src="/home/sample-img-vertical.jpg"
            orientation="vertical"
          />
          <ImageCard
            src="/home/sample-img-horizontal.jpg"
            orientation="horizontal"
          />
          <ImageCard
            src="/home/sample-img-vertical.jpg"
            orientation="vertical"
          />
        </div>
        <div className={styles.column}>
          <ImageCard
            src="/home/sample-img-vertical.jpg"
            orientation="vertical"
          />
          <ImageCard
            src="/home/sample-img-horizontal.jpg"
            orientation="horizontal"
          />
          <ImageCard
            src="/home/sample-img-vertical.jpg"
            orientation="vertical"
          />
          <ImageCard
            src="/home/sample-img-vertical.jpg"
            orientation="vertical"
          />
        </div>
        <div className={styles.column}>
          <ImageCard
            src="/home/sample-img-horizontal.jpg"
            orientation="horizontal"
          />
          <ImageCard
            src="/home/sample-img-vertical.jpg"
            orientation="vertical"
          />
          <ImageCard
            src="/home/sample-img-horizontal.jpg"
            orientation="horizontal"
          />
          <ImageCard
            src="/home/sample-img-vertical.jpg"
            orientation="vertical"
          />
        </div>
      </div> */}
    </section>
  );
}
