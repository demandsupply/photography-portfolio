import ImageCard from "@/components/ImageCard/ImageCard";
import styles from "./SectionThree.module.css";
import PhotoGridRows from "@/components/PhotoGrid/PhotoGridRows";
import PhotoGridColumns from "@/components/PhotoGrid/PhotoGridColumns";
import selectedPhotos from "@/data/selectedPhotos";


export default function SectionThree({ title, subtitle }) {
  const customBreakponts = {
    480: 1,
    768: 2,
    default: 3
  }
  return (
    <section className={styles.sectionThree}>
      <h2 className={styles.title}>Selected Works</h2>
      {/* ROWS GRID */}
      {/* <PhotoGridRows photos={selectedPhotos} className={styles.imagesGrid}/> */}


      {/* COLUMNS GRID */}
      <PhotoGridColumns photos={selectedPhotos} breakpoints={customBreakponts}/>
      {/* <div className={styles.imagesGrid}>
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
