import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegPlayCircle } from 'react-icons/fa';

const AboutAchievement = () => {
   return (
      <section className="py-16">
         <section className="container flex gap-8 flex-col md:flex-row items-center">
            <div className="flex-1 flex flex-col gap-4 md:gap-8 text-lg md:text-xl font-semibold text-neutral-500">
               <h1 className="text-2xl md:text-4xl text-black">Our Achievement</h1>
               <p>Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has embraced Cosmetic Dentistry and has redesigned the smiles for thev thousands of patients.</p>
               <div className="flex gap-5">
                  <Link to={'/log'} className='inline-block btn'>Appointment</Link> 
                  <Link target='_blank' to="https://www.youtube.com/watch?v=7HhdN9_MgE8" className='btn bg-[black]' ><FaRegPlayCircle className='inline-flex text-2xl me-2' />Watch Video</Link>
               </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 ">
               <div className={`singleFunBg p-10 flex flex-col items-center justify-center gap-2 text-xl font-semibold text-white`}><h1 className='text-2xl font-bold'>22 +</h1><p>Patients</p></div>
               <div className={`singleFunBg p-10 flex flex-col items-center justify-center gap-2 text-xl font-semibold text-white`}><h1 className='text-2xl font-bold'>75 +</h1><p>Dentist</p></div>
               <div className={`singleFunBg p-10 flex flex-col items-center justify-center gap-2 text-xl font-semibold text-white`}><h1 className='text-2xl font-bold'>25 +</h1><p>Awards</p></div>
               <div className={`singleFunBg p-10 flex flex-col items-center justify-center gap-2 text-xl font-semibold text-white`}><h1 className='text-2xl font-bold'>28 +</h1><p>Branch</p></div>
            </div>
         </section>
      </section>
   )
}

export default AboutAchievement
