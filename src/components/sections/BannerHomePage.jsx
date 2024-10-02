import React, {  useState } from 'react'

const BannerHomePage = () => {
    const [isPopupVopend,setPopupV]=useState(false)
    if(isPopupVopend){
            document.querySelector("html").style.overflow="hidden"
    }else{
        document.querySelector("html").style.overflow="auto"
    }

  return (
    <div className='banner bannerHomePage pl-[75px] w-full h-[calc(100vh+76px)]'>
        <div className="bannerWrapper pl-6 sm:pl-[85px]  w-full h-full relative flex items-center" style={{backgroundImage:'url("../assets/achibestBg.png")', backgroundSize:"cover" }}>
            <div className="bannerContent">
                <p className='bannerDesc w-6/12 text-5xl text-white font-light lg:leading-[55px] leading-[35px]'>
                    Over 80 years of Passion & Professionalism in Food business
                </p>
                <div className="videoBtn flex items-center gap-2 absolute bottom-[100px]">
                    <div className="cursor-pointer videoControllerBtn  border-orange" onClick={()=>setPopupV(true)}><img className='videoControllerIcon bg-orange' src="../assets/icons - svg/Blanc/24 px/Achibest-icon-Play.svg" alt="" /></div>
                    <div className="videoText text-white flex flex-col">
                        <span className='text tracking-[1px] text-xl capitalize leading-[18px] lg:leading-6'>watch</span>
                        <span className='text tracking-[1px] text-xl capitalize leading-[18px] lg:leading-6'>video</span>
                        <span className='duration font-light text-xs'>02:35</span>
                    </div>
                </div>
            </div>
        </div>
       {
       isPopupVopend &&
         <div className="popupbackground fixed top-0 left-0 z-30 bg-[rgba(0,0,0,.8)] w-full h-full">
       <span onClick={()=>setPopupV(false)} className='absolute top-6 right-5 cursor-pointer'><img className="w-10 h-10  " src="../assets/icons - svg/Blanc/24 px/Achibest-icon-Close.svg" alt="" /></span>
       <video className='lg:w-[750px] w-95% ' src="../assets/videos/Lunch - 2339.mp4" autoPlay controls></video>
        </div>
       }
    </div>
  )
}

export default BannerHomePage