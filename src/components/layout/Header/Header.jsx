"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import styles from "./Header.module.css";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // keep the vertical header translation and trigger the render when changes
  const [translateHeaderY, setTranslateHeaderY] = useState(0);
  const [isTopPosition, setIsTopPosition] = useState(true);

  // reference to the header HTML element
  const headerRef = useRef(null);
  const prevScrollYPosition = useRef(0);
  const currentTranslateHeaderY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerHeight = headerRef.current
        ? headerRef.current.offsetHeight
        : 80;
      const scrolled = currentScrollY - prevScrollYPosition.current;

      setIsTopPosition(currentScrollY <= 0);

      // if user's at the top of the page keep navbar at the top
      if (currentScrollY <= 0) {
        currentTranslateHeaderY.current = 0;
      } else {
        // calculate the navbar's new position
        const toTranslate = currentTranslateHeaderY.current - scrolled;
        // set the navbar's position limits (clamp between 0 and -80px)
        currentTranslateHeaderY.current = Math.min(
          0,
          Math.max(-headerHeight, toTranslate),
        );
      }
      setTranslateHeaderY(currentTranslateHeaderY.current);
      prevScrollYPosition.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHome && isTopPosition;
  const backgroundClass = isTransparent
    ? styles.headerHomeTop
    : styles.headerPages;

  const headerClass = `${styles.headerContainer} ${backgroundClass}`;

  return (
    <header
      // link the DOM node to headerRef to use it
      ref={headerRef}
      className={headerClass}
      style={{ transform: `translateY(${translateHeaderY}px)` }}
    >
      <Navbar />
    </header>
  );
}
