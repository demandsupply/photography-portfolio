import ImageCard from "@/components/ImageCard/ImageCard";
import styles from "./page.module.css";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

import { useTranslations } from "next-intl";

export default function ContactsPage() {
  const t = useTranslations("ContactsPage");

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.imgTitle}>{t("title")}</h1>
        <div className={styles.contactsBox}>
          <p>
            {t("email")}
            <span className={styles.contactsEmail}>{t("emailAddress")}</span>
          </p>
          <p>
            {t("phone")}
            <span className={styles.contactsPhone}>{t("phoneNumber")}</span>
          </p>
          <div className={styles.socialsContainer}>
            <a href="#">
              <FaInstagram size={24} />
            </a>
            <a href="#">
              <FiFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
