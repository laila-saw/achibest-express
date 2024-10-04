import React, { useState } from 'react'
import { findUsData } from '../../data/Data'
import ArrowDown from '../arrow/ArrowDown'
import contactImg from "../../assets/imgs/contact - img.png"

const Findus = () => {
    const [dropDownOpened, SetDropDownOpened] = useState(false)
    const [selectedCity, SetSelectedCity] = useState(0)
    const [showContainerMap, SetShowContainerMap] = useState(true)
    function handleSelect(id) {
        SetSelectedCity(id)
    }
    function mapClick() {
        SetShowContainerMap(false)
    }
    document.onclick=(e)=>{
        if(e.target.id !=="selectTop"){
            SetDropDownOpened(false)
        }
      }
    return (
        <div className="section  py-[100px]">
            <div className="sectionContainer px-6 sm:px-[30px]   md:px-[50px] xl:px-[100px] 2xl:px-[150px] ">
                <div className="flex lg:flex-row flex-col-reverse w-full gap-[30px] ">
                    <div className="left w-full lg:w-[calc(100%/3-30px)] ">
                        <h2 className="sectionTitle text-orange mb-8">Find Us</h2>
                        <div className="selectBox w-[calc(100%-30px])  relative   ">
                            <div
                                id="selectTop"
                                onClick={() => {SetDropDownOpened(!dropDownOpened);SetShowContainerMap(true)}}
                                className={ dropDownOpened
                                    ? "selectTop flex justify-between items-center text-[20px] cursor-pointer text-orange hover:text-orange pb-[5px] border-b-[1.5px] border-solid border-black opened"
                                    : "selectTop flex justify-between items-center text-[20px] cursor-pointer hover:text-orange pb-[5px] border-b-[1.5px] border-solid border-black "
                                }>{findUsData[selectedCity].city}<ArrowDown />
                            </div>
                            <div  className={dropDownOpened
                                ? "selectBottom py-1 px-2 absolute opened"
                                : "selectBottom py-1 px-2 absolute "
                            }>
                                <div className="selectList">
                                    {
                                        findUsData.map((item, i) => (
                                            <div
                                                onClick={() => { handleSelect(i); SetDropDownOpened(false) }}
                                                key={i}
                                                className="selectItem border-b-[1px] border-lightGray border-solid p-1 text-[18px] font-[600] last:border-0 hover:bg-orange cursor-pointer hover:text-white transition-all " style={{ borderColor: "lightgrey" }}>{item.city}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="findUsInfo  ">
                            {
                                findUsData.map((item, i) => (
                                    selectedCity === i &&
                                    <div className='mt-10' key={i}>
                                        <h3 className="findUsTitle text-[30px] font-bold  ">Showroom</h3>
                                        <div className="findUsAdress font-[600] lg:w-6/12">
                                            {item.adress}
                                        </div>
                                        <div className="findUsTel my-[10px] font-[600]">
                                            {
                                                item.phoneNumers.map((phone, j) => (
                                                    <div key={j}>
                                                        {phone}
                                                    </div>
                                                ))
                                            }

                                        </div>
                                        <div className="findUsEmail font-[600]">
                                            {item.email}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="right w-full lg:w-[calc(100%/3*2-30px)]">
                        <div className="imgContainer">
                            <img src={contactImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="mapContainer pt-[50px] ">
                    {
                        findUsData.map((item, i) => (
                            (selectedCity === i && item.mapApi!=="") &&
                            <div  key={i} className="w-full relative flex justify-center items-center" >
                                <iframe
                                    title={item.city}
                                    key={i}
                                    className='w-full md:h-[400px] h-[200px] '
                                    src={item.mapApi}
                                    style={{ border: ":0" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                                {
                                    showContainerMap && <div onClick={() => mapClick()} className="cityContainer cursor-pointer absolute top-[50%] left-[50%] w-full h-full  flex justify-center items-center text-[22px] md:text-[26px] lg:text-4xl font-bold " style={{ transform: "translate(-50%,-50%)" }}>
                                        <div className="cityName w-[calc(100%-60px)] h-[calc(100%-60px)] bg-olive flex justify-center items-center ">{item.city}</div>
                                    </div>
                                }
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Findus
