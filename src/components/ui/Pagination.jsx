import React from 'react'
import LeftArrow from "../../assets/icons - svg/Blanc/24 px/Achibest-icon-Left-Arrow.svg"
import RightArrow from "../../assets/icons - svg/Blanc/24 px/Achibest-icon-Right-Arrow.svg"
const Pagination = ({currentPage,showItems,setCurrentPage,numberOfPage,sectionToscroll}) => {
    function prevClick() {
      if(currentPage > 1){
         setCurrentPage(currentPage - 1);
        sectionToscroll.current.scrollIntoView();
      }
        showItems && (showItems())
        
      }
      function nextClick() {
        if(currentPage <  numberOfPage){
          setCurrentPage(currentPage + 1)
        sectionToscroll.current.scrollIntoView();
        }
        
        showItems && (showItems())
        
      }
  return (
    <div className="pagination flex lg:justify-end justify-center items-center px-[30px] lg:px-0 gap-[10px] mt-5">
            <div className="pageNumber bg-verte flex items-center justify-center p-2 w-[50px] h-[50px] text-white text-[18px] font-[300] ">{currentPage}</div>
            <div 
            style={{backgroundColor:currentPage <= 1 && "#74b787",cursor:currentPage <= 1 && "not-allowed"}}
            onClick={prevClick}
            className="prev bg-verte cursor-pointer flex items-center justify-center p-2 w-[50px] h-[50px]">
              <img className='w-[30px] ' src={LeftArrow} alt="" />
            </div>
            <div 
            style={{backgroundColor:currentPage >= numberOfPage  && "#74b787",cursor:currentPage >= numberOfPage  && "not-allowed"}}
            onClick={nextClick}
            className="next bg-verte cursor-pointer flex items-center justify-center p-2 w-[50px] h-[50px]">
            <img className='w-[30px] ' src={RightArrow} alt="" />
            </div>
          </div>
  )
}

export default Pagination