import React, { useState } from 'react'
import { FaGoogle, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logLogo from '../Images/logLogo.png'

const Log = () => {

  const [loginORsignup, setloginORsignup] = useState(true);

  return (
    <section className="bg-blue-800 pt-[20vh] md:pt-[25vh] pb-16">
      <section className="container w-full rounded-xl">
      <section className="flex flex-col md:flex-row bg-white rounded-t-xl">
        <div className="flex-1 flex flex-col items-center gap-5 pb-10">
          <img src={logLogo} alt="" className='w-40' />
          <h2 className="font-semibold text-xl md:text-3xl">We are The Lotus Team</h2>
          {loginORsignup?
          <>
          <form action="" className='w-full max-w-[600px] px-5 text-xl flex flex-col gap-3 my-5'>
          <p>Please login to your account</p>
          <input type="email" placeholder='email address' className='outline-none rounded-md p-2 w-full border-2 border-neutral-200 focus:border-neutral-500'/>
          <input type="password" placeholder='password' className='outline-none rounded-md p-2 w-full border-2 border-neutral-200 focus:border-neutral-500'/>
          <div className="flex w-full gap-5 justify-center items-center">
            <button type='submit' className='btn'>LogIn</button>
            <button>forget password ?</button>
          </div>
          </form>
          <div className="flex items-center text-sm sm:text-xl font-semibold gap-2 md:gap-5">Do you have an account? <button className="btn" onClick={()=>setloginORsignup(false)}>Create New</button></div>
          </>
          :
          <>
          <form action="" className='w-full max-w-[600px] px-5 text-xl flex flex-col gap-3 my-5'>
            <p>Please create a new acount</p>
            <input type="text" placeholder='enter your name' className='outline-none rounded-md p-2 w-full border-2 border-neutral-200 focus:border-neutral-500'/>
            <input type="email" placeholder='email address' className='outline-none rounded-md p-2 w-full border-2 border-neutral-200 focus:border-neutral-500'/>
            <input type="password" placeholder='password' className='outline-none rounded-md p-2 w-full border-2 border-neutral-200 focus:border-neutral-500'/>
            <input type="password" placeholder='confirm password' className='outline-none rounded-md p-2 w-full border-2 border-neutral-200 focus:border-neutral-500'/>
            <div className="flex w-full gap-5 justify-center items-center">
              <button type='submit' className='btn'>SignUp</button>
            </div>
          </form>
          <div className="flex items-center text-sm sm:text-xl font-semibold gap-2 md:gap-5">Do you have an account? <button className="btn" onClick={()=>setloginORsignup(true)}>Log In</button></div>
          </>}
        </div>
        <div className="flex-1 flex flex-col justify-center items-center text-white text-center gap-5 p-5 md:p-10 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-xl md:-mt-5 md:-mr-5">
          <h2 className='font-semibold text-lg md:text-2xl'>We are more than just a company</h2>
          <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>
      <div className="w-full flex flex-col justify-center items-center gap-3 pt-10 pb-5 bg-white rounded-b-xl">
        <h2 className='font-semibold text-xl md:text-3xl'>or sign up with:</h2>
        <div className="icons flex justify-center gap-3 border-t-2 border-neutral-200 pt-4 w-full">
          <Link to={'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=366989959436-mmj3dugr9lblai1tkhov7iqupfp65bv4.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdonto-8ab38.firebaseapp.com%2F__%2Fauth%2Fhandler&state=AMbdmDmooFvcGi5XlvlASeMyDlH9rmHDimJ0q9_DLXHTfh1IS_b3iGU0ps135g1xu-ES3lWb5_VmBgy1TmzfdRNO2vH7OUlgILejRqzWs1N08c2Gz0FqhqGc01wb9x8oK4bk9NjEnqJKeF1kzi8ROubDVwOO6d5956AsmL9l7FhYFK2CB7dxQZya-xGCLUxF970R4WpKfVqsYpQrOKXfSz5lCWyrN2Obn2gCVY6hPNmUYWhoDDe-n3kPHZNEDifYR4GGGPSt11Hv1-xjyqG1PN5AADvUTiBEZXMM-G7N0S2FK7r7_zY83X5fhKxeNovAKi7ShEoJ&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20profile&context_uri=http%3A%2F%2Flocalhost%3A3001&service=lso&o2v=1&ddm=0&flowName=GeneralOAuthFlow'}><FaGoogle className='p-1 bg-neutral-500 text-3xl text-white rounded-md cursor-pointer duration-300 hover:bg-neutral-700' /></Link>
          <Link to={'https://github.com'}><FaGithub className='p-1 bg-neutral-500 text-3xl text-white rounded-md cursor-pointer duration-300 hover:bg-neutral-700' /></Link>
          <Link to={'https://facebook.com'}><FaFacebook className='p-1 bg-neutral-500 text-3xl text-white rounded-md cursor-pointer duration-300 hover:bg-neutral-700' /></Link>
          <Link to={'https://x.com'}><FaTwitter className='p-1 bg-neutral-500 text-3xl text-white rounded-md cursor-pointer duration-300 hover:bg-neutral-700' /></Link>
        </div>
      </div>
      </section>
    </section>
  )
}

export default Log
