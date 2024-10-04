import React, { useEffect, useState } from 'react'
import Menu from './ui/Menu'
import { icons } from '../data/Data'
import MenuIcon from './MenuSvg/MenuIcon'
import { useContext } from 'react'
import { ThemeContext } from '../context'
import iconClose from "../assets/icons - svg/Verte/24 px/Achibest-icon-Close.svg"
const Sidebar = ({isHomePage}) => {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  const [menuOpened, setMenuOpened] = useState(false)
  const darkMode=useContext(ThemeContext)
  useEffect(() => {
    if(menuOpened){
      document.querySelector("html").style.overflow="hidden"
  }else{
  document.querySelector("html").style.overflow="auto"
  }
  }, [menuOpened,darkMode])
  
  function handlClick() {
    setMenuOpened(!menuOpened)
  }
  return (
    <div className={!isHomePage ? "nonHomepage" : ""} >
      <div className={menuOpened 
        ? 'menuOpened sidebar z-30' 
        : 'sidebar z-30'
        } style={{backgroundColor:(!isHomePage && !menuOpened) && "transparent",height:(!isHomePage && !menuOpened) && "max-content"}} >
        <div className="sidebarWrapp pb-[30px] lg:pb-[100px] flex flex-col items-center justify-between bg-[#f3f0f0]  lg:bg-transparent">
          <div onClick={handlClick} className={isHomePage
            ? "hamburg cursor-pointer"
            : "hamburg cursor-pointer notHomePage"
          }>
            {
              menuOpened
                ? <img className="w-10 h-10 " src={iconClose} alt="" />
                : <MenuIcon  />
            }
          </div>
          {
            (isHomePage || menuOpened) && <div className="socialMediaIcons hidden lg:flex flex-col items-center gap-3">
            {
              icons.map((icon, i) => (
                <a key={i} href={icon.link} className="socialMediaIcon">
                  {
                    icon.icon
                  }
                </a>
              ))
            }
          </div>
          }
          
        </div>



      </div>
      {
        menuOpened && <Menu setMenuOpened={setMenuOpened} />
      }
    </div>


  )
}

export default Sidebar