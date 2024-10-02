import React, { useContext } from 'react'
import { ThemeContext } from '../../context'

const ArrowLeft = () => {
    const theme=useContext(ThemeContext)
    const darkMode=theme.state.darkMode
  return (
    <svg fill={darkMode ? "white" : "black"} className='w-10' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 24 24" space="preserve">
<path d="M21,11.25H7.59c1.97-1.42,3.25-3.73,3.25-6.34h-1.5c0,3.49-2.84,6.34-6.34,6.34v1.5c3.49,0,6.34,2.84,6.34,6.34h1.5
	c0-2.6-1.28-4.91-3.25-6.34H21V11.25z"/>
</svg>
  )
}

export default ArrowLeft