import { Container } from "../components/Container";
import { FaSearch } from "react-icons/fa";

export const Navbar = () => {
  return (
    <Container background="bg-white">
      <div className="w-full h-[72px] px-[20px] py-[23px] border-2 border-red-700 flex flex-row justify-between items-center gap-x-32">
        <div className="w-[135px] h-[26px]">
          <img src="/Pictures/Logo.png" className="h-full w-full"></img>
        </div>
        <div className="w-[32px] h-[32px]">
          <img src="/Pictures/Menu-outline.png" className="w-full h-full"></img>
        </div>
      </div>
    </Container>
  );
};
