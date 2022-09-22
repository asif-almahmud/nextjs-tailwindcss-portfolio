import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";
import { paths } from "../utils/paths";

type Props = {};

export const NavButton = (props: Props) => {
  const [noNextPath, setNoNextPath] = useState<boolean>(false);
  const router = useRouter();
  const { asPath } = router;
  let nextPath = "";
  console.log({ NavButton: asPath });

  const handleProgrammaticNavigation = () => {
    for (let i = 0; i < paths.length; i++) {
      if (i === paths.length - 1) {
        nextPath = `/#${paths[0].path}`;
        break;
      }

      if (asPath === `/#${paths[i].path}`) {
        nextPath = `/#${paths[i + 1].path}`;
        break;
      }
    }

    router.push(nextPath);
  };

  useEffect(() => {
    if (asPath === `/#${paths[paths.length - 1].path}`) {
      setNoNextPath(true);
    } else {
      setNoNextPath(false);
    }
  }, [asPath]);

  return (
    <div className="z-[999] hidden xs:inline-flex flex-col items-center gap-2 fixed bottom-12 right-12 italic text-primary-light">
      {noNextPath ? <span>Top</span> : <span>Next</span>}
      <button
        className=" p-px outline outline-2 sm:outline-4 outline-primary-light/20 rounded-full text-gray-900/60 hover:text-gray-800 hover:outline-2 hover:outline-gray-300/20 hover:scale-110 hover:drop-shadow-lg hover:bg-flat active:bg-flat/50 active:scale-105 duration-500 ease-in-out"
        onClick={handleProgrammaticNavigation}
      >
        {noNextPath ? (
          <KeyboardArrowUpIcon sx={{ fontSize: 40 }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
        )}
      </button>
    </div>
  );
};
