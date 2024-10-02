import React, { useContext } from 'react'
import { ThemeContext } from '../../context'
const ArrowRight = () => {
    const theme=useContext(ThemeContext)
    const darkMode=theme.state.darkMode
  return (
    <svg fill={darkMode ? "white" : "black"} className='w-10'  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 24 24" space="preserve">
<path d="M3,12.75h13.41c-1.97,1.42-3.25,3.73-3.25,6.34h1.5c0-3.5,2.84-6.34,6.34-6.34v-1.5c-3.49,0-6.34-2.84-6.34-6.34h-1.5
	c0,2.6,1.28,4.91,3.25,6.34H3V12.75z"/>
</svg>
  )
}

export default ArrowRight