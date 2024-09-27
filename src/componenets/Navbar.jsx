import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Posts', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    return (
        <div className='w-full h-20 flex justify-center items-center   space-x-6 border-y mb-8'>
            <div className='flex gap-10'>
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        to={`/${item.name}`}
                        aria-current={item.current ? 'page' : undefined}
                        className="uppercase text-black hover:border-b  px-3 py-2 text-base font-medium"
                        // className={classNames(
                        //     item.current ? 'bg-gray-900 text-white uppercase' : ' uppercase text-black hover:bg-gray-700 hover:text-white',
                        //     'rounded-md px-3 py-2 text-sm font-medium',
                        // )}
                   
                    >
                        {item.name}
                    </Link> 
                ))}
            </div>


        </div>

    )
}

export default Navbar