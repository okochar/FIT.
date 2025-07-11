"use client";
import { useEffect, useRef } from "react";
import styles from "./StepsSection.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Place Your Order",
    description: "Select your preferred design and place your order easily.",
  },
  {
    title: "We Craft & Freeze",
    description: "We crochet your piece, seal it in resin, and freeze your memory in time.",
  },
  {
    title: "Delivered to You",
    description: "Receive your wearable memory, beautifully packaged and ready to cherish.",
  },
];

export default function StepsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Animate the line growing down
      timeline.to(`.${styles.line}`, {
        height: "100%",
        duration: 2,
        ease: "power2.inOut",
      });

      // Glow circles and fade in texts sequentially
      steps.forEach((_, i) => {
        timeline.to(`.${styles.circle}-${i}`, {
          boxShadow: "0 0 20px #e3a7a7",
          background: "linear-gradient(135deg, #e3a7a7, #a9d3df)",
          duration: 0.5,
        }, "-=1"); // slight overlap for smoothness

        timeline.to(`.${styles.text}-${i}`, {
          opacity: 1,
          duration: 0.5,
        }, "-=0.3");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.stepsSection} ref={sectionRef}>
      <h2 className={styles.heading}>Get Your FIT in 3 Easy Steps</h2>
      <div className={styles.timelineContainer}>
        <div className={styles.line} />
        {steps.map((step, index) => (
          <div className={styles.step} key={index}>
            <div className={`${styles.circle} ${styles[`circle-${index}`]}`}>
              {index + 1}
            </div>
            <div className={`${styles.text} ${styles[`text-${index}`]}`}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
