import React from 'react'
import { postInsta } from '../../data/Data'
import { Link } from 'react-router-dom'
const PostInstagram = () => {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="postInstaContainer overflow-hidden overflow-x-auto bg-lightGray ">
        <div className='postInstagramList flex items-center w-[calc(100%*5)] sm:w-[calc(100%*2)] md:w-[calc(100%*3]  lg:w-auto '>
       {
        postInsta.map((item,i)=>(
        <Link to={item.path} key={i} className="postInstaItem w-full sm:w-[calc(100%/2)] md:w-[calc(100%/3)] lg:w-[calc(100%/5)] h-[240px] relative flex items-center justify-center">
            <div className="postInstaImgCon h-full w-full overflow-hidden">
            <img className='postInstaImg h-full w-full ' src={item.img} alt="" />
            </div>
            <span  className="brdr w-[calc(100%-40px)] h-[calc(100%-40px)] absolute border-[3px] border-[white] "></span>
            <div className="logo absolute h-[34px] flex items-center justify-center top-[6px] p-2 bg-white">
            <img className='w-[95px] ' src={PF+"logos/Achibest-Express-Logo.svg"} alt="" />
            </div>
        </Link>
        ))
       }
    </div>
    </div>
  )
}

export default PostInstagram