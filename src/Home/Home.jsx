import React from 'react'
import Featured from './Featured'
const Home = () => {
  return (
    <div>
        <h1 className='text-5xl p-2 leading-snug my-8'>
        building quality products that drive <span className='text-[#08ff17]'>results</span> 
        </h1>
        <p className='leading-relaxed text-xl p-1'>Hello! I'm Shahid. You can call me CJ. I'm a Web/UI developer. I specialize in Front End  technologies such as React that provide great user experience.</p>
      <Featured></Featured>
    </div>
  )
}

export default Home