import React from 'react'
import useTheme from '../hooks/useTheme'


const Footer = () => {
     const { theme } = useTheme()
  return (
    <footer className={ `flex justify-center items-center  h-[29px]   ${theme==="light"?"bg-black text-white": "bg-white text-black"} `}>
       <h1> &copy;All copyright rights reserved to Ishanx Pun</h1>
    </footer>
  )
}

export default Footer