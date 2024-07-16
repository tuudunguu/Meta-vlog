export const TrendingCard = ({ picture, tag, header }) => {
  return (
    <div className=" relative w-[289px] h-[320px] rounded-xl border-2 border-gray-400  flex flex-col justify-between items-center gap-y-4">
      <img src={picture} className="w-full h-full rounded-xl" />
      <div className="w-[230px] h-[120px] absolute bottom-[10%] left-[8%] flex flex-col justify-between items-start">
        <div className="flex justify-center items-center px-3 py-1 rounded-xl bg-[#4B6BFB] w-fit">
          <h2 className="text-sm text-white">{tag}</h2>
        </div>
        <p className="text-lg text-white font-semibold">{header}</p>
      </div>
    </div>
  );
};
