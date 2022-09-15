import React from "react";

interface IContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  return <div className="px-24 py-16">{children}</div>;
};
