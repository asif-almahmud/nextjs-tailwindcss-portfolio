import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "../components/Container";
import { SelfIntroducing } from "../components/Home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Asif Al-Mahmud</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SelfIntroducing />
    </div>
  );
};

export default Home;
