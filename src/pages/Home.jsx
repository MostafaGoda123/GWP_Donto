import React from 'react'
import Hero from '../components/Hero'
import HomeWelcome from '../components/HomeWelcome'
import HomeTreatment from '../components/HomeTreatment'
import HomeDentist from '../components/HomeDentist'
import Appointment from '../components/Appointment'
import HomeGallery from '../components/HomeGallery'
import HomeTestimonials from '../components/HomeTestimonials'
import HomeLast from '../components/HomeLast'
import LatestBlog from '../components/LatestBlog'

const Home = () => {
   return (
      <main>
         <Hero />
         <HomeWelcome />
         <HomeTreatment />
         <HomeDentist />
         <Appointment />
         <HomeGallery />
         <HomeTestimonials />
         <LatestBlog />
         <HomeLast />
      </main>
   )
}

export default Home
