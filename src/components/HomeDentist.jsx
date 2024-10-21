import React from 'react'
import homeDentist1 from '../Images/homeDentist1.png'
import homeDentist2 from '../Images/homeDentist2.png'
import homeDentist3 from '../Images/homeDentist3.png'
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion';

const HomeDentist = () => {

   let dentists = [
      { image:homeDentist1 , name:"Darry Milin" , specialty:"Oral Surgeon" },
      { image:homeDentist2 , name:"Salman Ahmed" , specialty:"Oral Surgeon" },
      { image:homeDentist3 , name:"Santa Binte" , specialty:"Oral Surgeon" },
   ]

   return (
      <section className="py-14">
         <section className="container">
            <h1 className="mb-10 font-semibold text-5xl text-center">Our Dentists</h1>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-neutral-100 rounded-xl p-5">
               {dentists.map((dent,index) => (
                  <div key={18567+index} className="shadow-2xl bg-white rounded-xl p-5 flex flex-col gap-3 items-center">
                     <motion.div className='w-52 h-52 border-2 border-pink-500 bg-pink-500 rounded-full flex items-end justify-center overflow-hidden mb-5' 
                     animate={{y:[-50,0] , opacity:[0.5,1]}} 
                     transition={{duration:2}}>
                        <img src={dent.image} alt="" className='w-40 h-40' />
                     </motion.div>
                     <motion.h2 
                     animate={{x:[50,0] , opacity:[0.5,1]}} 
                     transition={{duration:2}}
                     className='text-xl font-semibold'>{dent.name}</motion.h2>
                     <motion.h3 
                     animate={{x:[50,0] , opacity:[0.5,1]}} 
                     transition={{duration:2}}
                     className='text-xl font-semibold text-neutral-600'>{dent.specialty}</motion.h3>
                     <motion.div className="icons flex justify-center gap-3 border-t-2 border-neutral-200 pt-4 w-full"
                     animate={{x:[-50,0] , opacity:[0.5,1]}} 
                     transition={{duration:2}}>
                        <FaFacebook className='p-1 bg-neutral-500 text-3xl text-white rounded-md cursor-pointer duration-300 hover:bg-neutral-700' />
                        <FaTwitter className='p-1 bg-neutral-500 text-3xl text-white rounded-md cursor-pointer duration-300 hover:bg-neutral-700' />
                        <FaWhatsapp className='p-1 bg-neutral-500 text-3xl text-white rounded-md cursor-pointer duration-300 hover:bg-neutral-700' />
                        <FaLinkedin className='p-1 bg-neutral-500 text-3xl text-white rounded-md cursor-pointer duration-300 hover:bg-neutral-700' />
                     </motion.div>
                  </div>
               ) )}
            </div>
         </section>
      </section>
   )
}

export default HomeDentist
