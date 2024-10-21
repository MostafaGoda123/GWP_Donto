import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const ScrollTop = () => {

   const [showIcon, setShowIcon] = useState(false);
   function scrollFun() {
      window.scrollY > 500 ? setShowIcon(true) : setShowIcon(false);
   }
   window.addEventListener('scroll' , scrollFun)

   return (
      <>
         {showIcon && 
         <div onClick={() => window.scrollTo({top: 0,behavior: "smooth"})} className='fixed bottom-10 right-10 w-12 h-12 rounded-full text-2xl duration-300 hover:text-3xl flex justify-center items-center bg-pink-500 text-white cursor-pointer border-2 border-white'>
            <IoIosArrowUp />
         </div>}
      </>
   )
}

export default ScrollTop
