import { MdExitToApp } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import Link from "next/link";

export const Drawer = ({ isOpen, closeDrawer }) => {
  return (
    <div
      className={`fixed top-0 left-[100%] ${
        isOpen ? "translate-x-[-300px]" : "translate-x-[0px]"
      } h-screen w-[300px] p-6 shadow-md bg-[#fff]  duration-300 z-50 flex flex-col justify-start items-center gap-y-12`}
    >
      <div className=" h-fit w-full flex flex-row justify-end items center">
        <button onClick={closeDrawer}>
          <MdExitToApp size={24} color="black" />
        </button>
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-y-10 ">
        <Link href="/" onClick={closeDrawer}>
          <h3 className="text-base text-[#3B3C4A] font-semibold">Home</h3>
        </Link>
        <Link href="/All-blogs" onClick={closeDrawer}>
          {" "}
          <h3 className="text-base text-[#3B3C4A] font-semibold">Blog</h3>
        </Link>
        <Link href="#adda" onClick={closeDrawer}>
          <h3 className="text-base text-[#3B3C4A] font-semibold">Contact</h3>
        </Link>
      </div>
      <div className=" flex flex-row justify-between items-center bg-[#F4F4F5] px-4 py-2 gap-x-8">
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
  );
};
