import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import SectionTwo from "@/components/home/SectionTwo/SectionTwo";
import SectionThree from "@/components/home/SectionThree/SectionThree";
import SectionFour from "@/components/home/SectionFour/SectionFour";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection title="PROVA" image="/home/sample-img.webp" />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </main>
    </div>
  );
}
