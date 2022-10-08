/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Company = () => {
  return (
    <section className="bg-[#C4C4C4] py-28">
        <div className='max-w-container mx-auto'>
            <div className='flex'>
                <div className='w-2/5 bg-primary'>
                <h2 className='font-pops font-bold text-white text-4xl leading-[54px] pt-24 py-24 pl-16 w-[280px]'>Learn more about our company</h2>
                </div>
                <div className='w-3/5 flex justify-center items-center' style={{
                    background: 'url(images/company.png)'
                    }}>
                    <a href="#" className='inline-block font-pops font-semibold text-normal text-primary border-2 border-solid border-white bg-white py-3 px-8 hover:bg-transparent hover:border-white ease-linear duration-300'>Learn More</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Company;
