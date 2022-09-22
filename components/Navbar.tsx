import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Modal } from "./Modal";
import CloseIcon from "@mui/icons-material/Close";
import { paths } from "../utils/paths";

type Props = {};

export const Navbar = (props: Props) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { asPath } = router;
  console.log({ router });
  return (
    <div className="bg-flat h-[4rem] sm:h-[5rem] z-[999] border-b border-gray-200/60 w-full sticky top-0 duration-300 ease-in">
      <div className=" w-full h-full max-w-screen-2xl mx-auto p-4 flex justify-between items-center ">
        <Link href="/">
          <a className="text-3xl lg:text-4xl font-bold uppercase  tracking-wider animated-underline">
            Asif
          </a>
        </Link>
        <div>
          <ul className="hidden sm:flex sm:items-center gap-4">
            {paths.map((item) => (
              <li key={`${item.path}`}>
                <Link href={`/#${item.path}`}>
                  <a
                    className={`text-sm uppercase tracking-wider animated-underline after:h-[3px] ${
                      asPath === `/#${item.path}` ? "font-semibold" : ""
                    }`}
                  >
                    {item.path}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <i onClick={() => setShow(true)} className="sm:hidden">
            <MenuIcon />
          </i>
          {/* navigation for small device */}
          <Modal show={show}>
            <ul className="relative w-full h-full flex flex-col justify-center items-center gap-4 text-white">
              {paths.map((item) => (
                <li key={`${item.path}`}>
                  <Link href={`/#${item.path}`}>
                    <a
                      onClick={() => setShow(false)}
                      className={`text-md uppercase tracking-wider animated-underline after:h-[3px] after:bg-white ${
                        asPath === `/#${item.path}` ? "font-semibold" : ""
                      }`}
                    >
                      {item.path}
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
