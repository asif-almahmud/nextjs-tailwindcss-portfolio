import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import { NavButton } from "../components/NavButton";
import { Socialbar } from "../components/Socialbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Socialbar />
      <NavButton />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
