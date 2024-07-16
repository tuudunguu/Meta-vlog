import { Container } from "../components/Container";
import { FaSearch } from "react-icons/fa";

export const Navbar = () => {
  return (
    <Container background="bg-white">
      <div className="w-full h-[72px] px-[20px] py-[23px]  flex flex-row justify-between items-center gap-x-32">
        <div className="w-[135px] h-[26px] ">
          <img src="/Pictures/Logo.png" className="h-full w-full"></img>
        </div>
        <div className="w-[32px] h-[32px] lg:hidden ">
          <img src="/Pictures/Menu-outline.png" className="w-full h-full"></img>
        </div>
        <div className="hidden   lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-x-10 ">
          <h3 className="text-base text-[#3B3C4A] font-semibold">Home</h3>
          <h3 className="text-base text-[#3B3C4A] font-semibold">Blog</h3>
          <h3 className="text-base text-[#3B3C4A] font-semibold">Contact</h3>
        </div>
        <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:bg-[#F4F4F5] px-4 py-2 gap-x-8">
          <input
            type="search"
            id="mySearch"
            name="q"
            placeholder="Search"
            className=" w-24 outline-none bg-[#F4F4F5]"
          />
          <FaSearch className="text-[#52525B] " />
        </div>
      </div>
    </Container>
  );
};
