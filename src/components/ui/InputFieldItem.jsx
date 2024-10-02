import React from 'react'
import AlertError from './AlertError'

const InputFieldItem = ({ custumStyle, label, type, handleOnblur, focused,placeholder,name,handleOnchange,value,isRequired,errorItem}) => {
    return (
        <div className={"fieldItem flex flex-col " + custumStyle}>
            <label
                className=' text-base font-semibold' >{label}</label>
            <input
                required={isRequired}
                onBlur={handleOnblur}
                focused={focused}
                name={name}
                onChange={handleOnchange}
                value={value}
                type={type}
                placeholder={placeholder}
                className='p-3 border-[1px] rounded-[5px] inputFieldItem font-normal' />
                <AlertError content={errorItem} />
        </div>
    )
}

export default InputFieldItem