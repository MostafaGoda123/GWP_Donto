import React from 'react'
import g1 from '../Images/g1.jpg'
import g2 from '../Images/g2.jpg'
import g3 from '../Images/g3.jpg'
import g4 from '../Images/g4.jpg'
import g5 from '../Images/g5.jpg'


const HomeGallery = () => {
   return (
      <section className="bg-blue-800 py-16">
         <section className="container grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <img src={g1} alt="" className='w-full rounded-xl' />
            <img src={g2} alt="" className='w-full rounded-xl' />
            <img src={g3} alt="" className='w-full rounded-xl' />
            <img src={g4} alt="" className='w-full h-full rounded-xl lg:col-span-2' />
            <img src={g5} alt="" className='w-full rounded-xl' />
         </section>
      </section>
   )
}

export default HomeGallery
