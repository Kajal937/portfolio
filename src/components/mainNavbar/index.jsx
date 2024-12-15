import React from 'react'

const MainNavbar = () => {
  return (
    <>
      <div className="fixed top-0 l-[300px] h-60px py-0 px-[440px] flex justify-between align-center z-0 border-b border-gray-500">

        <div className="topbar">

          <div className="togle1">
          <p>PORTFOLIO</p>
          </div> 

          <div className="toggle">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>
          </div>

        </div>
      </div>
    </>
  )
}

export default MainNavbar
