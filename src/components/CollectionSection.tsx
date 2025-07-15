"use client";
import { motion } from "framer-motion";
import styles from "./CollectionSection.module.css";

const products = [
  {
    id: 1,
    name: "Pastel Cloud Keychain",
    description: "Soft pastel resin cloud for keys or bags.",
    price: "₦5,500",
    image: "https://images.unsplash.com/photo-1617814071627-35283b8b67f7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Heart Resin Earrings",
    description: "Lightweight resin hearts with gold flakes.",
    price: "₦6,000",
    image: "https://images.unsplash.com/photo-1629216763833-1728cf7e07b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Letter Charm Pendant",
    description: "Custom initial in clear resin pendant.",
    price: "₦4,000",
    image: "https://images.unsplash.com/photo-1570657512220-507fd9c5c6b0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Tiny Galaxy Pendant",
    description: "Deep galaxy swirl resin mini pendant.",
    price: "₦6,500",
    image: "https://images.unsplash.com/photo-1620563166153-1a359aed38a8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Couples Puzzle Resin",
    description: "Matching puzzle piece resin charms.",
    price: "₦7,000",
    image: "https://images.unsplash.com/photo-1617191514160-8ccf2d62841e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Mini Star Resin",
    description: "Cute mini resin star with shimmer.",
    price: "₦4,800",
    image: "https://images.unsplash.com/photo-1613625144861-785c1a89f6a5?auto=format&fit=crop&w=800&q=80"
  },
];

interface CollectionSectionProps {
  openModal: () => void;
}

export default function CollectionSection({ openModal }: CollectionSectionProps) {
  return (

    <section id="collection"  className={styles.collection}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Collection
      </motion.h2>
      <motion.p
        className={styles.tagline}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Discover <b>FIT.</b> pieces you’ll love to wear and gift.
      </motion.p>

      <div className={styles.grid}>
        {products.map((product) => (
          <motion.div
            key={product.id}
            className={styles.card}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
            viewport={{ amount: 0.5 }}
          >
            <img src={product.image} alt={product.name} className={styles.image} />
            <div className={styles.cardContent}>
              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.description}>{product.description}</p>
              <p className={styles.price}>{product.price}</p>
              <button
                className={styles.orderButton}
                onClick={openModal}
              >
                Order Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button
  className={styles.seeMore}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.location.href = "/collection"} // or openModal() if desired
>
  See More
</motion.button>

    </section>
  );
}
