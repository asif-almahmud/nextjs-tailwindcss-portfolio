import Image from "next/image";
import React from "react";
import { Container } from "./Container";

type Props = {};

export const Introductory = (props: Props) => {
  return (
    <Container id="home">
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
            <h1 className=" font-bold text-2xl">Hi, I&apos;m Asif Al-Mahmud</h1>
            <p className="text-blue-700 text-lg text-secondary font-medium">
              Frontend Engineer based in Dhaka, Bangladesh.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start text-lg">
          <div className="text-lg font-medium">
            I love to work with frontend technologies like React, Nextjs,
            Redux-Toolkit, MUI, TailwindCSS and Sass. I also love to code in
            TypeScript rather than plain JavaScript.
          </div>
        </div>
        <div className="text-base text-secondary underline cursor-pointer hover:text-secondary-dark duration-200">
          Download My Resume
        </div>
      </div>
    </Container>
  );
};
