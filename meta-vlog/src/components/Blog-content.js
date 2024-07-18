import { Container } from "../components/Container";
import { CgProfile } from "react-icons/cg";

export const BlogContent = ({
  para,
  bigHeader,
  date,
  editer,
  photo,
  title,
}) => {
  return (
    <Container background="bg-white">
      <div className="w-full h-fit px-4 lg:px-28">
        <div className="w-full h-fit flex flex-col justify-center items-center gap-y-8">
          <div className="w-full h-fit flex flex-col   items-start gap-y-5">
            <h3 className="text-4xl text-[#181A2A] font-semibold">
              {bigHeader}
            </h3>
            <div className="w-full h-fit flex  flex-row justify-start items-center gap-x-6">
              <div className="w-fit h-fit  flex flex-row justify-start items-center gap-x-2">
                <CgProfile className="text-3xl text-black" />
                <h2 className="text-base font-medium text-[#696A75]">
                  {editer}
                </h2>
              </div>
              <h4 className="text-[#696A75] text-base font-normal">{date}</h4>
            </div>
          </div>
          <div className="w-full h-fit">
            <img src={photo} className="w-full h-[462px] object-cover"></img>
          </div>

          <div
            className=" text-[#3B3C4A] font-normal flex flex-col gap-4 [&>p]:text-md [&>p>a]:w-full  [&>h3]:text-xl [&>img]:w-full [&>img]:h-full [&>img]:object-cover[&>h2]:text-3xl [&>h2]:text-[ #000] [&>h2]:font-semibold [&>h3]:text-2xl [&>h3]:text-[ #000] [&>h3]:font-semibold [&>h4]:text-lg [&>h4]:text-[ #000] [&>h4]:font-semibold"
            dangerouslySetInnerHTML={{ __html: para }}
          />
        </div>
      </div>
    </Container>
  );
};
