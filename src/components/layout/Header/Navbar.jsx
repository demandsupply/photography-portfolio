import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.left}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
      </ul>

      <ul className={styles.right}>
        <li>
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
          {/* <a href="/about">About</a> */}
        </li>
        <li>
          <Link href={"/#"}>Link...</Link>
          {/* <a href="#">Link...</a> */}
        </li>
        <li>
          <Link href={"/contacts"}>Contacts</Link>
          {/* <a href="/contacts">Contacts</a> */}
        </li>
      </ul>
    </nav>
  );
}
