import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.left}>
        <li className="headingFont">
          <Link href={"/"}>Home</Link>
        </li>
      </ul>

      <ul className={styles.right}>
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
