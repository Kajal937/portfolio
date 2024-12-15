import React from 'react';

const Home = () => {
  return (
    <>
      <div className="max-w-[1280px] w-full mx-auto min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Circular Image */}
          <div className="w-40 h-40 mb-6">
            <img
              src="https://imgs.search.brave.com/IPLBo32enHvSGaQg21oRB_QKg_hOajNfOjJXUtyEDiU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/Ni8xMi8xOS8zNS9k/YWlzeS0zNDcxMjg2/XzY0MC5qcGc"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h1 className="text-2xl font- mb-[8px]">Hi,I'm a Kajal.</h1>
          <span className="text-4xl font-bold mb-[8px]" >React Developer.</span>
          <p className="text-lg mb-[20px]">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
         <a href='https://drive.google.com/file/d/1M8orn5pHPawfeLa2sC3waHcDW6ChjXam/view?usp=sharing' className='bg-[#333333] text-white px-[20px] py-[9px] rounded-full text-[17px] font-normal' >Download CV</a>
          
        </div>
      </div>
    </>
  );
};

export default Home;
