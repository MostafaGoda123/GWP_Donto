import React from 'react'
import aboutApproach1 from  '../Images/aboutApproach1.png'
import aboutApproach2 from  '../Images/aboutApproach2.png'
import aboutApproach3 from  '../Images/aboutApproach3.png'
import { motion } from 'framer-motion';

const AboutApproach = () => {

   let AboutApproachs = [
      { image:aboutApproach1 , title:'Consolation' , description:'Lorem Ipsum is simply is very dummy text of the printings and type and setting for content' },
      { image:aboutApproach2 , title:'Familiarity' , description:'Get our text demo is simply dummy text of the printings and type and setting for content' },
      { image:aboutApproach3 , title:'Outcome' , description:'Lorem Ipsum is simply is very dummy text of the printings and type setting for content' },
   ]

   return (
      <section className="py-16 bg-blue-800">
      <section className="container">
         <h1 className="mb-10 font-semibold text-5xl text-center text-white">Treatments</h1>
         <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {AboutApproachs.map((item,index) => (
               <motion.div key={410+index} className="rounded-xl py-10 px-5 border-2 border-blue-500 duration-300 hover:bg-blue-500 hover:bg-opacity-25 cursor-cell flex flex-col items-center gap-5 text-white text-center text-lg"
               animate={{rotateY:[-90 , 0]}}
               transition={{duration:2}}>
                  <img src={item.image} alt="" className='' />
                  <h2 className='font-semibold text-xl'>{item.title}</h2>
                  <p className='text-neutral-200'>{item.description}</p>
               </motion.div>
            ))}
         </div>
      </section>
      </section>
   )
}

export default AboutApproach
