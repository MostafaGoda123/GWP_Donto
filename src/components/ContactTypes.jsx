import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { IoMdHome } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'
import { motion } from 'framer-motion';

const ContactTypes = () => {
   return (
      <section className="py-16">
      <section className="container">
         <section className="bg-neutral-100 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4 md:p-8">
            <motion.div className="rounded-xl p-5 bg-white flex items-center gap-5 text-xl text-neutral-500 shadow-xl"
            whileHover={{translateY:-15 , border:'1px solid #ccc'}}
            transition={{duration:0.3}}>
               <IoMdHome className='w-16 h-16 flex justify-center items-center p-3 text-xl text-pink-500 bg-pink-500 bg-opacity-25 rounded-full duration-300 hover:bg-pink-500 hover:text-white' />
               <div className="flex flex-col gap-1">
                  <h3 className="text-black font-semibold mb-2">Address</h3>
                  <p>55 West, 33rd Street</p>
                  <p>5th Floor, New York</p>
               </div>
            </motion.div>{/* 1 */}
            <motion.div className="rounded-xl p-5 bg-white flex items-center gap-5 text-xl text-neutral-500 shadow-xl"
            whileHover={{translateY:-15 , border:'1px solid #ccc'}}
            transition={{duration:0.3}}>
               <FaEnvelope className='w-16 h-16 flex justify-center items-center p-3 text-xl text-green-500 bg-green-500 bg-opacity-25 rounded-full duration-300 hover:bg-green-500 hover:text-white' />
               <div className="flex flex-col gap-1">
                  <h3 className="text-black font-semibold mb-2">Email</h3>
                  <p>info@dentzone.com</p>
                  <p>email@gmail.com</p>
               </div>
            </motion.div>{/* 2 */}
            <motion.div className="rounded-xl p-5 bg-white flex items-center gap-5 text-xl text-neutral-500 shadow-xl"
            whileHover={{translateY:-15 , border:'1px solid #ccc'}}
            transition={{duration:0.3}}>
               <IoCall className='w-16 h-16 flex justify-center items-center p-3 text-xl text-blue-500 bg-blue-500 bg-opacity-25 rounded-full duration-300 hover:bg-blue-500 hover:text-white' />
               <div className="flex flex-col gap-1">
                  <h3 className="text-black font-semibold mb-2">Phone</h3>
                  <p>(222) 6638-1234-52</p>
                  <p>(222) 787-1234-963</p>
               </div>
            </motion.div>{/* 3 */}
         </section>
      </section>
      </section>
   )
}

export default ContactTypes
