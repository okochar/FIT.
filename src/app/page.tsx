"use client";
import { useState } from "react";
import AboutSection from "@/components/AboutSection";
import CollectionSection from "@/components/CollectionSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <HeroSection />
      <CollectionSection openModal={() => setModalOpen(true)} />
      <AboutSection openModal={() => setModalOpen(true)} />
  
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
