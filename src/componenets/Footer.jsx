import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (

    <>
      <section className='flex justify-between py-8'>
        <div>
          <h1 className='text-3xl font-bold'>Get in touch</h1>
          <p className='text-base italic'>basnethusen7@gmail.com</p>


        </div>
        <div>
          <ul className='list-none mb-6 flex flex-col items-end leading-relaxed font-semibold text-right'>
            <li className='flex items-center gap-2'>Linked In <GoArrowUpRight/></li>
            <li className='flex items-center gap-2'>Github <GoArrowUpRight/></li>
            <li className='flex items-center gap-2'>Instagram <GoArrowUpRight/></li>
            

          </ul>

        </div>
      </section>
      <section className='flex justify-between font-semibold'>
        <div>@2024 Husen Basnet</div>
        <div>Built With MERN</div>
        <div>Dolakha, Nepal</div>
      </section>
    </>
  )
}

export default Footer