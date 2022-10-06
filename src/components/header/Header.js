import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaPhoneAlt, FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {BsTwitter, BsInstagram} from 'react-icons/bs';

const Header = () => {
  return (
    <div className='bg-headerbg py-3.5 border-b-2 border-yellowborder'>
        <div className='max-w-container mx-auto'>
        <div className='flex'>
            <div className='w-2/4 flex'>
                <p className='font-pops font-normal text-white relative pl-6
                after:absolute after:top-0 after:right-[-28px] after:w-px after:h-full after:content-[" "]
                after:bg-yellowborder'>
                <AiOutlineMail className='absolute left-0 top-1 text-lg'/>
                mail@yourcompany.com
                </p>
                <p className='font-pops font-normal text-white relative pl-6 ml-14'>
                <FaPhoneAlt className='absolute left-0 top-1 text-lg'/>
                mail@yourcompany.com
                </p>
            </div>
            <div className='w-2/4 flex justify-end'>
              <FaFacebookF className='text-white text-lg ml-5'/>
              <BsTwitter className='text-white text-lg ml-5'/>
              <FaLinkedinIn className='text-white text-lg ml-5'/>
              <BsInstagram className='text-white text-lg ml-5'/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header;