import { Container } from "../components/Container";

export const Navbar = () => {
  return (
    <Container background="bg-white">
      <div className="w-full h-[100px] px-[350px] py-8 border-2 border-red-700">
        <div className="w-full h-full border-2 border-green-600 flex flex-row justify-between items-center">
          <div className="flex flex-1"></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Container>
  );
};
