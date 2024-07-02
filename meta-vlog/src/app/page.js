"use client";

import { useEffect, useState } from "react";
import { Navbar } from "../components/1-section-navbar";

import { AllBlogPost } from "../components/All-blog-post";

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
    <>
      <Navbar />
      <AllBlogPost articles={articles} />
    </>
  );
}
