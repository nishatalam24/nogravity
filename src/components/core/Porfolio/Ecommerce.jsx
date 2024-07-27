import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const data =[
    {
      title:"Astro Ratan",
      link:"https://astroratan.in/",
      para:"Platform to help accelerate financial inclusion in India by providing scalable tech infrastructure to wealth managers and investment professionals."
  },
  ]

const Ecommerce = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
   <h1 className='font-semibold text-[34px]'>E Commerce</h1>

   <div className='border-r-4 border'>

      {
        data.map((data,index)=>(
          <div className='p-[40px] hover:bg-[#F9F9F9]' key={index}>
           {/* <a href="https://pramaniknivesh.com/"> */}
           <NavLink to={data.link}>
            <h1 className='font-semibold text-[18px]'>{data.title}</h1>
           </NavLink>

            {/* </a>  */}
            
            <p className='text-[#666666] '>{data.para}</p>
          </div>
        ))
      }




   </div>

 
    </div>
  )
}

export default Ecommerce