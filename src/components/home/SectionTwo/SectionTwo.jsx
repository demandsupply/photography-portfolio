import styles from "./SectionTwo.module.css"

export default function SectionTwo( { title, subtitle }) {
    return(
        <section className={styles.sectionTwo}>
            <div className={styles.content}>
                <p className={styles.title}>A Visual Study by Stefano</p>
                <p className={styles.subtitle}>Quiet observations in a loud world</p>
            </div>
        </section>
    )
}