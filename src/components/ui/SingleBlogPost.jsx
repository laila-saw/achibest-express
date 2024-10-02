import React, { useEffect } from 'react'
import { useState } from 'react'
import ButtonLink from './ButtonLink'
import axios from 'axios'
import Moment from 'moment';

const SingleBlogPost = ({suggestedPosts,currentPage, feutured, category, date, author, title, desc,setIsLoading,slug }) => {
    const [imgUrls, setImgUrls] = useState('');
    const [rerenderComponent, setrerenderComponent] = useState(0);
    const [wpCategory, setWpCategory] = useState([]);
    const [wpauthor, setWpauthor] = useState('');
    const baseUrl=process.env.REACT_APP_BASE_URL;
    let array=[];
    setTimeout(() => {
        setrerenderComponent(1)
        setIsLoading(true)
    }, 100);
    useEffect(() => {
        const fetchData= async ()=>{
             try {
            const response = await axios.get(baseUrl+'/media/'+feutured);
            for (let i = 0; i < category.length; i++) {
                let res=await axios.get(baseUrl+'/categories/'+category[i])
                let devidor=''
                if(i === category.length-1){
                    devidor=""
                }else{
                    devidor=" | " 
                }
                array.push(res.data.name+devidor)
            }
            setWpCategory(array)
            // const response2 = await axios.get(baseUrl+'/categories/'+category)
            const response3 = await axios.get(baseUrl+'/users/'+author);
           setImgUrls(response.data.media_details.sizes.full.source_url)
        //    setWpCategory(response2.data.name)
           setWpauthor(response3.data.name)
           } catch (error) {
               console.log(error)
           }
        }
        fetchData()   
  }, [currentPage,rerenderComponent,suggestedPosts])
    return (
        <div className="blogPostItem w-ful sm:w-[calc(100%/2-16px)] lg:w-[calc(100%/3-24px)] overflow-hidden bg-lightGray rounded-lg  pb-7 flex flex-col gap-2 lg:gap-4">
            <div>
                <div className="blogPostImgCon overflow-hidden w-full h-[212px] lg:h-[268px] rounded-lg rounded-b-[0] ">
                    <img className=' w-full h-full rounded-lg rounded-b-[0] object-cover' src={imgUrls} alt="" />
                </div>
                <div className="blogPostInfo1  px-3 lg:px-7 pt-2 font-[300]  opacity-80 text-[12px]  sm:text-[13px]">
                    <span className="category">{wpCategory} • </span>
                    <span className="date">{Moment(date).format('MMM DD, yyyy')} • </span>
                    <span className="author">Post by <span className='font-[500] '>{wpauthor}</span></span>
                </div>
            </div>
            <div className="blogPostInfo2  px-3 lg:px-7">
                <h2 className="title font-[600] ">{title}</h2>
                <div
                    className='desc text-[14px]'
                    dangerouslySetInnerHTML={{ __html: desc }}
                />

            </div>
            <div className=" px-3 lg:px-7">
                <ButtonLink width={"w-max"} link={"/posts/"+slug} btnContent={"read more"} rounded="rounded-lg" />
            </div>
        </div>
    )
}

export default SingleBlogPost