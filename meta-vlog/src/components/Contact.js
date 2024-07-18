import { Container } from "../components/Container";

export const Contact = ({}) => {
  return (
    <Container background="bg-white">
      <div className="w-full h-fit px-4 lg:px-60 flex flex-col items-center gap-y-6">
        <div className="w-full h-fit flex flex-col justify-center items-center gap-y-8">
          <div className="w-full h-fit flex flex-col justify-start items-start gap-y-5 ">
            <h2 className="text-4xl text-black font-semibold">Contact Us</h2>
            <p className="text-[#696A75] text-base font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="w-full h-fit flex lg:flex-row lg:justify-between lg:items-center flex-col justify-center items-center gap-y-6 lg:gap-x-12">
            <div className="w-full h-[100px] flex flex-col items-start justify-start p-4 rounded-xl border-2 border-[#696A75]">
              <h2 className="text-2xl text-black font-semibold">Address</h2>
              <p className="text-[#696A75] text-base font-semibold">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="w-full h-[100px] flex flex-col items-start justify-start p-4 rounded-xl border-2 border-[#696A75] gap-y-2">
              <h2 className="text-2xl text-black font-semibold">Contact</h2>
              <p className="text-[#696A75] text-base font-semibold">
                313-332-8662 info@email.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col items-start p-4 gap-y-6 lg:pl-8 lg:pt-8 lg:pb-8 lg:pr-32 bg-[#F6F6F7] rounded-xl">
          <h2 className="text-lg text-black font-semibold">Leave a message</h2>
          <div className="w-full h-fit flex flex-col items-start gap-y-3">
            <div className="w-full h-fit flex flex-col items-start gap-y-3 lg:flex lg:flex-row lg:items-center gap-x-6">
              <input
                type="text"
                placeholder="subject"
                className="w-full h-[36px] p-[6px] border-2 bg:#FFF border-1 border-[#DCDDDF] rounded-[5px]"
              />
              <input
                type="text"
                placeholder="Your name"
                className="w-full h-[36px] p-[6px] border-2 bg:#FFF border-1 border-[#DCDDDF] rounded-[5px]"
              />
            </div>
            <input
              type="text"
              placeholder="Your name"
              className="w-full h-[36px] p-[6px] border-2 bg:#FFF border-1 border-[#DCDDDF] rounded-[5px]"
            />
            <input
              type="text"
              placeholder="write a message"
              className="w-full h-[134px] p-[6px] flex flex-row justify-start items-start border-2 bg:#FFF border-1 border-[#DCDDDF] rounded-[5px]"
            />
            <button className="w-full lg:w-[130px] h-10  bg-[#4B6BFB] flex justify-center items-center px-[10px] rounded-md">
              <h2 className="text-[#FFFFFF] font-medium text-sm ">
                Send Message
              </h2>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
