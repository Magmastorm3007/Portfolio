import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Scroll from "../components/Scroll";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Live portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="lamp">
  <div id="top"></div>
  <div id="glass">
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  </div>
  <div id="bottom"></div>
</div>
      <Scroll />
     
    </div>
  );
};

export default Home;
