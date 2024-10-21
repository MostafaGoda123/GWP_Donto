import React from 'react'
import homeLast from '../Images/homeLast.png'
import slider1 from '../Images/slider1.png'
import slider2 from '../Images/slider2.png'
import slider3 from '../Images/slider3.png'
import slider4 from '../Images/slider4.png'
import slider5 from '../Images/slider5.png'
import slider6 from '../Images/slider6.png'
import Slider from 'react-slick'

const HomeLast = () => {

   const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 3.1,
      slidesToScroll: 1,
      centerMode: true,
   };

   return (
      <section className="py-16">
         <section className="container">
            <div className="flex items-center gap-5 flex-col-reverse md:flex-row bg-blue-50 p-5 mb-10">
               <div className="flex-1">
                  <p className="text-xl md:text-2xl lg:text-4xl mb-5 md:mb-10 font-semibold">Request your appointment and start your smile makeover!</p>
                  <button className="btn">Request Appointment</button>
               </div>
               <div className="flex-1 flex justify-center">
                  <img src={homeLast} alt="" className='w-full max-w-[400px]' />
               </div>
            </div>
            <div className="slider-container">
            <Slider {...settings}>
               <div><img src={slider1} alt="" className='p-2' /></div>
               <div><img src={slider2} alt="" className='p-2' /></div>
               <div><img src={slider3} alt="" className='p-2' /></div>
               <div><img src={slider4} alt="" className='p-2' /></div>
               <div><img src={slider5} alt="" className='p-2' /></div>
               <div><img src={slider6} alt="" className='p-2' /></div>
            </Slider>
            </div>
         </section>
      </section>
   )
}

export default HomeLast
