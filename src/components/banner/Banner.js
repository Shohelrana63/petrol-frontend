import React from 'react';

const Banner = () => {
  return (
    <div style={{background: 'url(images/banner.jpg)'}}>
      <div className='w-full h-full bg-darklight py-64'>
      <div className='max-w-container mx-auto'> 
        <h1 className='font-pops font-bold text-[64px] w-[842px] text-white'>We exist since 1975 on the oil and gas industry.</h1>
        <a href="#" className='inline-block font-pops font-semibold text-normal text-white border-2 border-solid border-primary bg-primary py-3 px-8 mt-8 hover:bg-transparent hover:border-white ease-linear duration-300'>LEARN MORE</a>
      </div>
      </div>
    </div>
  )
}

export default Banner;