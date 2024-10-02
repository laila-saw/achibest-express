import React from 'react'
import { realisations } from '../../data/Data'
import ReadMore from '../ui/ReadMore'
import SidebarNews from '../ui/SidebarNews'

const About = () => {
  return (
    <div className='subSection flex gap-10 '>
      <SidebarNews />
      <div className='section about pt-[100px] w-full lg:w-[calc(100%-320px-10px)] '>
        <div className="sectionContainer px-6 sm:px-[30px] md:px-[50px] lg:pl-0  lg:pr-[50px] xl:pr-[100px] ">
          <h2 className="sectionTitle mb-10">about</h2>
          <div className="aboutContainer flex lg:flex-row flex-col lg:gap-[15px] gap-[32px] xl:gap-[32px]">
            <div className="aboutLeft  lg:w-[calc(100%/3)] xl:w-[calc(100%/3-32px)] flex flex-wrap ">
              <p className="text1 mb-10 text-[28px] xl:text-[32px] font-extrabold uppercase text-gray w-full sm:w-[50%] lg:w-full pr-2">
                our story proud of our past...
              </p>
              <div className="boxText -full sm:w-[50%] lg:w-full ">
                <h3 className="boxTitle text-orange">launch</h3>
                <p className="desc">
                  <span className='keyWords'> Mr. Mohamed Achibane</span> started trading
                  in <span className='keyWords'> Food</span> Business in <span className='keyWords'> 1936</span> <br className='mb-4' />
                </p>
                <p className="desc">
                  He located his business <span className='keyWords'> in the trading
                  center of Casablanca (Derb Omar Area)</span> <br />
                  <ReadMore contentMore={"Read more"} />
                </p>
              </div>

            </div>
            <div className="aboutRight lg:w-[calc(100%/3*2)] xl:w-[calc(100%/3*2-32px)] flex flex-col gap-[32px]">
              <div className="aboutTop flex lg:gap-[15px] gap-[32px] xl:gap-[32px] flex-wrap  lg:justify-between ">
                <div className="aboutTopLeft w-full sm:w-[calc(100%/2-32px)] xl:w-[calc(100%/2-32px)]">
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
                <div className="aboutTopRight w-full sm:w-[calc(100%/2-32px)] xl:w-[calc(100%/2-32px)]">
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
              <div className="aboutBtottom  lg:w-auto  flex lg:flex-row flex-wrap  items-center sm:justify-center gap-10 lg:gap-7 pb-[50px] ">
                {
                  realisations.map((item, i) => (
                    <div key={i} className="realisationItem flex flex-col gap-4 items-center w-[calc(100%/2-28px)] sm:w-[calc(100%/5-28px)] ">
                      {item.icon}
                      {/* <img src={item.icon} alt="" className=" lg:w-[66px] lg:h-[66px] w-[66px] h-[66px] reaIcon" /> */}
                      <div className="reaNumber text-[20px] xl:text-2xl font-medium ">{item.number}</div>
                    </div>
                  ))
                }
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default About