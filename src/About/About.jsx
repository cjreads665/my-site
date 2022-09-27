import React from 'react'
import profilepic from '../images/my-site-pic.png'
const About = () => {
  return (
    <div className='mt-4 flex flex-col min-h-screen lg:h-[60rem] justify-around'>
        <h2 className='text-5xl text-center'>im the IT guy your manager sends</h2>
        <div className='flex justify-center'>
        <img src={profilepic} alt="cool-profile-pic" className='w-[100%] md:w-[60%] lg:w-[40%]' />
        </div>
        <p className='border border-white p-8'>
          Md Shahid Alam did a minor course in Java when he was 13 and since then was fascinated by the world of technology. Despite being unable to afford a PC, he learnt the basics using pen and paper till he got his first Mac in his sophomore year.
          <br />
          <br />
          He is currently working at BizPilot Financial Pvt Ltd as a Software Engineer.
          <br />
          <br />
          He is currently pursing Bachelors in Computer Applications and is set to graduate in 2022.
        </p>
        <br />
        You can reach out to him through email {'->'} shahid.alam57@gmail.com
    </div>
  )
}

export default About
