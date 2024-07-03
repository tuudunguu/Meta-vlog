export const CarouselCard = ({ photo, tag, title, date }) => {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-y-3">
      <div className="w-full h-fit relative">
        <div className="w-full h-[600px] bg-cover absolute px-2 ">
          <img src={photo} className="h-full " />
        </div>
        <div className="bg-white p-10 rounded-xl w-full h-fit">
          <div className="w-fit flex justify-center items-center  px-5 py-1 rounded-xl bg-[#4B6BFB]">
            <h2 className="text-sm text-white">{tag}</h2>
          </div>
          <h1 className="text-[24px] font-semibold text-[#181A2A]">{title}</h1>
          <h3 className="text-base font-normal text-[#97989F]">{date}</h3>
        </div>
      </div>
    </div>
  );
};
