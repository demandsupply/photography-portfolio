import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.left}>
        <li>
          <a href="./">Home</a>
        </li>
      </ul>

      <ul className={styles.right}>
        <li>
          <a href="./portfolio">Portfolio</a>
        </li>
        <li>
          <a href="./about">About</a>
        </li>
        <li>
          <a href="#">Link...</a>
        </li>
        <li>
          <a href="./contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}
