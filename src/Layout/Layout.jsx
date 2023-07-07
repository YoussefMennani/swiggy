import React from 'react'
import Footer from '../common/Footer/Footer'
import NavBar from '../common/Header/NavBar'

const Layout = ({children}) => {
  return (
    <>
    <NavBar/>
        <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout