import React from 'react'

const SingleRealisation = ({icon,number,img,desc,isReverse,bgColor}) => {
  return (
    <div className={isReverse 
    ? "realisationItem flex  flex-col-reverse w-full sm:w-[calc(100%/2-20px)] lg:w-[calc(100%/4-20px)] xl:w-[calc(100%/5-20px)] gap-5" 
    : "realisationItem flex  flex-col w-full sm:w-[calc(100%/2-20px)] lg:w-[calc(100%/4-20px)] xl:w-[calc(100%/5-20px)] gap-5"}>
                                <div className={"realisationBox h-[250px] relative flex flex-col text-white p-4 "+bgColor} >
                                    {icon}
                                    <div className="number text-3xl  font-semibold mb-2">{number}</div>
                                    {desc}
                                    <span className={"z-10 triangle "+bgColor}></span>
                                </div>
                                <div className="realisationImg w-full h-[250px] overflow-hidden ">
                                    <img className='w-full h-full' src={img} alt="" />
                                </div>
                            </div>
  )
}

export default SingleRealisation