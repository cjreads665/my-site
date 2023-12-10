import React from "react";
import Featured from "./Featured";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl p-2 leading-snug my-8">
        building quality products that drive{" "}
        <span className="text-[#08ff17]">results</span>
      </h1>
      <div className="leading-relaxed text-xl p-1 flex flex-col md:flex-row md:justify-between w-full lg:justify-around h-full">
      <img src="https://media.giphy.com/media/jOmQmJkjcvB3Bc8CRb/giphy.gif" alt="" className="mt-4 text-center md:w-[35rem] " />
      <div className="flex flex-col h-full justify-between">
        <p>
        <br />
        Hello!👋 
        <br/> I'm Shahid(aka CJ), an Automation Engineer. <br /> I
        specialize in Front-End and Back-end testing automation technologies as well as DevOps Processes.
        <br />
      Currently exploring the DevOps/ML/AI space.
        </p>
      {/* <Skills/> */}
      </div>
      </div>
      <Featured></Featured>
    </div>
  );
};

export default Home;
