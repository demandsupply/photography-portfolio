import styles from "./Footer.module.css"
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";



export default function Footer() {
	return(
		<footer className={styles.footer}>
			<div className={styles.footerGrid}>
				<section className={styles.column}>
					<h3 className={styles.columnTitle}>SCPhotos</h3>
					<div className={styles.socialsContainer}>
						<a href="#"><FaInstagram size={24}/></a>
						<a href="#"><FiFacebook size={24}/></a>
					</div>
				</section>

				<nav aria-labelledby="footer-sitemap" className={styles.column}>
					<h3 className={styles.columnTitle}>Site Map</h3>
					<ul className={styles.columnList}>
						<li><a href="#">Home</a></li>
						<li><a href="#">Portfolio</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">???</a></li>
						<li><a href="#">Contacts</a></li>
					</ul>
				</nav>

				<section className={styles.column}>
					<h3 className={styles.columnTitle}>Keep in Touch</h3>
					<div className={styles.contactsContainer}>
						<p>Email: <span>scphotos@gmail.com</span></p>
						<p>Phone: <span>+39 320 567 9838</span></p>
					</div>
				</section>

				<nav aria-labelledby="footer-useful-links" className={styles.column}>
					<h3 className={styles.columnTitle}>Useful Links</h3>
					<ul className={styles.columnList}>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Cookie Policy</a></li>
					</ul>
				</nav>
				
			</div>
			<div className={styles.footerBottom}>
				<p><small>© 2026. Stefano Scalon - Tutti i diritti sono riservati.</small></p>
			</div>
		</footer>	
	)
}