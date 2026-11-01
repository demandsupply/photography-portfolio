import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const tContacts = useTranslations("ContactsPage");
  const tNavigation = useTranslations("Navigation");

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <section className={styles.column}>
          <h3 className={styles.columnTitle}>{t("siteName")}</h3>
          <div className={styles.socialsContainer}>
            <a href="#">
              <FaInstagram size={24} />
            </a>
            <a href="#">
              <FiFacebook size={24} />
            </a>
          </div>
        </section>

        <nav aria-labelledby="footer-sitemap" className={styles.column}>
          <h3 className={styles.columnTitle}>{t("siteMapTitle")}</h3>
          <ul className={styles.columnList}>
            <li>
              <a href="#">{tNavigation("home")}</a>
            </li>
            <li>
              <a href="#">{tNavigation("portfolio")}</a>
            </li>
            <li>
              <a href="#">{tNavigation("about")}</a>
            </li>
            <li>
              <a href="#">{tNavigation("incoming")}</a>
            </li>
            <li>
              <a href="#">{tNavigation("contacts")}</a>
            </li>
          </ul>
        </nav>

        <section className={styles.column}>
          <h3 className={styles.columnTitle}>{t("contactsTitle")}</h3>
          <div className={styles.contactsContainer}>
            <p>
              {tContacts("email")}
              <span>{tContacts("emailAddress")}</span>
            </p>
            <p>
              {tContacts("phone")}
              <span>{tContacts("phoneNumber")}</span>
            </p>
          </div>
        </section>

        <nav aria-labelledby="footer-useful-links" className={styles.column}>
          <h3 className={styles.columnTitle}>{t("usefulLinksTitle")}</h3>
          <ul className={styles.columnList}>
            <li>
              <a href="#">{t("privacy")}</a>
            </li>
            <li>
              <a href="#">{t("cookie")}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.footerMobile}>
        <h3>{t("siteName")}</h3>
        <p>{t("tagline")}</p>

        <div className={styles.socialsContainer}>
          <a href="#">
            <FaInstagram size={24} />
          </a>
          <a href="#">
            <FiFacebook size={24} />
          </a>
        </div>

        <div className={styles.contactsContainer}>
          <p>
            {t("email")}
            <span>{t("emailAddress")}</span>
          </p>
          <p>
            {t("phone")}
            <span>{t("phoneNumber")}</span>
          </p>
        </div>

        <div className={styles.policiesContainer}>
          <li>
            <a href="#">{t("privacy")}</a>
          </li>
          <li>
            <a href="#">{t("cookie")}</a>
          </li>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          <small>{t("copyright")}</small>
        </p>
      </div>
    </footer>
  );
}
