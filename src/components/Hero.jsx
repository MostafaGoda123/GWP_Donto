import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import hero_main_bg from '../Images/hero-main-bg.png'
import injection from '../Images/injection.png'
import inject_tool from '../Images/inject-tool.png'
import brushman from '../Images/brushman.png'
import staircase from '../Images/staircase.png'
import { motion } from 'framer-motion'

const Hero = ({name}) => {

  let location = useLocation()

  return (
    <div className='bg-blue-800 h-[100vh] pt-[15vh]'>
      <div className="container flex items-center flex-col md:flex-row w-full h-full ">
        <div className='flex-1 text-white text-xl md:text-3xl font-semibold flex flex-col items-center justify-center gap-8'>
          {location.pathname === '/' ? 
          <div className="container h-full flex flex-col gap-5 text-white justify-center">
            <h3 className='font-semibold text-3xl'>Better Life Through</h3>
            <h1 className="font-semibold text-5xl">Better Dentistry</h1>
            <p className='text-xl max-w-[500px] text-neutral-100'>Join us to a fun and friendly dental environment. Our professionals are working so hard to see smile on your face that you deserve! We are dedicated about our duties.</p>
            <Link to="log" className='btn'>Appointment</Link>
          </div>
          :
          <>
            <h1 className='text-3xl md:text-5xl'>{name}</h1>
            <p><Link to={'/'}>Home Page</Link> - {name}</p>
          </>}
        </div>
        <div className={`flex-1 md:flex items-center justify-center ${location.pathname==='/'?"hidden":""}`}>
          <div className="relative pb-10 pe-20 z-20">
            <img src={hero_main_bg} alt="" className='w-full' />
            <motion.img src={inject_tool} alt="" className='absolute top-10 right-0' animate={{right : [0,30,0]}}  transition={{duration:2 , repeat:Infinity , repeatType: "loop",}} />
            <motion.img src={injection} alt="" className='absolute top-28 right-6' animate={{top : [100,140,100]}}  transition={{duration:2 , repeat:Infinity , repeatType: "loop",}} />
            <motion.img src={staircase} alt="" className='absolute bottom-16 right-20'  animate={{right : [77,81,77] , bottom : [66,78,66] }}  transition={{duration:2 , repeat:Infinity , repeatType: "loop",}} />
            <motion.img src={brushman} alt="" className='absolute bottom-0 right-1/2' animate={{y : [0,-20,0],}}  transition={{duration:2 , repeat:Infinity , repeatType: "loop",}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
