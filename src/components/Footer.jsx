import React from 'react'

const Footer = () => {
  return (
    <section className="bg-blue-800">
      <section className="container">
        <div className="py-16 text-neutral-300 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <ul className="flex flex-col gap-1 md:gap-2 text-lg font-semibold">
            <li className="text-white mb-3 md:mb-5 font-semibold text-3xl">Practices</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>For Patients</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>FAQ's</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>About</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Contact Us</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Blog</li>
          </ul>
          <ul className="flex flex-col gap-1 md:gap-2 text-lg font-semibold">
            <li className="text-white mb-3 md:mb-5 font-semibold text-3xl">Resources</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>New Patients</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Meet the Team</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Patient Form</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Insurance</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Account Login</li>
          </ul>
          <ul className="flex flex-col gap-1 md:gap-2 text-lg font-semibold">
            <li className="text-white mb-3 md:mb-5 font-semibold text-3xl">Services</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Dental Dictionary</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Dental Sealands</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Dental Implants</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>General Dentistry</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Sedation Dentistry</li>
          </ul>
          <ul className="flex flex-col gap-1 md:gap-2 text-lg font-semibold">
            <li className="text-white mb-3 md:mb-5 font-semibold text-3xl">Our Address</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Datobbo Dentistry 5212 Cedar</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Village Dr Mason, NY.</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Phone:+1 6595 9989 649</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Email:email@gmail.com</li>
            <li className='cursor-pointer hover:text-pink-500 duration-300'>Fax:+1 999 9432 946</li>
          </ul>
        </div>
      </section>
        <footer className='text-md md:text-xl font-semibold text-white flex items-center justify-center h-[10vh] bg-opacity-50 bg-blue-600'>&copy; 2024 - <span className="text-pink-500 text-lg md:text-2xl inline-block my-1">Mostafa ElSayed</span> | All Rights Reserved</footer>
    </section>
  )
}

export default Footer
