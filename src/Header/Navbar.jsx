import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
        <nav className='flex justify-between w-full '>
            <span className='font-freehand text-4xl w-1/6'>CJ</span>
            <ul className='flex w-[90%]  justify-around items-center px-2'>
               <Link to='/'>
               <li>HOME</li>
               </Link>
                <li>RESUME</li>
                <li>PROJECTS</li>
                <Link to='/about'>
                <li>ABOUT</li>
                </Link>
            </ul>
        </nav>
  )
}

export default Navbar