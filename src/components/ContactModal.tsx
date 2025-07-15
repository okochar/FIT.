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

// 👉 helper to get min date (today + 3 days)
const getMinDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  return date.toISOString().split("T")[0];
};

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
    const fieldsFilled = !!formData.name && !!formData.email && !!formData.date;
    const needsMessage = formData.preference !== "Exact";
    const validMessage = needsMessage ? formData.message.trim().length >= 10 : true;

    setCanSubmit(fieldsFilled && validMessage);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);

    // ✅ extra server-side guard: enforce 3+ days in future
    const selectedDate = new Date(formData.date);
    const minAllowedDate = new Date();
    minAllowedDate.setDate(minAllowedDate.getDate() + 2);

    if (selectedDate < minAllowedDate) {
      toast.error(" Please select a delivery date at least 3 days in the future.");
      setLoading(false);
      return;
    }

    try {
      console.log(formData);
      await new Promise((res) => setTimeout(res, 1200));
      toast.success(" Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        date: "",
        preference: "Exact",
      });
      onClose();
    }catch {
    toast.error(" Failed to send. Please try again.");
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
            <button className={styles.closeButton} onClick={onClose}>✕</button>
            <h2 className={styles.preorder}>Preorder</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.div}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.div}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.div}>
                <label className={styles.label} htmlFor="date">Delivered Before/On?</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={getMinDate()}
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.div}>
                <label className={styles.label} htmlFor="preference">Customization Preference</label>
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
                  required={formData.preference !== "Exact"}
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
