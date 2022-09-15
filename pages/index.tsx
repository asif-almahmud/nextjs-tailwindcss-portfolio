import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { Container } from "../components/Container";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Asif Al-Mahmud</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>My Portfolio</Container>
    </div>
  );
};

export default Home;
