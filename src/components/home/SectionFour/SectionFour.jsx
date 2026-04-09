import styles from "./SectionFour.module.css"
import ImageCard from "@/components/ImageCard/ImageCard"

const CATEGORIES = [
	{ id:1, src: "/home/sample-img-horizontal.jpg", alt: "Portraits", orientation: "horizontal"},
	{ id:2, src: "/home/sample-img-horizontal.jpg", alt: "Events",  orientation: "horizontal"},
	{ id:3, src: "/home/sample-img-horizontal.jpg", alt: "Landscapes", orientation: "horizontal"},
	{ id:4, src: "/home/sample-img-horizontal.jpg", alt: "Still Life", orientation: "horizontal"}
]

export default function SectionFour() {
	return(
		<section className={styles.sectionFour}>
			<p className={styles.title}>Portfolio</p>
			<p className={styles.subtitle}>Portraits  |  Events  |  Landscapes  |  Still Life</p>
			<div className={styles.categoriesContainer}>
				{CATEGORIES.map((category) => (
					<ImageCard
						key={category.id}
						src={category.src}
						alt={category.alt}
						orientation={category.orientation}
						className={styles.categoryCard} 
					/>
				))}
			</div>
		</section>
	)
}