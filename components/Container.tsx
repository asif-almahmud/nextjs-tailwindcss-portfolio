import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface IContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  return (
    <div className="min-height-fill p-8 pb-12 sm:px-20 sm:py-12 max-w-screen-2xl">
      <div className="w-full sm:w-2/3 flex items-center mx-auto">
        {children}
      </div>
      {/* <div className="text-blue-400 absolute bottom-0">
        <KeyboardArrowDownIcon />
      </div> */}
    </div>
  );
};
