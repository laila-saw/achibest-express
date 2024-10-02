import React from 'react'
import ArrowLeft from '../icon svgs/ArrowLeft'
import ReadMore from '../ui/ReadMore'

const Supplier = () => {
    return (
        <div className="section py-[100px] bg-lightGray">
            <div className="sectionContainer px-6 sm:px-[30px]   md:px-[50px] xl:px-[100px] 2xl:px-[150px] flex  lg:flex-row-reverse flex-col gap-[53px]">
                <div className="sectionLeft text-right  flex flex-col items-end lg:w-[calc(100%/5-32px)] justify-between">
                    <div className="sectionTitle flex flex-col items-end  ">OUR <br /> SUPPLIERS <span>
                        <ArrowLeft />
                        </span></div>
                    <p className="text flex flex-col">
                        We select the best
                        suppliers from different
                        regions of the world to
                        grant the best quality
                        ever.
                        <ReadMore link={"./about"} contentMore={"see more"} />
                    </p>

                </div>
                <div className="sectionRight lg:w-[calc(100%/5*4)] flex  lg:flex-row flex-col">
                    <img src="../assets/imgs/maping.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Supplier