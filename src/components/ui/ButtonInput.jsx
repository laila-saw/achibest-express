import React from 'react'
const ButtonInput = ({btnIcon,btnContent,isReversed,rounded,onClick
}) => {
  return (
    <button onClick={onClick} className={isReversed
       ? "actionBtn cursor-pointer flex flex-row-reverse items-end justify-center p-3   gap-2 hover:bg-jaune transition-all font-normal bg-verte text-white capitalize "+rounded
       : "actionBtn cursor-pointer flex flex-row items-end justify-center p-3   gap-2 hover:bg-jaune transition-all font-normal bg-verte text-white capitalize "+rounded
      }>
        {btnIcon && <div className="btnIcon"><img className="w-5 h-5" src={btnIcon} alt="" /></div>}
        <div className="btnContent">{btnContent}</div>
    </button >
  )
}

export default ButtonInput