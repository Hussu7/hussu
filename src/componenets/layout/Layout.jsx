import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import Footer from '../Footer'
Header

const Layout = ({ children }) => {
    return (
        <>
            <div className='px-40 py-8'>
                <Header />
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout