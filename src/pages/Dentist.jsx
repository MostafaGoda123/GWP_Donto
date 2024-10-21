import React from 'react'
import Hero from '../components/Hero'
import DentistCurrie from '../components/DentistCurrie'
import DentistAchievements from '../components/DentistAchievements'
import Appointment from './../components/Appointment';

const Dentist = () => {
  return (
    <section>
      <Hero name={'Dr. Nathan Currie'} />
      <DentistCurrie />
      <DentistAchievements />
      <Appointment />
    </section>
  )
}

export default Dentist
