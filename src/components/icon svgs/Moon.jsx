import React from 'react'

const Moon = ({custumStyle,fill,onClick}) => {
    return (
        <svg onClick={onClick} fill={fill}
            className={custumStyle} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 64 64" space="preserve">
            <path d="M54.09,35.15C52.57,45.92,43.31,54.2,32.12,54.2C19.86,54.2,9.91,44.26,9.91,32c0-11.19,8.29-20.45,19.06-21.97
	c-1.32,2.55-2.06,5.45-2.06,8.52c0,10.3,8.35,18.66,18.66,18.66C48.64,37.21,51.54,36.47,54.09,35.15z"/>
        </svg>
    )
}

export default Moon