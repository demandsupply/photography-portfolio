"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import styles from "./Header.module.css"

export default function Header() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const headerClass = `${styles.headerContainer} ${isHome ? styles.headerHome : styles.headerPages}`
    return (
        <header className={headerClass}>
            <Navbar />
        </header>
    )
}