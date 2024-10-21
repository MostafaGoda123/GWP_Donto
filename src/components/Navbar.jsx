import React, { useState } from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [allLinks, setAllLinks] = useState([{ name:'Home' , to:'/' , active:true },
    { name:'About'   , to:'/about'   , active:false },
    { name:'Service' , to:'/service' , active:false },
    { name:'Dentist' , to:'/dentist' , active:false },
    { name:'Contact' , to:'/contact' , active:false },
    { name:'LogIn'   , to:'/log'     , active:false }
  ]);
  function handleActive(activeName) {
    let newAllLinks = allLinks.map((link) => link.name===activeName ? { name:link.name   , to:link.to   , active:true } : { name:link.name   , to:link.to   , active:false } )
    setAllLinks(newAllLinks)
  }

  return (
    <nav className='container absolute w-full top-8 left-1/2 -translate-x-1/2'>
      <div className="w-full bg-white rounded-xl p-3 md:p-5 flex items-center justify-between">
          <Link to={'/'}><img src={logo} alt="" className='h-[5vh]' /></Link>
          <ul className='hidden md:flex gap-5 text-xl font-semibold items-center'>
            {allLinks.map((link,index) => (
              <li key={index+953}><Link onClick={()=>handleActive(link.name)} className={`duration-300 hover:text-pink-500 ${link.active&&'text-pink-500'} ${link.to==='/log' && 'btn'}`}  style={{padding:link.to==='/log'?'5px 20px':''}} to={link.to}>{link.name}</Link></li>
            ))}
          </ul>
          <div className="md:hidden relative">
            <FaBars onClick={()=>setShowMenu(true)} className='text-2xl duration-300 cursor-pointer hover:text-pink-500' />
            {showMenu && 
            <motion.ul onClick={()=>setShowMenu(false)} className='absolute -top-4 z-40 px-16 pt-10 pb-5 rounded-xl bg-white flex flex-col gap-5 text-xl font-semibold items-center'
            whileInView={{opacity:[0,1] , right:['-250px','-13px'] }}
            transition={{duration:1}}>
              <motion.li className='absolute top-3 right-6 text-3xl cursor-pointer hover:text-red-600'
                whileHover={{rotate:90 , fontSize:'40px'}}
                transition={{duration:0.5}}
              ><IoClose /></motion.li>
              {allLinks.map((link,index) => (
                <li key={index+953}><Link onClick={()=>handleActive(link.name)} className={`duration-300 hover:text-pink-500 ${link.active&&'text-pink-500'} ${link.to==='/log' && 'btn'}`}  style={{padding:link.to==='/log'?'5px 20px':''}} to={link.to}>{link.name}</Link></li>
              ))}
            </motion.ul>}
          </div>
      </div>
    </nav>
  )
}

export default Navbar
