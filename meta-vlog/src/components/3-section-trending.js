import { Container } from "../components/Container";
import { TrendingCard } from "../components/trending-card";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export const TrendingSection = () => {
  const [trending, setTrending] = useState([]);
  const [perPage, setPerPage] = useState(8);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://dev.to/api/articles?page=1&per_page=${perPage}`
        );

        const data = await res.json();

        setTrending(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [perPage]);

  return (
    <Container background="bg-white">
      <div className="w-full h-fit px-4">
        <div className="w-full h-fit flex flex-col justify-center items-start gap-y-8">
          <h3 className="text-2xl text-[#181A2A] font-bold ">Trending</h3>
          <div className=" w-full overflow-x-scroll  rounded-xl">
            <div className="flex flex-row gap-x-5 items-center ">
              {trending.map((item, index) => (
                <Link key={item.id} href={`/All-blogs/${item.id}`}>
                  <div key={index} className=" flex-shrink-0">
                    <TrendingCard
                      picture={item.social_image}
                      tags={item.tag_list.slice(0, 1)}
                      header={item.title}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
