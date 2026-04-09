import Image from 'next/image';
import styles from './ImageCard.module.css'



export default function ImageCard( { src, alt, category, orientation, className="", children} ) {

    const cardClassName = `${styles.cardContainer} ${styles[orientation]} ${className}`;

    return (
        <div className={cardClassName}>
            <div className={styles.imageWrapper}>
                <Image src={src} alt={alt} fill className={styles.image} />
            </div>
            {children && <div className={styles.overlay}>{children}</div> }

        </div>
    )
}