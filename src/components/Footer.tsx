"use client";
import Link from "next/link";
import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Footer.module.css";
import { toast } from "sonner";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Newsletter */}
        <div className={styles.newsletterBlock}>
          <h3>Be The First to Know</h3>
          <p>Get exclusive updates on our handmade resin & crochet keepsakes.</p>

          <form
            className={styles.newsletter}
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Thank you for subscribing!");
            }}
          >
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">→</button>
          </form>
        </div>

        {/* Links */}
        <div className={styles.linksBlock}>
          <div>
            <h4>About</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#collection">Collection</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><Link href="#order">Order Now</Link></li>
              <li><Link href="#faq">FAQs</Link></li>
              <li><Link href="#policies">Policies</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className={styles.contactBlock}>
          <h4>Contact Us</h4>
          <p>
            <a href="mailto:frozenintime@gmail.com">
              <FaEnvelope /> frozenintime@gmail.com
            </a>
          </p>
          <p>
            <a href="https://instagram.com/frozenintime.fit" target="_blank" rel="noopener">
              <FaInstagram /> @frozenintime.fit
            </a>
          </p>
          <p>
            <a href="https://www.google.com/maps/place/Lagos" target="_blank" rel="noopener">
              <FaMapMarkerAlt /> Lagos, Nigeria
            </a>
          </p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Frozen In Time. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <Link href="#terms">Terms of Service</Link>
          <Link href="#privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
