import styles from "./SectionFive.module.css"
import ImageCard from "@/components/ImageCard/ImageCard"

export default function SectionFive() {
  return(
		<section className={styles.sectionFive}>
			<div className={styles.aboutContainer}>
				<ImageCard src="/home/sample-img-vertical.jpg" orientation="vertical" className={styles.customImgCard} />
				<div className={styles.container}>
					<h2 className={styles.title}>About Me</h2>
					<div className={styles.aboutText}>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					</div>
					<button>Link</button>
				</div>
			</div>
		</section>
	)
}