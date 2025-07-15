"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import Link from "next/link";
import ContactModal from "./ContactModal"; // Adjust path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>FIT.</Link>

        {/* Links (desktop) */}
        <div className={styles.links}>
          <Link href="/#hero">Home</Link>
          <Link href="/#collection">Collection</Link>
          <Link href="/#about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <button onClick={openModal}>Order Now</button>
        </div>

        {/* Hamburger */}
        <div
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <div />
          <div />
          <div />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Link href="/#hero" onClick={toggleMenu}>Home</Link>
            <Link href="/#collection" onClick={toggleMenu}>Collection</Link>
            <Link href="/#about" onClick={toggleMenu}>About</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
}
