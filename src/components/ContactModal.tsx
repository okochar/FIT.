"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { toast } from "sonner";
import styles from "./ContactModal.module.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
    preference: "Exact",
  });
  const [loading, setLoading] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (formData.preference === "Exact") {
      setCanSubmit(true);
    } else if (
      (formData.preference === "Similar" || formData.preference === "Custom") &&
      formData.message.trim().length >= 10
    ) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [formData.preference, formData.message]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);

    try {
      console.log(formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent!");
      setFormData({
        name: "",
        email: "",
        message: "",
        date: "",
        preference: "Exact",
      });
      onClose();
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={onClose}>
              ✕
            </button>
            <h2 className={styles.preorder}>Preorder / Contact Us</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.div}>
                <label className={styles.label} htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.div}>
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.div}>
                <label className={styles.label} htmlFor="date">
                  Preferred Delivery Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.div}>
                <label className={styles.label} htmlFor="preference">
                  Customization Preference
                </label>
                <select
                  id="preference"
                  name="preference"
                  value={formData.preference}
                  onChange={handleChange}
                >
                  <option value="Exact">Exact Piece</option>
                  <option value="Similar">Something Similar</option>
                  <option value="Custom">Custom Order</option>
                </select>
              </div>

              <div className={styles.div}>
                <label className={styles.label} htmlFor="message">
                  Your Message / Custom Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message / Custom Details"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" disabled={!canSubmit || loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
