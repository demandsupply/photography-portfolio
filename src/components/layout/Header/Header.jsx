"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import styles from "./Header.module.css";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [stickyNav, setStickyNav] = useState(false);
  const [topPosition, setTopPosition] = useState(0);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // if user's at the top of the page keep navbar at the top
      if (currentScrollY <= 0) {
        setStickyNav(false);
        setTopPosition(0);
      } else if (currentScrollY < prevScrollY.current) {
        setStickyNav(true);
      } else if (currentScrollY > prevScrollY.current) {
        if (stickyNav) {
          setStickyNav(false);
          setTopPosition(currentScrollY);
        }
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stickyNav]);

  const isTransparent = isHome && topPosition === 0 && !stickyNav;
  const backgroundClass = isTransparent
    ? styles.headerHomeTop
    : styles.headerPages;
  const positionClass = stickyNav
    ? styles.sticky
    : isHome
      ? styles.headerAbsolute
      : styles.headerPagesRelative;

  const headerClass = `${styles.headerContainer} ${backgroundClass} ${positionClass}`;

  return (
    <header
      className={headerClass}
      style={
        !stickyNav && topPosition > 0
          ? { position: "absolute", top: `${topPosition}px` }
          : undefined
      }
    >
      <Navbar />
    </header>
  );
}
