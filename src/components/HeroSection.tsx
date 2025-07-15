"use client";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
    <section className={styles.hero}>
      <motion.div
        className={styles.backgroundGradient}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Frozen In Time
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        A memory you can wear, beautifully captured in resin.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        className={styles.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = "#collection"}
      >
        See Collection
      </motion.button>
    </section>
    </section>
  );
}
