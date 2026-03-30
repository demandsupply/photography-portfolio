import ImageCard from "@/components/ImageCard/ImageCard"
import styles from "./SectionThree.module.css"

export default function SectionThree( { title, subtitle }) {
  return(
    <section className={styles.sectionThree}>
      <h2 className={styles.title}>PORTFOLIO</h2>
      <div className={styles.imagesGrid}>
          <ImageCard src="/home/sample-img-horizontal.jpg" orientation="horizontal" />
          <ImageCard src="/home/sample-img-vertical.jpg" orientation="vertical" />
          <ImageCard src="/home/sample-img-horizontal.jpg" orientation="horizontal" />
      </div>
    </section>
  )
}