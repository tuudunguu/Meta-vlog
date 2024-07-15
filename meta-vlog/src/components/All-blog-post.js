import { Container } from "../components/Container";
import { BlogCard } from "../components/Blog-card";

export const AllBlogPost = ({ articles }) => {
  return (
    <Container background="bg-white">
      <div className="w-full h-fit px-4">
        <div className="w-full h-fit flex flex-col items-center gap-y-8">
          <div className="w-full h-fit flex flex-col justify-between items-start gap-y-8">
            <h1 className="text-2xl font-bold text-[#181A2A]">All Blog Post</h1>
            <div className="w-full h-fit flex flex-row justify-between items-center">
              <h3 className="text-xs font-bold text-[#495057]">All</h3>
              <h3 className="text-xs font-bold text-[#495057]">Design</h3>
              <h3 className="text-xs font-bold text-[#495057]">Travel</h3>
              <h3 className="text-xs font-bold text-[#495057]">Fashion</h3>
              <h3 className="text-xs font-bold text-[#495057]">Technology</h3>
              <h3 className="text-xs font-bold text-[#495057]">Branding</h3>
            </div>
          </div>
          <div className="w-full h-fit flex flex-wrap justify-between items-center gap-y-8 m-auto">
            {articles.map((item, index) => {
              return (
                <>
                  <BlogCard
                    picture={item.social_image}
                    tag={item.tag_list}
                    header={item.title}
                    date={item.published_at}
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className="h-[176px] flex justify-center items-center">
          <div className="w-fit flex justify-center items-center px-5 py-5 border-2 border-gray-400 rounded-md">
            <h3 className="text-base font-medium text-[#696A75]">Load More</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};
