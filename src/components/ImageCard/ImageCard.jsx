import Image from 'next/image';
import styles from './ImageCard.module.css'



export default function ImageCard( { src, alt, category, orientation} ) {

    const cardClassName = `${styles.cardContainer} ${styles[orientation]}`;

    return (
        <div className={cardClassName}>
            <div className={styles.imageWrapper}>
                <Image 
                    src={src}
                    alt={alt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 400px"
                />


            </div>
        </div>
    )
}