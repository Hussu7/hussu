import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Button from './Button';

const Header = () => {
    return (
        <>
            <div className="header flex justify-between mb-8">
                <section className='header-icons w-96 flex items-center space-x-10 '>
                    <FaFacebook size={25} className='cursor-pointer'/>
                    <FaInstagram size={25} className='cursor-pointer'/>
                    <FaGithub size={25} className='cursor-pointer'/>
                    <FaLinkedin size={25} className='cursor-pointer'/>
                    {/* <FaYoutube size={20}/> */}

                </section>
                <section className='header-logo w-96 text-center'>
                    <h1 className='text-3xl italic font-serif font-bold' >Mr.Hussu7</h1>

                </section>
                <section className='header-search w-96 flex flex-col justify-center items-end '>
                    <Button button_text="Let's Work Together"/>
                   {/* <FaSearch size={20} className='cursor-pointer'/> */}

                </section>
            </div>
        </>
    )
}

export default Header