import React from 'react'
import useTheme from '../hooks/useTheme';

const NavBar = () => {
    const {theme}=useTheme();
  return (
    <div className={`flex justify-between  h-[50px] items-center  px-8  font-bold  ${theme==="light"?"bg-black  text-white/80 ":"bg-white text-black/80"}    `}>
        <div className='flex gap-4'>
            
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact us</h1>
        <h1>Products</h1>
        </div>
        <div>
            <input  className={` border px-5 py-1 rounded ${theme==="light"?" text-black border-white bg-white/80":"text-white border-black bg-black/80"}`} type="text" placeholder='search' />
        </div>
        
    </div>
  )
}

export default NavBar