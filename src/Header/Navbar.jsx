import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
        <nav className='flex justify-between w-full '>
          <Link to='/'>
          <span className='font-freehand text-4xl w-1/6'>CJ</span>
          </Link>
            <ul className='flex w-[90%]  justify-around items-center px-2'>
               <Link to='/'>
               <li>HOME</li>
               </Link>
                <a href="https://docs.google.com/document/d/e/2PACX-1vTiNPvUWTpeaQenNPeHraaGVRnOLSHogaCdYdk-derpoNUQ6yB7TGsvK3XtWGbgYnay3bZiRsvYyRje/pub">
                <li>RESUME</li>
                </a> 
                <li>PROJECTS</li>
                <Link to='/about'>
                <li>ABOUT</li>
                </Link>
            </ul>
        </nav>
  )
}

export default Navbar