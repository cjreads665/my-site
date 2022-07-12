import React from "react";
import Featured from "./Featured";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl p-2 leading-snug my-8">
        building quality products that drive{" "}
        <span className="text-[#08ff17]">results</span>
      </h1>
      <section className="leading-relaxed text-xl p-1 flex flex-col md:flex-row md:justify-between w-full">
      <img src="https://media.giphy.com/media/jOmQmJkjcvB3Bc8CRb/giphy.gif" alt="" className="mt-4 text-center md:w-[15rem]" />
      <p className="md:ml-8">
        <br />
        Hello!👋 
        <br/> I'm Shahid(aka CJ), a Web/UI developer. <br /> I
        specialize in Front End technologies such as React that provide great
        user experience.

      Currently exploring the web3 space.</p>
      </section>
      
      <Featured></Featured>
    </div>
  );
};

export default Home;
