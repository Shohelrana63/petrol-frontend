import React from 'react';

const Supplier = () => {
  return (
    <section className='mt-[78px]'>
        <div className='max-w-container mx-auto'> 
           <div className='flex justify-between'>
            <div className='max-w-[289px]'>
                <h1 className='font-pops font-bold text-5xl leading-[72px]'>The biggest supplier on the country</h1>
            </div>
            <div className='max-w-[651px] flex items-center'>
                <p className='font-pops font-medium text-secondary'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
            </div>
           </div>
        </div>
        <div className='flex justify-between mt-24'>
           <div>
            <picture>
                <img src="images/supplier1.jpg" loading='lazy' />
            </picture> 
           </div>
           <div>
            <picture>
                <img src="images/supplier2.jpg" loading='lazy' />
            </picture> 
           </div>
           <div>
            <picture>
                <img src="images/supplier3.jpg" loading='lazy' />
            </picture> 
           </div>
           <div>
            <picture>
                <img src="images/supplier4.jpg" loading='lazy' />
            </picture> 
           </div>
        </div>
    </section>
  )
}

export default Supplier;