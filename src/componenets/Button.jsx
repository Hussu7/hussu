import React from 'react'

const Button = ({button_text}) => {
    return (
        <>
        <button className='bg-slate-800 text-white px-12 py-3 rounded-full text-base font-sans border-2 hover:bg-white hover:text-black'>{button_text}</button>
        </>
    )
}

export default Button