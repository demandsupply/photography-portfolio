import Image from 'next/image';
import styles from './ImageCard.module.css'



export default function ImageCard( { src, alt, category, orientation, className=""} ) {

    const cardClassName = `${styles.cardContainer} ${styles[orientation]} ${className}`;

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