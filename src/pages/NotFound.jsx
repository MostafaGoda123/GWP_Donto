import React from 'react'
import { Link } from 'react-router-dom'
import not404 from '../Images/404.png'

const NotFound = () => {
  return (
    <section className="bg-blue-800 w-full h-[100vh] pt-[15vh]">
    <section className="container flex flex-col justify-center items-center gap-8 text-white text-2xl md:text-4xl w-full h-full">
      <img src={not404} alt="" className='w-full max-w-[500px] rounded-xl' />
      <h1>This page doesn't exist</h1>
      <Link to={'/'} className='btn'>Go To Home Page</Link>
    </section>
    </section>
  )
}

export default NotFound
