import React, { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { categories, products } from '../../data/Data'
import Pagination from '../ui/Pagination';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
    const categoryfromurl =searchParams.get("category")
    console.log("categoryfromurl",categoryfromurl)
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurentCategory] = useState("all");
  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  let currentproducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  let numberOfPage = Math.ceil(products.length / productsPerPage)
  const productsSection = useRef(null)
  let array = []
  useEffect(() => {
    if(categoryfromurl!==null){
      productsSection.current.scrollIntoView();
      setCurentCategory(categoryfromurl)
    }else{
      console.log("categoryfromurl is null")
    }
  }, [categoryfromurl])
  
  function showItems() {
    
    for (let i = 0; i < products.length; i++) {
      if (products[i].categories.includes(currentCategory) || currentCategory === "all") {
        array.push(products[i])
      }

    }
    currentproducts = array.slice(indexOfFirstProduct, indexOfLastProduct)

    numberOfPage = Math.ceil(array.length / productsPerPage)
    array = []
  }
  showItems()
  return (
    <div className="section pb-[100px] productPage">
      <div className="section py-[50px]">
        <div className="sectionContainer px-6 sm:px-[30px]   md:px-[50px] xl:px-[100px] 2xl:px-[150px]  ">
          <div className="flex justify-between items-baseline mb-8">
            <div className="titleSection lg:text-[40px] text-[30px] ">Category</div>
            {/* <Link className='lg:text-xl text-base cursor-pointer hover:text-orange transition-all font-[300] text-right ' to="/">Discover <br /> more</Link> */}
          </div>
          <div className="categoriesContainer overflow-hidden overflow-x-auto py-3 ">
            <div className="categoryList flex justify-between items-baseline gap-3 ">
              {
                categories.map((item, i) => (
                  <div
                    onClick={() => { 
                      setCurentCategory(item.title); 
                      showItems(); 
                      setCurrentPage(1); 
                      productsSection.current.scrollIntoView();
                      const url1 = window.location.toString();
                      const sanitizedUrl = url1.substring(0, url1.indexOf('?'));
                      window.history.replaceState({}, document.title, sanitizedUrl);
                    }}
                    key={i}
                    className="categoryItem cursor-pointer  flex flex-col items-center">
                    <div className="categoryImgContainer w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-[50%]  overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-full transition-all hover:scale-[1.2] " />
                    </div>
                    <div className="categorytitle text-center mt-3 text-base xl:text-xl w-[90%] ">{item.title}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div ref={productsSection} className="sectionContainer px-6 sm:px-[30px]   md:px-[50px] xl:px-[100px] 2xl:px-[150px]  ">
        <div className="flex justify-between items-center mb-8">
          <div className="titleSection lg:text-[40px] text-[30px] ">Products</div>
          <div onClick={() => { setCurentCategory("all"); showItems(); setCurrentPage(1) }} className='lg:text-xl text-base cursor-pointer hover:text-orange transition-all font-[300] text-right ' >Clear filter</div>
        </div>
        <div className="productList flex flex-wrap gap-[40px] justify-start">
          {
            currentproducts.map((item, i) => (

              (currentCategory === "all" || item.categories.includes(currentCategory)) &&
              <Link
                to={item.link}
                key={i} 
                className="productItem cursor-pointer w-full md:w-[calc(100%/2-40px)] lg:w-[calc(100%/3-40px)] rounded-md p-[30px]">
                <div className="productImg">
                  <img src={item.img} alt="" />
                </div>
                <div className="productInfo mt-5">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <div className="productTitle text-[15px] font-[600] ">{item.title}</div>
                      <div className="productTitle text-[13px] font-[400]">{item.brand}</div>
                    </div>
                    <div className="productPrice text-verte text-[18px] font-[700]">{item.price}</div>
                  </div>
                </div>
              </Link>

            ))
          }
          {
            currentproducts.length === 0 && <div className='w-full pb-[50px] text-[25px] text-center opacity-70 lg:text-3xl font-light flex items-center justify-center '>No products with this category.</div>
          }
        </div>
        <Pagination currentPage={currentPage} showItems={showItems} setCurrentPage={setCurrentPage} numberOfPage={numberOfPage} sectionToscroll={productsSection} />
      </div>
    </div>
  )
}

export default ProductList