import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.left}>
                <li><a href="#">Home</a></li>
            </ul>

            <ul className={styles.right}>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Link...</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </nav>
    )
}