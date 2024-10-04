import React from 'react'
import ArrowRight from '../icon svgs/ArrowRight'
import brandImg1 from '../../assets/Brands/brand-17.png'
import brandImg2 from '../../assets/Brands/brand-18.png'
import brandImg3 from '../../assets/Brands/brand-19.png'
import brandImg7 from '../../assets/Brands/brand-15.png'
import brandImg4 from '../../assets/Brands/brand-06.png'
import brandImg5 from '../../assets/Brands/brand-16.png'
import brandImg6 from '../../assets/Brands/brand-07.png'


const Brands = () => {
    return (
        <div className="section py-[100px] ">
            <div className="sectionContainer px-6 sm:px-[30px]   md:px-[50px] xl:px-[100px] 2xl:px-[150px]  flex  lg:flex-row flex-col gap-[53px] items-start">
                <div className="sectionLeft text-left  flex flex-col justify-between items-start lg:w-[calc(100%/5-32px)] gap-10">
                    <div className="sectionTitle flex flex-col items-start  ">BRANDS <span>
                        <ArrowRight />
                        </span></div>
                    <p className="text flex flex-col justify-between">
                        In order to grant permanent
                        availability, we distribute
                        partners’ brands as well
                        as owned brands.
                    </p>

                </div>
                <div className="sectionRight flex flex-col justify-around lg:w-[calc(100%/5*4)]  gap-[37px]">
                    <div className="brands flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
                        <div className="boxTitle-2 mb-0  text-orange">our <br /> brands</div>
                        <div className="brandsList gap-5 flex flex-wrap items-center w-full lg:w-[75%] justify-around">
                            <div className="brandItem">
                                <img className='w-[100px]' src={brandImg1} alt="" />
                            </div>
                            <div className="brandItem">
                                <img className='w-[100px]' src={brandImg2} alt="" />
                            </div>
                            <div className="brandItem">
                                <img className='w-[100px]' src={brandImg3} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="brands flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
                        <div className="boxTitle-2 mb-0  text-orange">Partner's <br /> brands</div>
                        <div className="brandsList gap-5 flex flex-wrap  items-center w-full lg:w-[75%] justify-around">
                            <div className="brandItem">
                                <img className='w-[100px] h-[62px] ' src={brandImg7} alt="" />
                            </div>
                            <div className="brandItem">
                                <img className='w-[131px] h-[62px] ' src={brandImg4}alt="" />
                            </div>
                            <div className="brandItem">
                                <img className='w-[100px] h-[62px] ' src={brandImg5} alt="" />
                            </div>
                            <div className="brandItem">
                                <img className='w-[100px] h-[62px] ' src={brandImg6} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Brands