"use client";

import { useParams } from "next/navigation";
import { Navbar } from "../../../components/1-section-navbar";
import { Footer } from "../../../components/footer";
import { BlogContent } from "../../../components/Blog-content";

import React, { useState, useEffect } from "react";

const SinglePage = () => {
  const { id } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles/${id}`);

        const data = await res.json();

        setPage(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  if (!page) return <div>Loading...</div>;
  console.log(page);
  return (
    <div className="flex flex-col gap-y-16 bg-white">
      <Navbar />
      <BlogContent
        bigHeader={page.title}
        date={page.published_timestamp}
        editer={page.user?.name}
        photo={page.social_image}
        para={page.body_html}
        title={page.title}
      />

      <Footer />
    </div>
  );
};

export default SinglePage;
