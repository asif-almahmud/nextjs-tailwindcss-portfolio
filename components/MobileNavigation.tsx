import React from "react";

interface IMobileNavigationProps {
  children: React.ReactNode;
}

const MobileNavigation = ({ children }: IMobileNavigationProps) => {
  return <div className="w-[100vw] h-[100vh] flex justify-center items-center z-[999]">{children}</div>;
};
