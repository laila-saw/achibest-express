import React from 'react'

const Banner = ({title,bgImg}) => {
  return (
    <div className='banner  w-full h-[55vh]'>
        <div className="bannerWrapper sm:pl-[50px] lg:pl-[calc(76px+75px)] w-full h-full relative flex items-center" style={{backgroundImage:bgImg, backgroundSize:"cover" }}>
            <div className="bannerContent ">
                <h1 className='bannerTitle  lg:text-6xl text-[30px] text-white font-light lg:leading-[55px] leading-[35px] absolute bottom-10 p-[30px] ml-[30px] '>
                    {title}
                </h1>
            </div>
        </div>
      
    </div>
  )
}

export default Banner