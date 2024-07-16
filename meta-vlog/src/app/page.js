"use client";

import { useEffect, useState } from "react";
import { Navbar } from "../components/1-section-navbar";
import { Footer } from "../components/footer";
import { AllBlogPost } from "../components/All-blog-post";
import { Carousel } from "../components/2-section-carousel";
import { TrendingSection } from "../components/3-section-trending";

const getArticle = async () => {
  const res = await fetch("https://dev.to/api/articles?pages=1&per_page=9");

  const articles = await res.json();

  return articles;
};

export default function Home() {
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const data = await getArticle();

    setArticles(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-y-16 bg-white">
      <Navbar />
      <Carousel articles={articles} />
      <TrendingSection articles={articles} />
      <AllBlogPost articles={articles} />
      <Footer />
    </div>
  );
}
