import { Container } from "../components/Container";
import { CarouselCard } from "../components/Carousel-card";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [carousel, setCarousel] = useState([]);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, carousel.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
  };
  console.log(nextSlide);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://dev.to/api/articles?page=1&per_page=${perPage}`
        );

        const data = await res.json();

        setCarousel(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [perPage]);

  return (
    <Container background="bg-white">
      <div className="w-full h-fit px-4">
        <div className="w-full h-fit flex flex-col items-center gap-y-8 lg:items-end ">
          <div className="relative w-full overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 rounded-xl"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carousel.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Link key={item.id} href={`/All-blogs/${item.id}`}>
                    <CarouselCard
                      photo={item.social_image}
                      tag={item.tag_list}
                      header={item.title}
                      date={item.published_at}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="w-fit h-fit flex flex-row gap-x-5">
            <div className="h-10 w-10 cursor-pointer" onClick={prevSlide}>
              <img src="/Pictures/back.png" className="h-full w-full" />
            </div>
            <div className="h-10 w-10 cursor-pointer" onClick={nextSlide}>
              <img src="/Pictures/forward.png" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
