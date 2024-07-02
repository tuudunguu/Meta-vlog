export const Container = ({ background, children }) => {
  return (
    <div className={`${background} w-screen`}>
      <div className=" w-full h-full m-auto">{children}</div>
    </div>
  );
};
