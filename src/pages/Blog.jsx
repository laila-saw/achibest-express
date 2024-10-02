import React from 'react'
import Banner from '../components/sections/Banner'
import BlogPosts from '../components/sections/BlogPosts'

const Blog = () => {
  return (
    <div>
         <Banner title={"Blog"} bgImg={'url("../assets/imgs/Achibest - blog background.png")'} />
         <BlogPosts/>
    </div>
  )
}

export default Blog