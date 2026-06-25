import ImageCard from "@/components/ImageCard/ImageCard";
import styles from "./page.module.css"
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

export default function ContactsPage() {
    return(
        <main className={styles.main}>
					<div className={styles.hero}>

						<h1 className={styles.imgTitle}>Let&apos;s keep in touch</h1>
						<div className={styles.contactsBox}>
							<p>Email: <span className={styles.contactsEmail}>scphotos@gmail.com</span></p>
							<p>Phone: <span className={styles.contactsPhone}>+39 340 433 8900</span></p>
							<div className={styles.socialsContainer}>
								<a href="#"><FaInstagram size={24}/></a>
								<a href="#"><FiFacebook size={24}/></a>
							</div>
						</div>
					</div>

        </main>
    )
}