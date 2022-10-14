/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-primary py-7'>
       <div className='max-w-container mx-auto'>
           <div className="flex">
            <div className='w-1/5'>
                <picture>
                  <img src="images/logo.png" alt="" />
                </picture>
            </div>
            <div className='w-4/5 flex justify-end items-center'>
                <ul className='font-pops font-semibold text-base text-white flex gap-x-12'>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">Blogs</a></li>
                </ul>
                <a href="#" className='inline-block font-pops font-semibold text-base text-white border-2 border-solid border-white py-3 px-8 ml-20'>CONTACT</a>
            </div>
           </div>
       </div>
    </div>
  )
}

export default Navbar;