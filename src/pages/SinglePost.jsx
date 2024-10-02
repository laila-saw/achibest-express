import React from 'react'
import Banner from '../components/sections/Banner'
import BlogFeed from '../components/sections/BlogFeed';
const pf=process.env.REACT_APP_PUBLIC_FOLDER;
const SinglePost = () => {
  return (
    <div>
        <Banner title={"Welcome to the Achibest blog!"} bgImg={`url("../assets/imgs/Achibest - blog background.png")`} />
        <BlogFeed/>
    </div>
  )
}

export default SinglePost