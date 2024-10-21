import React from 'react'
import Hero from '../components/Hero'
import Appointment from '../components/Appointment'
import ContactTypes from '../components/ContactTypes'

const Contact = () => {
  return (
    <section>
      <Hero name={'Contact Us'} />
      <ContactTypes />
      <Appointment />
    </section>
  )
}

export default Contact
