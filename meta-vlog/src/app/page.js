"use client";

import { useEffect, useState } from "react";
import { Navbar } from "../components/1-section-navbar";
import { Footer } from "../components/footer";
import { AllBlogPost } from "../components/All-blog-post";
import { Carousel } from "../components/2-section-carousel";
import { TrendingSection } from "../components/3-section-trending";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-16 bg-white">
      <Navbar />
      <Carousel />
      <TrendingSection />
      <AllBlogPost />
      <Footer />
    </div>
  );
}
