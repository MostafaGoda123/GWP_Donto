import React from 'react'
import homeWelcome1 from '../Images/homeWelcome1.svg'
import homeWelcome2 from '../Images/homeWelcome2.svg'
import homeWelcome3 from '../Images/homeWelcome3.svg'
import banner1 from '../Images/about-banner1.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const HomeWelcome = () => {

   let homeWelcomes = [
      { icon:homeWelcome1 , title:'Easy Appointment' , description:"Lorem Ipsum is simply is very dummy text of the printings and type setting" },
      { icon:homeWelcome2 , title:'Emergency Service' , description:"Get our text demo is simply dummy text of the printings and type for content" },
      { icon:homeWelcome3 , title:'24/7 Service' , description:"Lorem Ipsum is simply is very dummy text of the printings and type setting" },
   ]

   return (
      <section className="py-16">
         <section className="container flex flex-col gap-10">
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-neutral-50 p-5 rounded-xl">
               {homeWelcomes.map((item,index) => (
                  <motion.div key={index+15302} className="p-8 shadow-xl bg-white flex items-center justify-center flex-col gap-5 rounded-2xl"
                  animate={{x:[-100,0] , y:[100,0]}}
                  transition={{duration:0.7 , loop:Infinity}}>
                     <img src={item.icon} alt="" className='' />
                     <h2 className='text-center font-semibold text-3xl'>{item.title}</h2>
                     <p className='text-center text-xl text-neutral-500'>{item.description}</p>
                  </motion.div>
               ))}
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-center">
               <div className="image flex-1 flex justify-center">
                  <img src={banner1} alt="" className='w-full max-w-[500px]' />
               </div>
               <motion.div className="flex-1 flex flex-col gap-5"
               whileInView={{scale:[0.5,1]}}
               transition={{duration:0.7}}>
                  <h1 className="text-3xl font-semibold">Welcome to a Family</h1>
                  <p className='text-md font-semibold text-neutral-500'>Welcome to Datobbo Dental represents everything going to dentist necessary. We have upgraded your dreaded dentist appointment and transformed it into a relaxing. Consectetur adipisicing elit. Quod ea, consequuntur itaque enim et expedita, optio omnis ipsa magni, perspiciatis totam ipsum! Voluptatibus, neque at.</p>
                  <Link to={'/about'} className='text-pink-500 font-semibold duration-300 hover:text-pink-700 hover:border-b-pink-700 text-2xl pb-1 border-b-2 border-b-pink-500 w-fit'>About Us</Link>
                  <div className='shadow-2xl bg-white flex p-5 rounded-xl'>
                     <motion.ul className="flex-1 flex items-center flex-col border-e-2 border-e-neutral-200"
                     whileInView={{x:[-50,0]}}
                     transition={{duration:0.7}}>
                        <li className='font-semibold text-xl'>500+</li>
                        <li className='mb-8 text-xl text-neutral-500'>Happy Patients</li>
                        <li className='font-semibold text-xl'>25+</li>
                        <li className='text-xl text-neutral-500'>Years Experience</li>
                     </motion.ul>
                     <motion.ul className="flex-1 flex items-center flex-col"
                     whileInView={{x:[50,0]}}
                     transition={{duration:0.7}}>
                        <li className='font-semibold text-xl'>500+</li>
                        <li className='mb-8 text-xl text-neutral-500'>Happy Patients</li>
                        <li className='font-semibold text-xl'>25+</li>
                        <li className='text-xl text-neutral-500'>Years Experience</li>
                     </motion.ul>
                  </div>
               </motion.div>
            </div>
         </section>
      </section>
   )
}

export default HomeWelcome
