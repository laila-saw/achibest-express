import React from 'react'
import Banner from '../components/sections/Banner'
import BlogPosts from '../components/sections/BlogPosts'
import backgroundImg from "../assets/imgs/Achibest - blog background.png"

const Blog = () => {
  return (
    <div>
         <Banner title={"Blog"} bgImg={`url("${backgroundImg}")`} />
         <BlogPosts/>
    </div>
  )
}

export default Blog