import React from 'react'
import AlertError from './AlertError'

const TextAreaFieldItem = ({ custumStyle, label, handleOnblur ,focused,errorItem,isRequired,name,handleOnchange,value,placeholder}) => {
    return (
        <div className={"fieldItem flex flex-col " + custumStyle}>
            <div className="reservationFields flex flex-col gap-2 ">
                <label 
                className=' text-base font-semibold' >{label}</label>
                <textarea
                onBlur={handleOnblur}
                focused={focused}
                required={isRequired}
                className='p-3 border-[1px] rounded-[5px] inputFieldItem font-normal h-[156px] resize-none ' 
                name={name} 
                onChange={handleOnchange}
                value={value}
                placeholder={placeholder}
                id=""></textarea>
                <AlertError content={errorItem} />
            </div>
        </div>
    )
}

export default TextAreaFieldItem