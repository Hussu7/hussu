import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
Header

const Layout = ({ children }) => {
    return (
        <>
            <div className='px-40 py-8'>
                <Header />
                <Navbar />
                {children}
            </div>
        </>
    )
}

export default Layout