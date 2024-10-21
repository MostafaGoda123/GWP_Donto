import React from 'react'
import dentist from '../Images/blog2.jpg'
import dentist2 from '../Images/hero-theeth.54c2c4e9.png'

const ServiceSafety = () => {
   return (
      <section className="py-16">
         <section className="container">
            <h1 className="text-3xl md:text-5xl font-semibold text-center mb-5">Safety First</h1>
            <p className="text-lg md:text-xl font-semibold text-center max-w-[600px] ms-auto me-auto mb-10 text-neutral-500">Since 1998, Donto Dentistry has been proud to combine modern techniques and high-tech equipment. Dr. John Dae, Micha and his team deliver a personalized and comfortable dental care experience unlike any other Mason dentist.</p>
            <div className="flex flex-col md:flex-row gap-8">
               <div className="flex-1 flex flex-col items-center gap-5">
                  <img src={dentist} alt="" className='md:h-[300px] lg:h-[500px] w-full bg-blue-100 rounded-xl overflow-hidden' />
                  <p className='text-center text-lg md:text-xl font-semibold text-neutral-500'>The Importance Of Complete Dentistry for your Health</p>
               </div>
               <div className="flex-1 flex flex-col items-center gap-5">
                  <img src={dentist2} alt="" className='md:h-[300px] lg:h-[500px] w-full bg-blue-100 rounded-xl overflow-hidden' />
                  <p className='text-center text-lg md:text-xl font-semibold text-neutral-500'>Safety First with CT Scans!</p>
               </div>
            </div>
         </section>
      </section>
   )
}

export default ServiceSafety
