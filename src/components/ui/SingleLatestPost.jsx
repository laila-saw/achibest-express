import axios from 'axios'
import Moment from 'moment'
import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

const SingleLatestPost = ({suggestedPosts,title,date,featuredMedia,isLoading,slug,setCurrentPost}) => {
    const [imgUrls, setImgUrls] = useState('');
    const baseUrl=process.env.REACT_APP_BASE_URL;
    const [newurrentPost,setNewurrentPost]=useState([])
    useEffect(() => {
        const fetchData= async ()=>{
             try {
                const currentPost=await axios.get(baseUrl+'/posts?slug='+slug);
            const response = await axios.get(baseUrl+'/media/'+featuredMedia);
           setImgUrls(response.data.media_details.sizes.full.source_url)
           setNewurrentPost(currentPost.data)
           } catch (error) {
               console.log(error)
           }
        }

        fetchData()   
  }, [isLoading,suggestedPosts])
  const navigate=useNavigate()
    return (
        <div className="postItem  flex gap-[15px] items-center">
            <div className="imgContainer overflow-hidden w-[70px] h-[70px] border-[2px] border-verte rounded-[50%] "><img className='w-full h-full object-cover rounded-[50%]' src={imgUrls} alt="" /></div>
            <div className="postInfo w-[calc(100%-70px)] ">
                <div
                className='cursor-pointer'
                 onClick={()=>{
                    navigate("/posts/"+slug)
                    setCurrentPost(newurrentPost)
                }} 
                 >
                    <h4 className="postTitle font-medium hover:text-orange">{title}</h4>
                </div>
                <small className="postDate opacity-80">{Moment(date).format('MMM DD, yyyy')}</small>
            </div>
        </div>
    )
}

export default SingleLatestPost