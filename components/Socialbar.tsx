import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

type Props = {};

export const Socialbar = (props: Props) => {
  return (
    <ul className="fixed top-[50%] left-0 -translate-y-[50%] border rounded-md">
      <li>
        <Link href="">
          <a className="w-12 h-12 flex justify-center items-center hover:text-blue-800">
            <LinkedInIcon />
          </a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a className="w-12 h-12 flex justify-center items-center hover:text-blue-800">
            <GitHubIcon />
          </a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a className="w-12 h-12 flex justify-center items-center hover:text-blue-800">
            <FacebookIcon />
          </a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a className="w-12 h-12 flex justify-center items-center hover:text-blue-800">
            <TwitterIcon />
          </a>
        </Link>
      </li>
    </ul>
  );
};

// hover:text-[#6e5494]
