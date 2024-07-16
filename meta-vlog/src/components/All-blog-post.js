import { Container } from "../components/Container";
import { BlogCard } from "../components/Blog-card";

export const AllBlogPost = ({ articles }) => {
  return (
    <Container background="bg-white">
      <div className="w-full h-fit px-4">
        <div className="w-full h-fit flex flex-col items-center gap-y-8">
          <div className="w-full h-fit flex flex-col justify-between items-start gap-y-8">
            <h1 className="text-2xl font-bold text-[#181A2A]">All Blog Post</h1>
            <div className="w-full h-fit flex flex-row justify-between items-center lg:w-full lg:h-fit lg:flex lg:flex-row lg:justify-between lg:items-center">
              <div className="w-full h-fit flex flex-row justify-between items-center lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-x-5">
                <button className="text-xs font-bold text-[#495057]">
                  All
                </button>
                <button className="text-xs font-bold text-[#495057]">
                  Design
                </button>
                <button className="text-xs font-bold text-[#495057]">
                  Travel
                </button>
                <button className="text-xs font-bold text-[#495057]">
                  Fashion
                </button>
                <button className="text-xs font-bold text-[#495057]">
                  Technology
                </button>
                <button className="text-xs font-bold text-[#495057]">
                  Branding
                </button>
              </div>
              <button className=" lg:text-xs lg:font-bold lg:text-[#495057] lg:visible invisible  lg:whitespace-nowrap ">
                View All
              </button>
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
