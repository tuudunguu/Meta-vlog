"use client";

import { Navbar } from "../../components/1-section-navbar";
import { Footer } from "../../components/footer";
import { Contact } from "../../components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-16 bg-white">
      <Navbar />
      <Contact />

      <Footer />
    </div>
  );
}
