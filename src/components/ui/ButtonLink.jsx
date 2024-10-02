import React from 'react'
import { Link } from 'react-router-dom'
const ButtonLink = ({btnIcon,btnContent,isReversed,rounded,link,width}) => {
  return (
    <Link  to={link} className={isReversed
       ? "actionBtn cursor-pointer flex flex-row-reverse items-end justify-center px-4  py-2  gap-2 hover:bg-jaune transition-all font-normal bg-verte  text-white capitalize "+rounded+" "+width
       : "actionBtn cursor-pointer flex flex-row items-end justify-center px-4  py-2  gap-2 hover:bg-jaune transition-all font-normal bg-verte  text-white capitalize "+rounded+" "+width
      }>
        {btnIcon && <div className="btnIcon"><img className="w-5 h-5" src={btnIcon} alt="" /></div>}
        <div className="btnContent">{btnContent}</div>
    </Link >
  )
}

export default ButtonLink