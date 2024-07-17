export const TrendingCard = ({ picture, tags, header }) => {
  return (
    <div className=" relative w-[289px] h-[320px] rounded-xl border-2 border-gray-400  flex flex-col justify-between items-center gap-y-4">
      <img src={picture} className="w-full h-full rounded-xl" />
      <div className="w-[230px] h-[120px] absolute bottom-[10%] left-[8%] flex flex-col justify-between items-start">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <BlogTag key={tag} tag={tag} />
          ))}
        </div>
        <p className="text-lg text-white font-semibold">{header}</p>
      </div>
    </div>
  );
};

const BlogTag = ({ tag }) => {
  return (
    <div className="bg-[#4B6BFB] py-1 px-[10px] rounded-md">
      <p className="text-white font-medium text-md capitalize">{tag}</p>
    </div>
  );
};
