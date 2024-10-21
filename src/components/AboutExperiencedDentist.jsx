import React from 'react'
import experiencedDentist from '../Images/experienceddentist.png'

const AboutExperiencedDentist = () => {
   return (
      <section className="py-16">
         <section className="container flex flex-col md:flex-row gap-8 items-center">
            <img src={experiencedDentist} alt="" className="w-full" />
            <div className="text-sm md:text-lg text-neutral-500 flex flex-col gap-3 text-center">
               <h1 className="mb-3 font-semibold text-black text-2xl md:text-4xl">Experienced Dentist</h1>
               <p>Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has embraced Cosmetic Dentistry and has redesigned the smiles for thev thousands of patients.</p>
               <p>Dr. Harrie believes in providing her patients with more than just world class dental care. He also helps patients recognize the vital connection between dental health and whole body health. A graduate of the University of California’s School of Dentistry, Dr. Harrie is a leader in the movement to bring environmental sanity and well-being into the dental world for future.</p>
            </div>
         </section>
      </section>
   )
}

export default AboutExperiencedDentist
