import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

type Props = {};

export const Socialbar = (props: Props) => {
  return (
    <ul className="scale-75 sm:scale-100 fixed flex bottom-2 left-[50%] -translate-x-[50%] sm:flex-col sm:top-[50%] sm:left-0 sm:bottom-auto sm:translate-x-0 sm:-translate-y-[50%]  rounded-md z-[999] drop-shadow-md bg-flat">
      <li>
        <Link href="/">
          <a className="social-link">
            <LinkedInIcon />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="social-link">
            <GitHubIcon />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="social-link">
            <FacebookIcon />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="social-link">
            <TwitterIcon />
          </a>
        </Link>
      </li>
    </ul>
  );
};
