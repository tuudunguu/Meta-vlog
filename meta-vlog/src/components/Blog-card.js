// import { RoundBg } from "../components/Round-bg";

export const BlogCard = ({ picture, tags, header, date }) => {
  return (
    <div className="w-[358px] h-[476px] rounded-xl border-2 border-gray-400 p-4 flex flex-col justify-between items-center gap-y-4">
      <div className="w-full rounded-md">
        <img src={picture} className="w-full h-full rounded-md" />
      </div>
      <div className="w-full h-full p-2 flex flex-col items-start justify-between">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <BlogTag key={tag} tag={tag} />
          ))}
        </div>
        <h1 className="text-[24px] font-semibold text-[#181A2A]">{header}</h1>
        <h3 className="text-base font-normal text-[#97989F]">{date}</h3>
      </div>
    </div>
  );
};
const BlogTag = ({ tag }) => {
  return (
    <div className="bg-[#4b6bfb0d] py-1 px-[10px] rounded-md">
      <p className="text-[#4B6BFB] font-medium text-md capitalize">{tag}</p>
    </div>
  );
};
