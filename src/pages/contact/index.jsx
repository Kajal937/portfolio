
import ContactUs from '@/components/contactUs'
import Navbar from '@/components/navbar'
import React from 'react'
import { useTheme } from '../../components/themeContext/ThemeContext';


const Contact = () => {

  const { darkMode } = useTheme();


  return (
  <>
    <div className={`${darkMode ? 'bg-custom-black text-white' : 'bg-white text-black'}`}>
  <Navbar/>
 <ContactUs/>
 </div>
  </>
  )
}

export default Contact
