// import React from 'react';
// import Link from 'next/link';
// import { useTheme } from '../themeContext/ThemeContext'; // Updated path

// const Navbar = () => {
//     const { darkMode, toggleDarkMode } = useTheme();

//     return (
//         <div className={`w-full ${darkMode ? ' bg-custom-black text-white' : 'bg-white text-black'}`}>
//             <div className="max-w-[1280px] mx-auto flex justify-between items-center py-4 border-b border-black/5">
//                 <div className="font-bold text-[24px] uppercase tracking-wide">
//                     <h1>PORTFOLIO</h1>
//                 </div>

//                 <ul className="flex gap-5 uppercase font-normal text-[14px]">
//                     <li><Link href="/">Home</Link></li>
//                     <li><Link href="/about">About</Link></li>
//                     <li><Link href="/services">Service</Link></li>
//                     <li><Link href="/projects">Project</Link></li>
//                     <li><Link href="/contact">Contact</Link></li>
//                 </ul>

//                 <button
//                     onClick={toggleDarkMode}
//                     className="ml-4 p-2 rounded border"
//                 >
//                     {darkMode ? 'Light Mode' : 'Dark Mode'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useTheme } from '../themeContext/ThemeContext';
// import { FiMenu, FiX } from "react-icons/fi"; 

// const Navbar = () => {
//     const { darkMode, toggleDarkMode } = useTheme();
//     const [showMenu, setShowMenu] = useState(false); 

//     return (
//         <div className={`w-full ${darkMode ? 'bg-custom-black text-white' : 'bg-white text-black'}`}>
//             <div className="max-w-[1280px] mx-auto flex justify-between items-center py-4 border-b border-black/5">
//                 <div className="font-bold text-[20px] uppercase tracking-wide">
//                     <h1>PORTFOLIO</h1>
//                 </div>

//                 <ul className="hidden sm:flex gap-5 uppercase font-normal text-[14px]">
//                     <li><Link href="/">Home</Link></li>
//                     <li><Link href="/about">About</Link></li>
//                     <li><Link href="/services">Service</Link></li>
//                     <li><Link href="/projects">Project</Link></li>
//                     <li><Link href="/contact">Contact</Link></li>
//                 </ul>

//                 <button
//                     onClick={() => setShowMenu(!showMenu)}
//                     className="sm:hidden text-black p-2 rounded"
//                 >
//                     {showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
//                 </button>

//                 <button
//                     onClick={toggleDarkMode}
//                     className="ml-4 p-2 rounded border sm:block hidden"
//                 >
//                     {darkMode ? 'Light Mode' : 'Dark Mode'}
//                 </button>
//             </div>

//             <div className={`sm:hidden ${showMenu ? 'block' : 'hidden'} absolute top-16 w-full bg-white shadow-lg`}>
//                 <ul className="flex flex-col items-center gap-4 py-4">
//                     <li><Link href="/">Home</Link></li>
//                     <li><Link href="/about">About</Link></li>
//                     <li><Link href="/services">Service</Link></li>
//                     <li><Link href="/projects">Project</Link></li>
//                     <li><Link href="/contact">Contact</Link></li>
//                 </ul>

//                 <button
//                     onClick={toggleDarkMode}
//                     className="w-full p-2 rounded bg-custom-blue text-[#004E89]"
//                 >
//                     {darkMode ? 'Light Mode' : 'Dark Mode'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Navbar;


import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../themeContext/ThemeContext';
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const [showMenu, setShowMenu] = useState(false); 

    return (
        <div className={`w-full ${darkMode ? 'bg-custom-black text-white' : 'bg-white text-black'}`}>
            <div className="max-w-[1280px] mx-auto flex justify-between items-center py-4 border-b border-black/5">
                <div className="font-bold text-[20px] uppercase tracking-wide">
                    <h1>PORTFOLIO</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex gap-5 uppercase font-normal text-[14px]">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Service</Link></li>
                    <li><Link href="/projects">Project</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="sm:hidden text-black p-2 rounded"
                >
                    {showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Dark Mode Toggle Button (Desktop) */}
                <button
                    onClick={toggleDarkMode}
                    className="ml-4 p-2 rounded border sm:block hidden"
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`sm:hidden ${showMenu ? 'block' : 'hidden'} absolute top-16 w-full bg-[#302f2f] text-white shadow-lg`}>
                <ul className="flex flex-col items-center gap-4 py-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Service</Link></li>
                    <li><Link href="/projects">Project</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>

                {/* Dark Mode Toggle Button (Mobile) */}
                <button
                    onClick={toggleDarkMode}
                    className="w-full p-2 rounded bg-custom-blue text-[#004E89]"
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    );
};

export default Navbar;

