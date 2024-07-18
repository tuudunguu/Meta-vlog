"use client";

import { Container } from "../components/Container";
import { BlogCard } from "../components/Blog-card";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const categories = [
  "All",
  "React",
  "JavaScript",
  "Python",
  "Web Development",
  "Node.js",
];

export const AllBlogPost = ({ articles }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const [category, setCategory] = useState("All");
  const [perPage, setPerPage] = useState(9);

  const handleCategory = (category) => {
    setCategory(category);
    setPerPage(9);
  };

  const handleLoadMore = () => {
    setPerPage(perPage + 3);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://dev.to/api/articles?page=1&per_page=${perPage}${
            category !== "All" ? `&tag=${category}` : ""
          }`
        );

        const data = await res.json();

        setBlogs(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [category, perPage]);

  return (
    <Container background="bg-white">
      <div className="w-full h-fit px-4">
        <div className="w-full h-fit flex flex-col items-center gap-y-8">
          <div className="w-full h-fit flex flex-col justify-between items-start gap-y-8">
            <h1 className="text-2xl font-bold text-[#181A2A]">All Blog Post</h1>

            <div className="w-full h-fit flex flex-row justify-between items-center lg:w-full lg:h-fit lg:flex lg:flex-row lg:justify-between lg:items-center">
              <div className="w-full h-fit flex flex-wrap gap-4  items-center lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-x-5">
                {categories.map((item) => (
                  <button
                    key={item}
                    className="px-2 py-1 bg-gray-200 text-black rounded-md"
                    style={{
                      color: category === item ? "#4B6BFB" : "",
                    }}
                    onClick={() => handleCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <Link href="/All-blogs">
                <button className=" lg:text-xs lg:font-bold lg:text-[#495057] lg:visible invisible  lg:whitespace-nowrap ">
                  View All
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full h-fit flex flex-wrap justify-between items-center gap-y-8 m-auto">
            {blogs.map((item) => (
              <Link key={item.id} href={`/All-blogs/${item.id}`}>
                <>
                  <BlogCard
                    picture={item.social_image}
                    tags={item.tag_list}
                    header={item.title}
                    date={item.published_at}
                  />
                </>
              </Link>
            ))}
          </div>
        </div>
        <div className="h-[176px] flex justify-center items-center">
          <div className="w-fit flex justify-center items-center px-5 py-5 border-2 border-gray-400 rounded-md">
            <button
              className="m-auto w-[200px] py-2 bg-[#4B6BFB] text-white rounded-md"
              onClick={handleLoadMore}
            >
              {loading ? <p>Loading...</p> : <p>Load More</p>}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
