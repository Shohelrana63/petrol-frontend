/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Services = () => {
  return (
    <section className='mt-7'>
          <div className="flex flex-wrap">
            <div className='w-2/4 flex flex-col justify-center items-end'>
                <h3 className='font-pops font-bold text-[64px] mr-36'>Our Services</h3>
                <p className='font-pops text-base w-[405px] mr-36'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className='w-2/4 py-36 px-28' 
            style={{
              background: 'url(images/Services1.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}>
                <h3 className='font-pops font-bold text-4xl text-white'>Modern natural oil and gas refineries.</h3> 
                <a href='#' className='inline-block font-pops font-semibold text-normal text-white border-2 border-solid border-primary bg-primary py-3 px-8 mt-8 hover:bg-transparent hover:border-white ease-linear duration-300'>Learn More</a>
            </div>
            <div className='w-2/4 py-36 px-28' 
            style={{
              background: 'url(images/Services1.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}>
                <h3 className='font-pops font-bold text-4xl text-white'>Modern natural oil and gas refineries.</h3> 
                <a href="#" className='inline-block font-pops font-semibold text-normal text-white border-2 border-solid border-primary bg-primary py-3 px-8 mt-8 hover:bg-transparent hover:border-white ease-linear duration-300'>Learn More</a>
            </div>
            <div className='w-2/4 py-36 px-28' 
            style={{
              background: 'url(images/Services1.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}>
                <h3 className='font-pops font-bold text-4xl text-white'>Modern natural oil and gas refineries.</h3> 
                <a href="#" className='inline-block font-pops font-semibold text-normal text-white border-2 border-solid border-primary bg-primary py-3 px-8 mt-8 hover:bg-transparent hover:border-white ease-linear duration-300'>Learn More</a>
            </div>
          
          </div>
    </section>
  )
}

export default Services;