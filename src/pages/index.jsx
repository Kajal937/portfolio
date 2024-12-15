
// import MainNavbar from '@/components/mainNavbar'
// import Navigation from '@/components/navigation'
import React from 'react'
import { useTheme } from '../components/themeContext/ThemeContext';
import Navbar from '@/components/navbar'
import Home from '@/components/home'


const Homepge = () => {

  const { darkMode } = useTheme();


  return (
    <>
      {/* <Navigation/>
          <MainNavbar/> */}
           <div className={`${darkMode ? 'bg-custom-black text-white' : 'bg-white text-black'}`}>
      <Navbar />
      <Home />
      </div>
    </>
  )
}

export default Homepge
