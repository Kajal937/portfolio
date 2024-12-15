import Navbar from '@/components/navbar'
import Skills from '@/components/skills'
import React from 'react'
import { useTheme } from '../../components/themeContext/ThemeContext';


const Services = () => {

  const { darkMode } = useTheme();


  return (
    <>
      <div className={`${darkMode ? 'bg-custom-black text-white' : 'bg-white text-black'}`}>
    <Navbar/>
    <Skills/>
    </div>
    </>
  )
}

export default Services
