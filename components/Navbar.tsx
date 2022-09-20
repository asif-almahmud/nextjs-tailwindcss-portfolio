import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Modal } from "./Modal";
import CloseIcon from "@mui/icons-material/Close";

type Props = {};

const navLinks = [
  { id: "1", link: "home" },
  { id: "2", link: "portfolio" },
  { id: "3", link: "about" },
  { id: "4", link: "contact" },
];

export const Navbar = (props: Props) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { asPath } = router;
  console.log({ router });
  return (
    <div className="h-[4rem] sm:h-[5rem] z-[999] border-b w-full sticky top-0 duration-300 ease-in">
      <div className=" w-full h-full max-w-screen-2xl mx-auto p-4 flex justify-between items-center ">
        <Link href="/">
          <a className="text-3xl lg:text-4xl font-bold uppercase  tracking-wider animated-underline">
            Asif
          </a>
        </Link>
        <div>
          <ul className="hidden sm:flex sm:items-center gap-4">
            {navLinks.map((item) => (
              <li key={`${item.id}`}>
                <Link href={`/#${item.link}`}>
                  <a
                    className={`text-sm uppercase tracking-wider animated-underline after:h-[3px] ${
                      asPath === `/#${item.link}` ? "font-semibold" : ""
                    }`}
                  >
                    {item.link}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <i onClick={() => setShow(true)} className="sm:hidden">
            <MenuIcon />
          </i>
          <Modal show={show}>
            <ul className="relative w-full h-full flex flex-col justify-center items-center gap-4 text-white">
              {navLinks.map((item) => (
                <li key={`${item.id}`}>
                  <Link href={`/#${item.link}`}>
                    <a
                      onClick={() => setShow(false)}
                      className={`text-md uppercase tracking-wider animated-underline after:h-[3px] after:bg-white ${
                        asPath === `/#${item.link}` ? "font-semibold" : ""
                      }`}
                    >
                      {item.link}
                    </a>
                  </Link>
                </li>
              ))}
              <li
                onClick={() => setShow(false)}
                className="absolute top-5 right-4 cursor-pointer"
              >
                <CloseIcon />
              </li>
            </ul>
          </Modal>
        </div>
      </div>
    </div>
  );
};
