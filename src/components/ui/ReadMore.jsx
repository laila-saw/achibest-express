import React from 'react'

const ReadMore = ({contentMore,link}) => {
    return (
        <a
            href={link}
            className="hover:text-verte transition-all mt-[60px] readMore uppercase underline text-orange text-lg font-normal cursor-pointer">
            {contentMore}
        </a>
    )
}

export default ReadMore