import React from 'react'
import CheckIcon from '../checkSvg/CheckIcon'
import ButtonAction from './ButtonAction'
import ButtonLink from './ButtonLink'

const PopupSuccess = ({popupContent,link,redirect,btnAction,onClick}) => {
  return (
        <div className=" popupbackground fixed top-0 left-0 z-30 bg-[rgba(0,0,0,.8)] w-full h-full flex justify-center items-center">
          <div className="popupContainer gap-4 bg-white w-[calc(100%-30px)]  sm:w-[400px] p-8 relative flex items-center justify-center flex-col">
            <div className="overfloz-hidden checkIcon rounded-full flex justify-center items-center absolute top-[-25px] ">
              <CheckIcon/>
            </div>
            <h3 className="thnkMsg text-[26px] font-medium mt-[20px] ">Thank You!</h3>
            <p className="desc font-[20px] text-center opacity-100">
            {popupContent}
            </p>
            {redirect && 
            <ButtonLink btnContent={"Ok"} link={link} width={"w-full"}  rounded="rounded-lg" />}
            {btnAction && 
            <ButtonAction btnContent={"Ok"} onClick={onClick} width={"w-full"}  rounded="rounded-lg" />}
          </div>
        </div>
  )
}

export default PopupSuccess