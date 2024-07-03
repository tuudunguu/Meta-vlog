import { Container } from "../components/Container";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <Container background="bg-[#F6F6F7]">
      <div className="w-full h-fit px-4 pt-16 flex flex-col items-center gap-y-6">
        <div className="w-full h-fit flex flex-col items-start gap-y-5">
          <div className="w-full h-fit flex flex-col items-start gap-y-6">
            <div className="w-full h-fit flex flex-col items-start gap-y-3">
              <h2 className="text-lg text-[#181A2A] font-semibold">About</h2>
              <p className="text-base text-[#696A75] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div>
              <h3 className="text-base font-normal text-[#3B3C4A]">
                Email : info@jstemplate.net
              </h3>
              <h3 className="text-base font-normal text-[#3B3C4A]">
                Phone : 880 123 456 789
              </h3>
            </div>
          </div>
          <div className="flex flex-row items-start gap-x-6">
            <h3 className="text-base font-normal text-[#3B3C4A]">Home</h3>
            <h3 className="text-base font-normal text-[#3B3C4A]">Blog</h3>
            <h3 className="text-base font-normal text-[#3B3C4A]">Contact</h3>
          </div>
          <div className="flex flex-row items-start gap-x-6">
            <FaFacebook className="text-[#6D6E76]" />
            <FaTwitter className="text-[#6D6E76]" />
            <FaInstagram className="text-[#6D6E76]" />
            <FaLinkedin className="text-[#6D6E76]" />
          </div>
        </div>
        <div className="w-full h-fit flex flex-col items-start gap-y-16 py-8 border-2 border-t-gray-600">
          <div className="w-[231px] h-[54px]">
            <img
              src="/Pictures/Copyright Info.png"
              className="w-full h-full "
            />
          </div>
          <div className="flex flex-col items-start gap-y-4">
            <h3 className="text-base font-normal text-[#3B3C4A]">
              Terms of Use
            </h3>
            <h3 className="text-base font-normal text-[#3B3C4A]">
              Privacy Policy
            </h3>
            <h3 className="text-base font-normal text-[#3B3C4A]">
              Cookie Policy
            </h3>
          </div>
        </div>
      </div>
    </Container>
  );
};
