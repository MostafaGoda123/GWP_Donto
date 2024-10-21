import React from 'react'
import Hero from '../components/Hero'
import AboutPractice from '../components/AboutPractice'
import AboutApproach from '../components/AboutApproach'
import AboutExperiencedDentist from '../components/AboutExperiencedDentist'
import LatestBlog from '../components/LatestBlog'
import AboutAchievement from '../components/AboutAchievement'
import Appointment from '../components/Appointment'

const About = () => {
  return (
    <section>
      <Hero name={'About Us'} />
      <AboutPractice />
      <AboutApproach />
      <AboutExperiencedDentist />
      <AboutAchievement />
      <LatestBlog />
      <Appointment />
    </section>
  )
}

export default About
