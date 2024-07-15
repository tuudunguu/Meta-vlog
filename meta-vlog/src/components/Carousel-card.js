// components/CarouselCard.js
import React from "react";

export const CarouselCard = ({ photo, tag, header, date }) => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      <img
        src={photo}
        alt="Carousel Image"
        className="w-full h-[600px] object-cover rounded-xl"
      />
      <div className="absolute bottom-2  right-2 h-[341px] w-full bg-white p-6 z-10 rounded-xl ml-2">
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-center items-center px-5 py-1 rounded-xl bg-gray-400">
            <h2 className="text-sm text-[#4B6BFB]">{tag}</h2>
          </div>
          <h1 className="text-2xl  font-semibold text-[#181A2A]">{header}</h1>
          <h3 className="text-sm md:text-base font-normal text-[#97989F]">
            {date}
          </h3>
        </div>
      </div>
    </div>
  );
};
