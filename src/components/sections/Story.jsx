import React from 'react'

const Story = () => {
   const dates =[
    1936,
    1960,
    2005,
    "TODAY"
   ]
    return (
        <div className="section lg:pt-0 py-[100px]">
            <div className="sectionContainer px-6 sm:px-[50px] lg:px-[50px] xl:px-[100px] 2xl:px-[150px] flex flex-col">
                <h2 className="sectionTitle mb-5   flex flex-col lg:w-[25%] w-full lg:translate-y-[200px] /">
                            OVER 80 YEARS OF PASSION
                            & PROFESSIONALISM IN
                            FOOD BUSINESS
                        </h2>
                <div className="sectionTop flex lg:flex-row-reverse flex-col gap-[53px] items-center justify-end">
                    
                    <div className=" sectionLeft hidden  lg:flex flex-col lg:w-[calc(100%/2-32px)] ">
                        
                        <div className="imgContainer">
                            <img src="../assets/imgs/Achibest Stor - background.png" alt="" />
                        </div>

                    </div>
                    <div className="sectionRight lg:w-[calc(100%/2-32px)] ">
                        <div className="desc lg:mt-[200px] ">
                            <p>The Achibest food express is a family-run business, established in 1936. We are passionate about providing high-quality food-related products with our customer's needs in mind. We strive to satisfy our customers in all aspects of their lives by providing quality food and services.</p>
                            <div className="lg:hidden imgContainer mt-5">
                            <img src="../assets/imgs/Achibest Stor - background.png" alt="" />
                            </div>
                            <p className='my-5'>We take pride in our reputation as a reliable and trustworthy supplier who delivers items directly to your door. Our strong passion for food, combined with extensive knowledge of food processing, means that our products stand out from the crowd.</p>
                            <p>With over eight (8) decades of expertise, we keep providing superior quality products and excellent service. Welcome to the Achibest food express! Here we believe that food is the most important element in people's lives, and we are committed to bringing you the best.</p>
                        </div>

                    </div>
                </div>
                <div className="sectionCenter flex gap-[30px] w-full flex-wrap lg:flex-row my-[50px] ">
                    <div className="sectionCenterItem lg:w-[calc(100%/3-30px)] ">
                        <div className="boxText ">
                            <h3 className="boxTitle text-orange">launch</h3>
                            <p className="desc">
                                <span className='keyWords'> Mr. Mohamed Achibane</span> started trading
                                in <span className='keyWords'> Food</span> Business in <span className='keyWords'> 1936</span> <br className='mb-4' />
                            </p>
                            <p className="desc">
                                He located his business <span className='keyWords'> in the trading
                                    center of Casablanca (Derb Omar Area)</span>
                            </p>
                        </div>
                    </div>
                    <div className="sectionCenterItem md:w-[calc(100%/2-30px)] lg:w-[calc(100%/3-30px)] ">
                        <div className="boxText">
                            <h3 className="boxTitle text-orange">modernization</h3>
                            <p className="desc">
                                Following the independence of <span className='keyWords'> Morocco</span>,
                                the government launched a series of
                                development plans to modernize the
                                economy.</p>
                            <p className="desc">
                                <span className='keyWords'> Mr. Abdelouahed Achibane</span> took this
                                opportunity to develop more the
                                business launched by his <span className='keyWords'> grand-father.</span>
                            </p>
                        </div>
                    </div>
                    <div className="sectionCenterItem md:w-[calc(100%/2-30px)] lg:w-[calc(100%/3-30px)] ">
                        <div className="boxText">
                            <h3 className="boxTitle text-orange">expansion</h3>
                            <p className="desc">
                                <span className='keyWords'> In 2005, Mr. Ali Achibane,</span> launched
                                <span className='keyWords'> ACHIBEST FOOD SARL</span> company, located
                                in Casablanca, with a capital of <span className='keyWords'> 5.000.000-
                                    MAD.</span></p>
                            <p className="desc">
                                <span className='keyWords'> ACHIBEST FOOD SARL</span> is a full service
                                distributor of Food & related items
                                to Food service operators.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sectionBottom  storyTimeLine relative">
                    <div className="timeLine absolute lg:w-[calc(100%-92px)] w-[calc(100%-28px)] left-0 h-[1px] bg-orange "></div>
                  <div className="dateList flex justify-between  mt-10 w-full">
                  {
                    dates.map((date,i)=>(
                        <div key={i} className="singleDate  relative ">
                        <p className='text-orange font-bold lg:text-3xl text-center'>{date}</p>
                    </div>
                    ))
                  }
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Story