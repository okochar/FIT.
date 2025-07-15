import Link from "next/link";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>
        Let’s bring your memories to life. You can reach us via:
      </p>

      <div className={styles.contactList}>
        <p>
          📱 WhatsApp:
          <Link
            href="https://wa.me/2347015727526"
            className={styles.contactLink}
            target="_blank"
          >
            {" "}Click to chat
          </Link>
        </p>
        <p>
          📧 Email:
          <a
            href="mailto:bawayusuff@gmail.com"
            className={styles.contactLink}
          >
            {" "}youremail@example.com
          </a>
        </p>
        <p>
          📸 Instagram:
          <Link
            href="https://instagram.com/YOURIG"
            className={styles.contactLink}
            target="_blank"
          >
            {" "}@YOURIG
          </Link>
        </p>
      </div>

      <p className={styles.responseTime}>
        Response Time: Usually within 1–3 hours during business hours.
      </p>
    </main>
  );
}
