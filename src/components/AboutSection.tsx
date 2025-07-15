"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  openModal: () => void;
}

export default function AboutSection({ openModal }: AboutSectionProps) {
  return (
    <section id="about" className={styles.about}>
      {/* Top title and tagline */}
      <div className={styles.topHeader}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Handmade keepsakes that turn memories into meaning.
        </motion.p>
      </div>

      {/* Image */}
      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Image
          src="/about-image.jpg"
          alt="Frozen In Time handmade resin and crochet art"
          width={500}
          height={500}
          className={styles.image}
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2>Frozen in Time: Our Story</h2>
        <p>
          Frozen in Time was born from a simple, crazy idea:
          <em> what if your memories could become something you can hold, wear, and keep close forever?</em>
          We blend <strong>tiny crochet art</strong> with <strong>resin sealing</strong> to capture your moments beautifully,
          creating charms, earrings, and keychains that feel like memories, not just accessories.
        </p>

        <p className={styles.tagline}>
          Because your moments deserve to stay with you.
        </p>

        <h3 className={styles.subheading}>Why Frozen In Time?</h3>
        <ul className={styles.bulletList}>
          <li>✨ Each piece is handmade to capture memories you can wear.</li>
          <li>✨ Unique designs like anime stitches, hearts, initials, and clouds.</li>
          <li>✨ Custom orders reflect your personal story and moments.</li>
          <li>✨ Made-to-order for zero waste and intentional, small-batch quality.</li>
        </ul>

        <motion.button
          className={styles.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openModal}
        >
          Order Now
        </motion.button>
      </motion.div>
    </section>
  );
}
