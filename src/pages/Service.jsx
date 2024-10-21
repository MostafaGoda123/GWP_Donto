import React from 'react'
import Hero from '../components/Hero'
import ServiceHealing from '../components/ServiceHealing'
import ServiceMercury from '../components/ServiceMercury'
import ServiceSafety from '../components/ServiceSafety'
import Appointment from '../components/Appointment'

const Service = () => {
  return (
    <section>
      <Hero name={'Service Details'} />
      <ServiceHealing />
      <ServiceMercury />
      <ServiceSafety />
      <Appointment />
    </section>
  )
}

export default Service
