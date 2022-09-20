import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type Props = {};

export const Next = (props: Props) => {
  return (
    <div className="hidden xs:inline-flex fixed bottom-12 right-12 italic cursor-pointer p-px outline outline-2 outline-gray-400/20 rounded-full text-gray-900/50 hover:text-gray-800 hover:outline-gray-300 duration-500 ease-in-out">
      <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
    </div>
  );
};
