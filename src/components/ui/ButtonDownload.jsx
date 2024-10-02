import React from 'react'
const ButtonDownload = ({btnIcon,btnContent,isReversed,rounded,link}) => {
  return (
    <a download href={link} className={isReversed
       ? "actionBtn cursor-pointer flex flex-row-reverse items-end justify-center px-4  py-2  gap-2 hover:bg-jaune transition-all font-normal bg-verte w-max text-white capitalize "+rounded
       : "actionBtn cursor-pointer flex flex-row items-end justify-center px-4  py-2  gap-2 hover:bg-jaune transition-all font-normal bg-verte w-max text-white capitalize "+rounded
      }>
        {btnIcon && <div className="btnIcon"><img className="w-5 h-5" src={btnIcon} alt="" /></div>}
        <div className="btnContent">{btnContent}</div>
    </a >
  )
}

export default ButtonDownload