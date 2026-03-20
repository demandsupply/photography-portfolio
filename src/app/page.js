import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/home/HeroSection/HeroSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection title="PROVA" image="/home/sample-img.webp" />
      </main>
    </div>
  );
}
