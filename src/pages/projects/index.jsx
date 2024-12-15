import CardProjects from '@/components/cardProjects'
import Navbar from '@/components/navbar'
import React from 'react'
import { useTheme } from '../../components/themeContext/ThemeContext';


const Projects = () => {

  const { darkMode } = useTheme();


  return (
    <>
      <div className={`${darkMode ? 'bg-custom-black text-white' : 'bg-white text-black'}`}>
      <Navbar />
    <CardProjects/>
   {/* <ProjectsSection/> */}
   </div>
    </>
  )
}

export default Projects

