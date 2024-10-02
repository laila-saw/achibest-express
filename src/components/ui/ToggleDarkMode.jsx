import React, { useContext } from 'react'
import { ThemeContext } from '../../context'
import Moon from '../icon svgs/Moon'
import Sun from '../icon svgs/Sun'

const ToggleDarkMode = () => {
  const theme=useContext(ThemeContext)
  const darkeMode=theme.state.darkMode
  return (
    <div className='toggleDarkMode'>
        <div className="toggleDarkModeCon flex relative justify-around items-center w-[60px] h-[30px] rounded-[25px] border-[2px] border-l-[1px] border-r-[1px] border-verte overflow-hidden ">
            <Sun fill={"#ffb700"} custumStyle={"IconLight w-[20px] h-[20px] z-[10] cursor-pointer"} onClick={()=>{
              theme.dispatch({type:"LIGHT"})
            }} />
            <Moon fill={"#ffb700"} custumStyle={"IconDark w-[20px] h-[20px] z-[10] cursor-pointer"} onClick={()=>{
              theme.dispatch({type:"DARK"})
            }} />
            <div  className="btnToggle absolute pointer-events-none w-[30px] h-[30px] rounded-[50%] bg-verte left-0 transition-all "></div>
        </div>
    </div>
  )
}

export default ToggleDarkMode