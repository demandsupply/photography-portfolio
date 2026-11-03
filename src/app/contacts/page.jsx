import ImageCard from "@/components/ImageCard/ImageCard";
import styles from "./page.module.css";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

import { useTranslations } from "next-intl";
import { SITE_CONFIG } from "@/config/site";

export default function ContactsPage() {
  const t = useTranslations("ContactsPage");

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.imgTitle}>{t("title")}</h1>
        <div className={styles.contactsBox}>
          <p>
            {t("email")}
            <span className={styles.contactsEmail}>{SITE_CONFIG.email}</span>
          </p>
          <p>
            {t("phone")}
            <span className={styles.contactsPhone}>{SITE_CONFIG.phone}</span>
          </p>
          <div className={styles.socialsContainer}>
            <a href={SITE_CONFIG.instagram_url} target="_blank">
              <FaInstagram size={24} />
            </a>
            <a href={SITE_CONFIG.facebook_url} target="_blank">
              <FiFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
