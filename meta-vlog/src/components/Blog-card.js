// import { RoundBg } from "../components/Round-bg";

export const BlogCard = ({ picture, tag, header, date }) => {
  return (
    <div className="w-full h-[476px] rounded-xl border-2 border-gray-400 p-4 flex flex-col justify-between items-center gap-y-4">
      <div className="w-[350px] rounded-md">
        <img src={picture} className="w-full h-full rounded-md" />
      </div>
      <div className="w-full h-full p-2 flex flex-col items-start justify-between">
        <div className="w-fit flex justify-center items-center  px-5 py-1 rounded-xl bg-gray-400">
          <h2 className="text-sm text-[#4B6BFB]">{tag}</h2>
        </div>
        <h1 className="text-[24px] font-semibold text-[#181A2A]">{header}</h1>
        <h3 className="text-base font-normal text-[#97989F]">{date}</h3>
      </div>
    </div>
  );
};
