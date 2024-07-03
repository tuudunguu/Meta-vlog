import { Container } from "../components/Container";
import { CarouselCard } from "../components/Carousel-card";

export const Carousel = () => {
  return (
    <Container background="bg-white">
      <div className="w-full h-fit px-4">
        <div className="w-full h-fit flex flex-col items-center gap-y-8">
          <div className="h-[600px] w-full">
            <CarouselCard></CarouselCard>
          </div>
          <div className="w-fit h-fit flex flex-row gap-x-5">
            <div className="h-10 w-10 ">
              <img src="/Pictures/back.png" className="h-full w-full" />
            </div>
            <div className="h-10 w-10 ">
              <img src="/Pictures/forward.png " className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
