import React from 'react'

const Map = ({fill,className}) => {
    return (
        <svg className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 64 64" space="preserve">
            <g>
                <path style={{
                    fill: "none",
                    stroke: fill,
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                }} d="M45.24,34.97L32,48.21L18.76,34.97c-7.31-7.31-7.31-19.17,0-26.48s19.17-7.31,26.48,0S52.56,27.66,45.24,34.97
		z"/>
                <circle style={{
                    fill: "none",
                    stroke: fill,
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                }} cx="32" cy="21.73" r="9.65" />
                <polyline style={{
                    fill: "none",
                    stroke: fill,
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                }} points="61,61 46.5,54.15 32,61 	" />
                <line style={{
                    fill: "none",
                    stroke: fill,
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                }} x1="53.08" y1="43.92" x2="42.91" y2="37.31" />
                <line style={{
                    fill: "none",
                    stroke: fill,
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                }} x1="42.65" y1="37.56" x2="46.5" y2="54.15" />
                <line style={{
                    fill: "none",
                    stroke: fill,
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                }} x1="32" y1="48.21" x2="32" y2="61" />
                <line style={{
                    fill: "none",
                    stroke: fill,
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                }} x1="53.08" y1="43.92" x2="61" y2="61" />
                <polyline style={{
                    fill: "none",
                    stroke: fill,
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                }} points="3,61 17.5,54.15 32,61 	" />
                <line style={{
                    fill: "none",
                    stroke: fill,
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                }} x1="10.92" y1="43.92" x2="21.09" y2="37.31" />
                <line style={{
                    fill: "none",
                    stroke: fill,
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                }} x1="21.35" y1="37.56" x2="17.5" y2="54.15" />
                <line style={{
                    fill: "none",
                    stroke: fill,
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                }} x1="10.92" y1="43.92" x2="3" y2="61" />
            </g>
        </svg>
    )
}

export default Map