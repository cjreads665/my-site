import React from "react";
import profilepic from "../images/my-site-pic.png";
const About = () => {
  return (
    <div className="mt-4 flex flex-col min-h-screen lg:h-[60rem] justify-around">
      <h2 className="text-5xl text-center">im the IT guy your manager sends</h2>
      <div className="flex justify-center">
        <img
          src={profilepic}
          alt="cool-profile-pic"
          className="w-[100%] md:w-[60%] lg:w-[40%]"
        />
      </div>
      <p className="border border-white p-8">
        Md Shahid Alam did a minor course in Java when he was 13 and since then
        was fascinated by the world of technology. Despite being unable to
        afford a PC, he learnt the basics using pen and paper till he bought his
        first PC in his sophomore year.
        <br />
        <br />
        He is currently working at BLKBOX.ai LLP as a QA
        Engineer.
        <br />
        You can connect with him instantly on <a href="https://www.linkedin.com/in/cjreads665/" target="_blank" rel="noopener noreferrer" className="text-[#08ff17]">Linkedin</a> <br />
        OR you can reach out to him through the traditional way {"->"} <a href="mailto:shahid.alam57@gmail.com" className="text-[#08ff17]">shahid.alam57@gmail.com</a> 
        <br />
      </p>
    </div>
  );
};

export default About;
