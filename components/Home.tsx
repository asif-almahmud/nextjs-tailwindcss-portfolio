import Image from "next/image";
import React from "react";
import { Container } from "./Container";

type Props = {};

export const SelfIntroducing = (props: Props) => {
  return (
    <Container>
      <div className="flex flex-col gap-4 mb-24">
        <div className="flex flex-col gap-4 items-start ">
          <div className="w-full xs:w-max rounded-md outline outline-4 outline-gray-100">
            <Image
              src={"/images/"}
              width="150"
              height="150"
              alt="asif"
              objectFit="cover"
              className="rounded-md "
            />
          </div>
          <div>
            <h1 className=" font-bold text-2xl">Asif Al-Mahmud</h1>
            <p className="text-blue-700 text-lg text-secondary font-medium">
              Frontend Engineer based in Dhaka, Bangladesh.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start text-lg">
          <div className="text-lg font-medium">
            I love to work with frontend technologies like React, Nextjs, Redux,
            MUI, TailwindCSS. I also love to code in TypeScript rather than
            plain JavaScript.
          </div>

          <div className="text-base text-secondary">
            Currently my fascination for working with backend technologies like
            Node, Express, MongoDB, Firebase is also increasing. I also enjoy to
            pass hours in solving DSA problems on topics like Array, String,
            Recursion, Backtracking, Binary Search Tree, Binary Search etc.
          </div>
        </div>
      </div>
    </Container>
  );
};
