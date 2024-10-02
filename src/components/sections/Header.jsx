import React from 'react'
import {menu} from "../../data/Data"
import { Link } from 'react-router-dom'
import DownloadCatalogue from '../ui/DownloadCatalogue'
import ToggleDarkMode from '../ui/ToggleDarkMode'

const Header = () => {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER
    
  return (
    <header className='header flex items-center justify-center z-10'>
        <div className="headerWrapper flex items-center justify-between">
            <div className="logo"><img className='w-[169px] xl:w-[179px]'  src={PF+"../assets/logos/Achibest-Express-Logo.svg"} alt="" /></div>
            <ul className="nav">
            {menu.map((item,i)=>(
                <li 
                key={i}
                className="navItem lg:mx-2 xl:mr-[30px] xl:ml-0  ">
                    <Link className=' transition-all hover:text-jaune' to={item.path} >
                    {item.title}
                    </Link>
                </li>
            ))}
            </ul>
            <div className='actions d-flex '>
                <DownloadCatalogue/>
                <ToggleDarkMode />
                {/* <div className="searchIcon">
                <img className='w-8' src="../assets/icons - svg/Blanc/24 px/Achibest-icon-Search.svg" alt="" />
                </div> */}
            </div>
        </div>
    </header>
    
  )
}

export default Header