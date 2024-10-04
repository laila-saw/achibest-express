import React from 'react'
import ArrowLeft from '../icon svgs/ArrowLeft'
import brandImg1 from "../../assets/Brands/brand-12.png"
import brandImg2 from "../../assets/Brands/brand-11.png"
import brandImg3 from "../../assets/Brands/brand-10.png"
import brandImg4 from "../../assets/Brands/brand-09.png"
import brandImg5 from "../../assets/Brands/brand-08.png"
import brandImg6 from "../../assets/Brands/brand-14.png"
import brandImg7 from "../../assets/Brands/brand-13.png"
import brandImg8 from "../../assets/Brands/brand-01.png"
import brandImg9 from "../../assets/Brands/brand-04.png"
import brandImg10 from "../../assets/Brands/brand-03.png"
import brandImg11 from "../../assets/Brands/brand-02.png"
import brandImg12 from "../../assets/Brands/brand-05.png"

const Clients = () => {
    return (
        <div className="section py-[100px] bg-lightGray">
            <div className="sectionContainer px-6 sm:px-[30px]   md:px-[50px] xl:px-[100px] 2xl:px-[150px] flex  lg:flex-row-reverse flex-col gap-[53px] ">
                <div className="sectionLeft text-right  flex flex-col justify-between items-end lg:w-[calc(100%/5-32px)] gap-10">
                    <div className="sectionTitle flex flex-col items-end  ">Who <br /> is trusting us  <span>
                        <ArrowLeft />
                    </span></div>
                </div>
                <div className="sectionRight flex flex-col justify-around lg:w-[calc(100%/5*4)]  gap-[37px]">
                    <div className="brands flex flex-col lg:flex-row-reverse lg:items-center gap-5 text-right lg:gap-8">
                        <div className="boxTitle-2 lg:w-[25%] mb-0  text-orange">main qsrs</div>
                        <div className="brandsList clients flex-wrap gap-5 flex flex-row-reverse items-center w-full lg:w-[75%] ">
                            <div className="brandItem w-max h-max flex items-center justify-center">
                                <img className='w-[61px] h-[61px] ' src={brandImg1} alt="" />
                            </div>
                            <div className="brandItem w-max h-max flex items-center justify-center">
                                <img className='w-[61px] h-[61px] ' src={brandImg2} alt="" />
                            </div>
                            <div className="brandItem w-max h-max flex items-center justify-center">
                                <img className='w-[61px] h-[61px] ' src={brandImg3}alt="" />
                            </div>
                            <div className="brandItem w-max h-max flex items-center justify-center">
                                <img className='w-[61px] h-[61px] ' src={brandImg4} alt="" />
                            </div>
                            <div className="brandItem w-max h-max flex items-center justify-center">
                                <img className='w-[61px] h-[61px] ' src={brandImg5}alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="brands flex flex-col lg:flex-row-reverse lg:items-center gap-5 text-right lg:gap-8">
                        <div className="boxTitle-2 lg:w-[25%] mb-0  text-orange">supermarkets</div>
                        <div className="brandsList flex-wrap gap-5 flex items-center flex-row-reverse w-full lg:w-[75%]">
                            <div className="brandItem w-max h-max flex items-center justify-center">
                                <img className='w-[61px] h-[61px] ' src={brandImg6}alt="" />
                            </div>
                            <div className="brandItem w-max h-max flex items-center justify-center">
                                <img className='w-[61px] h-[61px] ' src={brandImg7}alt="" />
                            </div>
                            <div className="brandItem w-max h-max flex items-center justify-center">
                                <img className='w-[139px] h-[61px] ' src={brandImg8}alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="brands flex flex-col lg:flex-row-reverse lg:items-center gap-5 text-right lg:gap-8">
                        <div className="boxTitle-2 lg:w-[25%] mb-0  text-orange">hotel chains</div>
                        <div className="brandsList flex-wrap gap-5 flex-row-reverse flex items-center w-full lg:w-[75%]">
                            <div className="brandItem w-max h-max flex items-center justify-center">
                                <img className='w-[139px] h-[61px] ' src={brandImg9}alt="" />
                            </div>
                            <div className="brandItem w-max h-max flex items-center justify-center">
                                <img className='w-[139px] h-[61px] ' src={brandImg10} alt="" />
                            </div>
                            <div className="brandItem w-max h-max flex items-center justify-center">
                                <img className='w-[139px] h-[61px] ' src={brandImg11} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="brands flex flex-col lg:flex-row-reverse lg:items-center gap-5 text-right lg:gap-8">
                        <div className="boxTitle-2 lg:w-[25%] mb-0  text-orange">catering</div>
                        <div className="brandsList flex-wrap gap-5 flex-row-reverse flex items-center w-full lg:w-[75%]">
                            <div className="brandItem w-max h-max flex items-center justify-center">
                                <img className='w-[139px] h-[61px] ' src={brandImg12} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Clients