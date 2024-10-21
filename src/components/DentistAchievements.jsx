import React from 'react'
import cup from '../Images/cup.jpg'

const DentistAchievements = () => {
   return (
      <section className="py-16 bg-blue-800">
         <section className="container flex flex-col md:flex-row gap-8 items-center">
            <div className="max-w-[500px]">
               <img src={cup} alt="" className='w-full rounded-xl' />
            </div>
            <div className="flex-1 text-center flex flex-col gap-5">
               <h1 className="text-2xl md:text-4xl font-semibold text-white">Experienced Dentist</h1>
               <p className="text-lg md:text-xl text-neutral-300">Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has embraced Cosmetic Dentistry and has redesigned the smiles for thev thousands of patients.</p>
               <p className="text-lg md:text-xl text-neutral-300">Dr. Harrie believes in providing her patients with more than just world class dental care. He also helps patients recognize the vital connection between dental health and whole body health. A graduate of the University of California’s School of Dentistry, Dr. Harrie is a leader in the movement to bring environmental sanity and well-being into the dental world for future.</p>
            </div>
         </section>
      </section>
   )
}

export default DentistAchievements
