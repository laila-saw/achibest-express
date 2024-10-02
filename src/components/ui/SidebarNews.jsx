import React, { useState } from 'react'
import { news } from '../../data/Data'
const SidebarNews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost)
  let numberOfPage = Math.ceil(news.length / postsPerPage)
  function prevClick() {
    currentPage > 1 &&
      setCurrentPage(currentPage - 1);
  }
  function nextClick() {
    currentPage < numberOfPage &&
      setCurrentPage(currentPage + 1)
  }
  return (
    <div className='w-[320px]  bg-gray mt-[-76px] sidebarNews  hidden lg:block z-[40]'>
      <div className="sidebarNewsTop bg-verte py-5 px-6 flex items-center justify-between">
        <div className="slideNumber text-white font-light">{currentPage}/{numberOfPage}</div>
        <div className="slideController flex items-center gap-8 ">
          <img
            style={{ opacity: currentPage <= 1 && ".4", cursor: currentPage <= 1 && "not-allowed" }}
            onClick={prevClick}
            className='w-[35px] cursor-pointer' src="../assets/icons - svg/Blanc/24 px/Achibest-icon-Left-Arrow.svg"
            alt="" />
          <img
            style={{ opacity: currentPage >= numberOfPage && ".4", cursor: currentPage >= numberOfPage && "not-allowed" }}
            onClick={nextClick}
            className='w-[35px] cursor-pointer' src="../assets/icons - svg/Blanc/24 px/Achibest-icon-Right-Arrow.svg"
            alt="" />
        </div>
      </div>
      <div className="newsContent text-white py-[100px] px-6">
        <div className="sectionTitle mb-10">main news</div>
        <div 
        className="newsList flex flex-col gap-4">
          {
             currentPosts.map((item, i) => (
               <div key={i} className="newsItem flex flex-col gap-1">
                 <div className="newsDate font-light opacity-6 text-xs opacity-50 capitalize">{item.date}</div>
                 <a href={item.link} target="_blank" rel="noopener noreferrer" className="newsShortText">
                   <h3 className="title text-[14px] font-[400]">{item.title}</h3>
                   <p className="desc text-[14px] font-[200] opacity-80">{item.content.substring(0,100)+"..."}</p>
                 </a>
               </div>
             ))
           }
        </div>
      </div>
    </div>


  )
}

export default SidebarNews