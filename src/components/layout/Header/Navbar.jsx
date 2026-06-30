"use client"

import styles from "./Navbar.module.css";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const handleClickOutsideDropdown = (event) => {
      if (isOpen && !navRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutsideDropdown)
    document.addEventListener("touch", handleClickOutsideDropdown)

    return () => {
      document.removeEventListener("click", handleClickOutsideDropdown)
      document.removeEventListener("touch", handleClickOutsideDropdown)
    }
  }, [isOpen])

  return (
    <nav ref={navRef} className={styles.nav}>
      <ul className={styles.left}>
        <li className="headingFont">
          <Link href={"/"}>Home</Link>
        </li>
      </ul>

      <button className={styles.hamburgerMenu} onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <IoClose className={styles.iconCustom}></IoClose> : <IoMenu className={styles.iconCustom}></IoMenu> }
      </button>

      <ul className={`${styles.right} ${isOpen ? styles.dropdownMenu : ""}`}>
        <li className="headingFont">
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li className="headingFont">
          <Link href={"/about"}>About</Link>
          {/* <a href="/about">About</a> */}
        </li>
        <li className="headingFont">
          <Link href={"/#"}>Link...</Link>
          {/* <a href="#">Link...</a> */}
        </li>
        <li className="headingFont">
          <Link href={"/contacts"}>Contacts</Link>
          {/* <a href="/contacts">Contacts</a> */}
        </li>
      </ul>
    </nav>
  );
}
