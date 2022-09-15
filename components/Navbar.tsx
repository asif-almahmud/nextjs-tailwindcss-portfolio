import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {};

const navLinks = [
  { id: "1", link: "home" },
  { id: "2", link: "portfolio" },
  { id: "3", link: "about" },
  { id: "4", link: "contact" },
];

export const Navbar = (props: Props) => {
  const router = useRouter();
  const { asPath } = router;
  console.log({ router });
  return (
    <div className="w-full sticky top-0 text-black duration-300 ease-in">
      <div className="border-b w-full h-full max-w-screen-2xl mx-auto p-4 flex justify-between items-center ">
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
          <i className="sm:hidden">
            <MenuIcon />
          </i>
        </div>
      </div>
    </div>
  );
};
