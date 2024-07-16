import { Container } from "../components/Container";
import { TrendingCard } from "../components/trending-card";

export const TrendingSection = ({ articles }) => {
  return (
    <Container background="bg-white">
      <div className="w-full h-fit px-4">
        <div className="w-full h-fit flex flex-col justify-center items-start gap-y-8">
          <h3 className="text-2xl text-[#181A2A] font-bold ">Trending</h3>
          <div className=" w-full overflow-scroll  rounded-xl">
            <div className="flex flex-row gap-x-5 items-center ">
              {articles.map((item, index) => (
                <div key={index} className=" flex-shrink-0">
                  <TrendingCard
                    picture={item.social_image}
                    tag={item.tag_list}
                    header={item.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
