import React from 'react'
import testi1 from '../Images/testi1.png'
import { motion } from 'framer-motion';

const HomeTestimonials = () => {
   return (
      <section className="py-16">
         <section className="container">
            <h1 className="mb-10 font-semibold text-5xl text-center">Testimonials</h1>
            <motion.div className="flex flex-col items-center md:flex-row gap-5"
            animate={{scale:[1.1,1] , opacity:[0,1]}}
            transition={{duration:2}}>
               <div className="flex flex-col items-center gap-3 max-w-[400px] w-full bg-pink-500 bg-opacity-5 rounded-xl p-10">
                  <div className=" w-60 h-60 rounded-full flex justify-center items-end bg-pink-500 overflow-hidden">
                     <img src={testi1} alt="" className='w-40' />
                  </div>
                  <p className="text-xl font-semibold">Aliceano Colby</p>
                  <p className="text-xl font-semibold text-neutral-500">CEO of Prime IT</p>
               </div>
               <div>
                  <h2 className='text-3xl mb-5 font-semibold'>Awesome Work</h2>
                  <p className="text-xl font-semibold text-neutral-500">“They really took my individual case to heart. Their team is very helpful. They all work together in an impressive way to make sure that my needs were met and I walked out pain free.”</p>
               </div>
            </motion.div>
         </section>
      </section>
   )
}

export default HomeTestimonials
