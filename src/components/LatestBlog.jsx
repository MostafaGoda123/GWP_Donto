import React from 'react'
import blog1 from '../Images/blog1.jpg'
import blog2 from '../Images/blog2.jpg'
import blog3 from '../Images/blog3.jpg'

const LatestBlog = () => {

   let allLatestBlogs = [
      { image:blog1 , des:'Maximize Your 2019 Dental Insurance with lots of Benefits' , name:"Salman" , time:"12 Oct, 2019" },
      { image:blog2 , des:'Are Your Teeth Making You Old? Are You Surprised! Hope you\'r Shocked' , name:"admin" , time:"14 Oct, 2019" },
      { image:blog3 , des:'Dental Implants: The Next Best Thing to Get Natural Teeth' , name:"Salman" , time:"10 Jan, 2020" },
   ]

   return (
      <section className="py-16 bg-blue-800">
         <section className="container">
            <h1 className="mb-10 font-semibold text-5xl text-center text-white">Latest Blog</h1>
            <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
               {allLatestBlogs.map((blog,index) => (
                  <div key={9491841+index} className="rounded-xl overflow-hidden bg-white">
                     <img src={blog.image} alt="" className='w-full' />
                     <div className="p-5 md:p-10">
                        <p className="font-semibold text-xl md:text-2xl h-24 md:h-28">{blog.des}</p>
                        <div className="flex justify-between text-lg text-neutral-500 border-t-2 border-t-neutral-200 pt-2">
                           <p className="">Posted by : {blog.name}</p>
                           <p className="">{blog.time}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </section>
      </section>
   )
}

export default LatestBlog
