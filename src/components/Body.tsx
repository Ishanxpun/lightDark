import React from 'react'
import useTheme from '../hooks/useTheme';
import Light from './Light';
import Dark from './Dark';

const Body = () => {
    const {theme,toggleTheme}=useTheme();
  return (
    <div>  <div className={`w-screen h-[650px] flex flex-col justify-center items-center ${theme==="light"?"bg-white":"bg-black"} `}>
        <h1 className={` font-semibold ${theme==="light"?"text-black":"text-white"}`}>{theme === "light" ? <Light/> :<Dark/> }</h1>
        <button className={`border-2 font-semibold rounded-full hover:scale-110  ${theme==="light"?"border-black hover:shadow-[2px_3px_4px_3px_rgba(0,0,0,0.7)]":"text-white bg-black border-white hover:shadow-[2px_3px_4px_3px_rgba(255,255,255,0.7)]"} `} onClick={toggleTheme}> Toggle Theme  </button>
        

    </div></div>
  )
}

export default Body