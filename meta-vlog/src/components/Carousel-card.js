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
      <div className="absolute bottom-2  left-[1%] right-[1%]  h-[341px] w-[96%] bg-white p-6 z-10 rounded-xl ml-2 lg:w-[598px] lg:h-[252px]">
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-center items-center px-3 py-1 rounded-xl bg-[#4B6BFB] w-fit">
            <h2 className="text-sm text-white">{tag}</h2>
          </div>
          <h1 className="text-4xl  font-semibold text-[#181A2A]">{header}</h1>
          <h3 className="text-sm md:text-base font-normal text-[#97989F]">
            {date}
          </h3>
        </div>
      </div>
    </div>
  );
};
