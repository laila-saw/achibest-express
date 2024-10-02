import React from 'react'

const Sun = ({custumStyle,fill,onClick}) => {
    return (
        <svg onClick={onClick} fill={fill} className={custumStyle} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 64 64" space="preserve">
            <g>
                <circle cx="32" cy="32" r="18.66" />
                <line style={{
                    fill:"none",
                    stroke:fill,
                    strokeLinejoin:"round",
                    strokeWidth:"4",
                    strokeMiterlimit:"10",
                    strokeLinecap:"round",
                    
                }} x1="3" y1="32" x2="8.23" y2="32" />
                <line style={{
                    fill:"none",
                    stroke:fill,
                    strokeLinejoin:"round",
                    strokeWidth:"4",
                    strokeMiterlimit:"10",
                    strokeLinecap:"round",
                    
                }} x1="11.49" y1="11.49" x2="15.19" y2="15.19" />
                <line style={{
                    fill:"none",
                    stroke:fill,
                    strokeLinejoin:"round",
                    strokeWidth:"4",
                    strokeMiterlimit:"10",
                    strokeLinecap:"round",
                    
                }} x1="32" y1="8.23" x2="32" y2="3" />
                <line style={{
                    fill:"none",
                    stroke:fill,
                    strokeLinejoin:"round",
                    strokeWidth:"4",
                    strokeMiterlimit:"10",
                    strokeLinecap:"round",
                    
                }} x1="52.51" y1="11.49" x2="48.81" y2="15.19" />
                <line style={{
                    fill:"none",
                    stroke:fill,
                    strokeLinejoin:"round",
                    strokeWidth:"4",
                    strokeMiterlimit:"10",
                    strokeLinecap:"round",
                    
                }} x1="61" y1="32" x2="55.77" y2="32" />
                <line style={{
                    fill:"none",
                    stroke:fill,
                    strokeLinejoin:"round",
                    strokeWidth:"4",
                    strokeMiterlimit:"10",
                    strokeLinecap:"round",
                    
                }} x1="48.81" y1="48.81" x2="52.51" y2="52.51" />
                <line style={{
                    fill:"none",
                    stroke:fill,
                    strokeLinejoin:"round",
                    strokeWidth:"4",
                    strokeMiterlimit:"10",
                    strokeLinecap:"round",
                    
                }} x1="32" y1="61" x2="32" y2="55.77" />
                <line style={{
                    fill:"none",
                    stroke:fill,
                    strokeLinejoin:"round",
                    strokeWidth:"4",
                    strokeMiterlimit:"10",
                    strokeLinecap:"round",
                    
                }} x1="11.49" y1="52.51" x2="15.19" y2="48.81" />
            </g>
        </svg>
    )
}

export default Sun