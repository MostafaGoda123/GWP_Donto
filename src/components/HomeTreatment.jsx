import React from 'react'
import homeTreatment1 from '../Images/homeTreatment1.svg'
import homeTreatment2 from '../Images/homeTreatment2.svg'
import homeTreatment3 from '../Images/homeTreatment3.svg'
import homeTreatment4 from '../Images/homeTreatment4.svg'
import homeTreatment5 from '../Images/homeTreatment5.svg'
import homeTreatment6 from '../Images/homeTreatment6.svg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeTreatment = () => {

   let HomeTreatments = [
      { icon:homeTreatment1 , title:'Complete Dentistry' , description:'Lorem Ipsum is simply is very dummy text of the printings and type and setting for content' },
      { icon:homeTreatment2 , title:'Dental Selants' , description:'Get our text demo is simply dummy text of the printings and type and setting for content' },
      { icon:homeTreatment3 , title:'Dental Dictionary' , description:'Lorem Ipsum is simply is very dummy text of the printings and type setting for content' },
      { icon:homeTreatment4 , title:'Dental Implants' , description:'Lorem Ipsum is simply is very dummy text of the printings and type and setting for content' },
      { icon:homeTreatment5 , title:'Oral Surgery' , description:'Get our text demo is simply dummy text of the printings and type and setting for content' },
      { icon:homeTreatment6 , title:'General Dentistry' , description:'Lorem Ipsum is simply is very dummy text of the printings and type setting for content' },
   ]

   return (
      <section className="py-16 bg-blue-800">
         <section className="container">
            <h1 className="mb-10 font-semibold text-5xl text-center text-white">Treatments</h1>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
               {HomeTreatments.map((item,index) => (
                  <motion.div key={493310+index} className="rounded-xl py-10 px-5 border-2 border-blue-500 duration-300 hover:bg-blue-500 hover:bg-opacity-25 cursor-cell flex flex-col items-center gap-5 text-white text-center text-lg"
                  animate={{rotateY:[-90 , 0]}}
                  transition={{duration:2}}>
                     <img src={item.icon} alt="" className='' />
                     <h2 className='font-semibold text-xl'>{item.title}</h2>
                     <p className='text-neutral-300'>{item.description}</p>
                     <Link to={'/'} className='w-fit pb-1 border-b-2 border-b-pink-500 duration-300 hover:text-pink-500'>Read more</Link>
                  </motion.div>
               ))}
            </div>
         </section>
      </section>
   )
}

export default HomeTreatment
