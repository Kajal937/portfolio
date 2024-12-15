import AboutMe from '@/components/aboutMe'
import Navbar from '@/components/navbar'
import React from 'react'
import { useTheme } from '../../components/themeContext/ThemeContext';


const About = () => {

  const { darkMode } = useTheme();

  return (
    <>
      <div className={`${darkMode ? 'bg-custom-black text-white' : 'bg-white text-black'}`}>
      <Navbar />
      <AboutMe />
      </div>
    </>
  )
}

export default About
