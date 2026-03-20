import Image from "next/image"
import styles from "./HeroSection.module.css"

export default function HeroSection( {title, subtitle, image } ) {
    return(
        <section className={styles.hero}>
            <Image
                src={image}
                alt="Hero background"
                fill
                priority
                className={styles.backgroundImage}
            />
            <div className={styles.overlay} />

            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </section>
    )
}