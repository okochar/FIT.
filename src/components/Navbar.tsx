"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>FIT.</Link>

        {/* Links */}
        <div className={styles.links}>
          <a href="#">Home</a>
          <a href="#">Collection</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <button>Order Now</button>
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >


            <a href="#" onClick={toggleMenu}>Home</a>
            <a href="#" onClick={toggleMenu}>Collection</a>
            <a href="#" onClick={toggleMenu}>About</a>
            <a href="#" onClick={toggleMenu}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
