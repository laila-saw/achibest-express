import React from 'react'
import {icons, menu, reservationFields, services} from '../../data/Data'
import Icon1 from '../serviceSvgs/Icon1'
import Icon2 from '../serviceSvgs/Icon2'
import Icon3 from '../serviceSvgs/Icon3'
import {Link} from "react-router-dom"
import DownloadCatalogue from './DownloadCatalogue'
import ToggleDarkMode from './ToggleDarkMode'
const Menu = ({setMenuOpened}) => {

    function menuClick(){
        setMenuOpened(false)
    }
    return (
        <div className={"menu overflow-auto fixed p-[30px] lg:px-[100px] lg:w-[calc(100%-75px)] w-full  h-screen top-0  lg:left-[75px] left-0 bg-white z-20 transition-all subSection"} >
            
            <div className="searchIcon absolute right-[30px] lg:right-[100px]">
            <ToggleDarkMode/>
            </div>
            {/* <div className="searchIcon absolute right-[30px] lg:right-[100px]">
                        <img className='w-8' src="../assets/icons - svg/Noir/24 px/Achibest-icon-Search.svg" alt="" />
            </div> */}
            <div className="block lg:hidden">
                
            <div className="title text-center text-2xl font-medium">Menu</div>
            
                <div className="socialMediaIcons socialMediaIconsMb  mt-12  flex justify-center items-center gap-4 opacity-7">
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
            <div className="listMenu my-9 flex flex-col gap-2">
                {
                    menu.map((item,i)=>(
                        <Link onClick={()=>menuClick()} to={item.path} key={i} className="menuItem capitalize text-xl">
                            {item.title}
                        </Link>
                    ))
                }
            </div>
            <div className='w-full flex justify-center mb-9'>
            <DownloadCatalogue/>
            </div>
            </div>
            
            <div className="title text-center lg:text-left text-2xl font-medium">Services</div>
                
            
            <div className="servicesList lg:h-full mt-5 flex items-center justify-center lg:justify-between flex-wrap gap-5 lg:gap-10 ">
                {
                    services.map((service, i) => (
                        <Link
                        onClick={()=>setMenuOpened(false)}
                            to={i!==1 ? "request?source="+reservationFields[4].options[i] : "./storage"}
                            key={i}
                            className="serviceItem bg-lightGray rounded-lg h-[36vh] sm:h-[26vh] lg:h-[36vh]  hover:text-white text-xl justify-between xl:text-2xl flex flex-col cursor-pointer gap-4 lg:gap-10 p-8 lg:text-center transition-all hover:bg-verte w-full sm:w-[calc(100%/2-20px)] lg:w-[calc(100%/3-40px)]">
                            <div className='flex items-center justify-between'>
                                {
                                    i===0 
                                    ? <Icon1 /> 
                                    : i===1 ? <Icon2 /> 
                                    : <Icon3 />
                                }
                                <span>{i < 10 && "0" + ++i}</span>
                            </div>
                            <div className="serviceName  capitalize">{service.title}</div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Menu