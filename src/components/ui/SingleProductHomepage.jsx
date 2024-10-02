import React from 'react'
import { Link } from 'react-router-dom'

const SingleProductHomepage = ({title,img,path,isInversed}) => {
    return (
        <Link to={path} className={isInversed ? "productItem flex flex-col-reverse" : "productItem flex flex-col"}>
            <div className="boxImg rounded-lg w-[223px] lg:w-[260px]  h-[367px] overflow-hidden "><img src={img} alt="" className=" object-cover strategyImg w-full h-full" /></div>
            <div className="boxText py-5 ">
                <div className="boxTitle text-center text-orange">{title}</div>
            </div>
        </Link>
    )
}

export default SingleProductHomepage