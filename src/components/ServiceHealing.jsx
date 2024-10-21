import React from 'react'
import service_details_promo1 from '../Images/service-details-promo1.png'

const ServiceHealing = () => {
   return (
      <section className="py-16">
         <section className="container flex flex-col-reverse md:flex-row gap-8 items-center">
            <div className="flex-1 flex flex-col items-center text-center gap-4 text-neutral-500 text-sm md:text-lg">
               <h1 className="text-black font-semibold text-2xl md:text-4xl">PRF For Faster Healing</h1>
               <p>Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at metus malesuada, nec convallis lacus commodo. Duis blandit neque purus, nec auctor mi sollicitudin nec. Duis urna ipsum, tincidunt at euismod ut, placerat eget urna. Curabitur nec faucibus leo, et laoreet nibh. Pellentesque euismod quam at eros efficitur, vitae venenatis sem consectetur. Donec ut risus ultricies, dictum neque at, bibendum purus. In hac habitasse platea dictumst</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius.</p>
            </div>
            <div className="flex-1 max-w-[500px]">
               <img src={service_details_promo1} alt="" className='w-full' />
            </div>
         </section>
      </section>
   )
}

export default ServiceHealing
