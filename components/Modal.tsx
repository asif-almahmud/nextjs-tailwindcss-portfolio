import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";

interface IModalProps {
  children: React.ReactNode;
  show: boolean;
  containerStyles?: string;
}

export const Modal = (props: IModalProps) => {
  const { children, show, containerStyles } = props;
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <div
      className={`bg-blue-800 opacity-90 fixed inset-0 z-[1000] duration-400 ease-in ${containerStyles}`}
    >
      {children}
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDom.createPortal(
      modalContent,
      document.getElementById("modal-root") as Element | DocumentFragment
    );
  } else {
    return null;
  }
};
