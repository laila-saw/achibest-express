import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../context'
import { findUsData } from '../../data/Data'
import ArrowRight from '../icon svgs/ArrowRight'
import Map from '../icon svgs/Map'
import Phone from '../icon svgs/Phone'
import Wearhouse from '../icon svgs/Wearhouse'
import ButtonLink from '../ui/ButtonLink'
import storageImg from "../../assets/imgs/img03.png"

const StorageSection = () => {
    const theme = useContext(ThemeContext)
    const darkMode=theme.state.darkMode
    return (
        <div className="section py-[100px] ">
            <div className="sectionContainer px-6 sm:px-[30px]   md:px-[50px] xl:px-[100px] 2xl:px-[150px] flex  flex-col gap-[30px]">
                <div className="sectionTop text-left  flex flex-col lg:flex-row  justify-between items-center gap-[20px] ">
                    <div className="sectionTitle flex flex-col items-start w-full lg:w-6/12 gap-1  ">DISCOVER OUR <br />  STORAGE <span>
                        <ArrowRight />
                        </span></div>
                    <p className="text flex flex-col  lg:w-6/12 text-[18px] ">
                        Here at Achibest, we take the liberty of storing our items in
                        the perfect condition possible. All this dedication for the
                        built-up of neat health-based experience.
                    </p>

                </div>
                <div className="sectionBottom">
                    <div className="storageList flex flex-wrap  gap-6 sm:gap-4 lg:gap-6 justify-between lg:justify-start">
                        {
                            findUsData.map((item,i)=>(
                                <div key={i} className="storageItem w-full md:w-[calc(100%/2-16px)] lg:w-[calc(100%/3-24px)] overflow-hidden bg-lightGray rounded-lg pb-7 flex flex-col gap-2 lg:gap-4">
                            <div className="storageImgCon overflow-hidden w-full h-[212px] lg:h-[268px] rounded-lg rounded-b-[0]">
                                <img className=' w-full h-full rounded-lg rounded-b-[0] object-cover'  src={storageImg} alt="" />
                            </div>
                            <div className="storageInfoList  px-3 lg:px-7">
                            <div className="storageInfoItem flex items-center gap-1 border-b-[1px] border-b-[#d3d3d3] py-2 ">
                            <Wearhouse fill={darkMode ? "white" :"black"} className='storageIcon w-[30px] h-[30px] mr-4 opacity-60 '/>
                            {/* <img src="../assets/icons - png/icons8-stack-50 (1).png" className='w-[30px] h-[30px] mr-4 opacity-60 ' alt="" />  */}
                            <span className='font-medium text-[15px]'>{item.storageTitle}</span>
                            </div>
                            <div className="storageInfoItem flex items-center gap-1 border-b-[1px] border-b-[#d3d3d3] py-2 ">
                                <Phone fill={darkMode ? "white" :"black"} className='storageIcon w-[30px] h-[30px] mr-4 opacity-60 '/>
                            {/* <img src="../assets/icons - png/icons8-phone-50 (1).png" className='w-[30px] h-[30px] mr-4 opacity-60 ' alt="" /> */}
                            <span className='font-medium text-[15px]'>
                                {
                                item.phoneNumers.map((phone,j)=>(
                                    <div key={j} className="">
                                        {
                                            phone
                                        }
                                    </div>
                                ))
                            }
                            
                            </span>
                            
                            </div>
                            <div className="storageInfoItem flex items-center gap-1 py-2">
                                <Map fill={darkMode ? "white" :"black"} className='storageIcon w-[30px] h-[30px] mr-4 opacity-60 ' />
                            {/* <img src="../assets/icons - png/icons8-address-50 (1).png" className='w-[30px] h-[30px] mr-4 opacity-60 ' alt="" /> <span className='font-medium text-[15px]'>{item.adress}</span> */}
                            </div>
                            </div>
                        </div>
                            ))
                        }
                    </div>
                </div>
               <div className="flex justify-end"> <ButtonLink btnContent={"Reserve Now"} link={"/request?source=Reservation"} width={"w-ful sm:w-[calc(100%/2-16px)] lg:w-[calc(100%/3-24px)]"} rounded={"rounded-lg"} /></div>

            </div>
        </div>
    )
}

export default StorageSection