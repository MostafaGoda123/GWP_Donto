import React from 'react'
import dentistCurrie from '../Images/dentistCurrie.jpg'
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const DentistCurrie = () => {
   return (
      <section className="py-16">
         <section className="container flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 flex flex-col gap-5 items-center">
               <h1 className="text-xl md:text-4xl font-semibold">Dr. Nathan Currie <span className="text-lg md:text-2xl text-neutral-500">(DMD, MS, DICOI)</span></h1>
               <p className='text-neutral-500 text-sm md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
               <p className='text-neutral-500 text-sm md:text-lg'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy.</p>
               <h2 className='text-xl md:text-2xl font-semibold'>Dental Associations</h2>
               <ul className='flex flex-wrap gap-3 justify-center font-semibold text-lg list-disc marker:text-pink-500' style={{}}>
                  <li className='ms-3'>American Dental Association</li>
                  <li className='ms-3'>Academy of General Dentistry</li>
                  <li className='ms-3'>Carolina Dental Society</li>
                  <li className='ms-3'>Academy of General Dentistry</li>
                  <li className='ms-3'>American Association of Women Dentists</li>
               </ul>
            </div>
            <div className="max-w-[500px] flex flex-col items-center gap-4">
               <img src={dentistCurrie} alt=""  className='w-full rounded-xl'/>
               <p className="font-semibold text-lg"><span className="text-neutral-700">Name : </span>Nathan Currie</p>
               <p className="font-semibold text-lg"><span className="text-neutral-700">Specialization : </span>Orthodontics</p>
               <p className="font-semibold text-lg"><span className="text-neutral-700">Phone : </span>1-866-764-5387</p>
               <div className="icons flex justify-center gap-3 border-t-2 border-neutral-200 pt-4 w-full">
                  <FaFacebook className='p-1 bg-neutral-500 text-3xl text-white rounded-md cursor-pointer duration-300 hover:bg-neutral-700' />
                  <FaTwitter className='p-1 bg-neutral-500 text-3xl text-white rounded-md cursor-pointer duration-300 hover:bg-neutral-700' />
                  <FaWhatsapp className='p-1 bg-neutral-500 text-3xl text-white rounded-md cursor-pointer duration-300 hover:bg-neutral-700' />
                  <FaLinkedin className='p-1 bg-neutral-500 text-3xl text-white rounded-md cursor-pointer duration-300 hover:bg-neutral-700' />
               </div>
            </div>
         </section>
      </section>
   )
}

export default DentistCurrie
