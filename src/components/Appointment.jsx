import React from 'react'

const Appointment = () => {
   return (
      <section className='py-16'>
         <section className="container">
            <h1 className="mb-10 font-semibold text-5xl text-center">Request Appointment</h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 bg-neutral-50 rounded-xl">
               <input type="text" placeholder='Name' id='name' className="p-3 text-xl outline-neutral-200 rounded-xl bg-white shadow-xl" />
               <input type="email" placeholder='Email' id='email' className="p-3 text-xl outline-neutral-200 rounded-xl bg-white shadow-xl" />
               <input type="tel" placeholder='Phone' id='phone' className="p-3 text-xl outline-neutral-200 rounded-xl bg-white shadow-xl" />
               <input type="text" placeholder='Subject' id='subject' className="p-3 text-xl outline-neutral-200 rounded-xl bg-white shadow-xl" />
               <textarea placeholder='Subject' id='subject' className="p-3 text-xl outline-neutral-200 rounded-xl bg-white shadow-xl md:col-span-2 h-40 resize-none" />
               <button type='submit' className='btn' style={{width:'100%'}}>Submit</button>
            </form>
         </section>
      </section>
   )
}

export default Appointment
