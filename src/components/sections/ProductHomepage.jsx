import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { productHomepage } from '../../data/Data'
import ArrowRight from '../icon svgs/ArrowRight'
import ReadMore from '../ui/ReadMore'
import SingleProductHomepage from '../ui/SingleProductHomepage'

const ProductHomepage = () => {
    
    return (
        <div className="section py-[100px] ">
            <div className="sectionContainer px-6 sm:px-[30px]   md:px-[50px] xl:px-[100px] 2xl:px-[150px] flex  lg:flex-row flex-col gap-[53px]">
                <div className="sectionLeft text-left  flex flex-col justify-between items-start lg:w-[calc(100%/5-32px)]">
                    <div className="sectionTitle flex flex-col items-start  ">our <br /> products <span>
                        {/* <img src="../assets/icons - svg/Noir/24 px/Achibest-icon-Right-Arrow.svg" alt="" className="w-10" /> */}
                        <ArrowRight />
                        </span></div>
                    <p className="text flex flex-col ">
                        We offer a wide range
                        of best quality products
                        covering all kinds of
                        World’s Cuisine.
                        <ReadMore contentMore={"see more product"} link="./products" />
                    </p>

                </div>
                <div className="sectionRight  lg:w-[calc(100%/5*4)] overflow-hidden overflow-x-auto py-6 flex md:justify-center">
                    <div className="w-max lg:w-full flex  justify-center lg:justify-start xl:justify-center gap-6 ">
                       {
                        productHomepage.map((product,i)=>(
                            <SingleProductHomepage key={i} title={product.title} img={product.img} path={"/products?category="+product.link} isInversed={i % 2 !== 0 && true} />
                        ))
                       }
                    </div>


                </div>

            </div>
        </div>
    )
}

export default ProductHomepage