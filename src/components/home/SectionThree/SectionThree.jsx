import ImageCard from "@/components/ImageCard/ImageCard"
import styles from "./SectionThree.module.css"

export default function SectionThree( { title, subtitle }) {
  return(
    <section className={styles.sectionThree}>
      <h2 className={styles.title}>Selected Works</h2>
      <div className={styles.imagesGrid}>
        <div className={styles.column}>
          <ImageCard src="/home/sample-img-horizontal.jpg" orientation="horizontal" />
          <ImageCard src="/home/sample-img-vertical.jpg" orientation="vertical" />
          <ImageCard src="/home/sample-img-horizontal.jpg" orientation="horizontal" />
          <ImageCard src="/home/sample-img-vertical.jpg" orientation="vertical" />
        </div>
        <div className={styles.column}>
          <ImageCard src="/home/sample-img-vertical.jpg" orientation="vertical" />
          <ImageCard src="/home/sample-img-horizontal.jpg" orientation="horizontal" />
          <ImageCard src="/home/sample-img-vertical.jpg" orientation="vertical" />
          <ImageCard src="/home/sample-img-vertical.jpg" orientation="vertical" />
        </div>
        <div className={styles.column}>
          <ImageCard src="/home/sample-img-horizontal.jpg" orientation="horizontal" />
          <ImageCard src="/home/sample-img-vertical.jpg" orientation="vertical" />
          <ImageCard src="/home/sample-img-horizontal.jpg" orientation="horizontal" />
          <ImageCard src="/home/sample-img-vertical.jpg" orientation="vertical" />
        </div>
      </div>
    </section>
  )
}