import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../icon svgs/Search';
const SearchForm = ({ query, setQuery,data, setSuggestedPosts, suggestedPosts, setNoResult,handleSearch }) => {
    const keys = [
        "title",
        "excerpt",
        "content",
    ]
    
    useEffect(() => {
        setSuggestedPosts(data.filter(
            (post) =>
                keys.some(key =>
                    (post[key].rendered.toLowerCase().includes(query)) || post[key].rendered.includes(query))
        ))
        if (query === "") {
            setSuggestedPosts([])
        }
    }, [query])

    if (query !== "" && suggestedPosts.length === 0) {
        setNoResult(true)
    }

    else {
        setNoResult(false)
    }
    
    return (
        <form className='flex gap-1 w-full border-[1px] rounded-[5px] overflow-hidden p-[2px] ' >
            <input
                id='Search'
                className='p-3 inputSearch font-normal  w-[calc(100%-50px)] '
                placeholder='Search...'
                type="search"
                name=""
                onChange={e => setQuery(e.target.value)}
            />
            <button onClick={(e)=>handleSearch(e)}  className='bg-verte hover:bg-orange transition-all flex items-center justify-center w-[50px] rounded-[5px] '><Search className="w-[24px] h-[24px] fill-white " /> </button>

        </form>
    )
}

export default SearchForm