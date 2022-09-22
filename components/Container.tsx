interface IContainerProps {
  children: React.ReactNode;
  id: string;
}

export const Container = ({ children, id }: IContainerProps) => {
  return (
    <div className="min-height-fill bg-gray-100/60 flex items-center p-8 pb-12 sm:px-20 sm:py-12 max-w-screen-2xl relative">
      <div id={id} className="absolute -top-[4rem] sm:-top-[5rem]"></div>
      <div className="w-full sm:w-2/3 flex items-center mx-auto">
        {children}
      </div>
    </div>
  );
};
