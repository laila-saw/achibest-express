import { strategySteps } from '../../data/Data'
import StrategySingleStep from '../ui/StrategySingleStep'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArrowLeft from '../icon svgs/ArrowLeft';
import ArrowRight from '../icon svgs/ArrowRight';
import leftArrow from "../../assets/icons - svg/Blanc/24 px/Achibest-icon-Left-Arrow.svg"
import rightArrow from "../../assets/icons - svg/Blanc/24 px/Achibest-icon-Right-Arrow.svg"

const Strategy = ({RightStart}) => {
    
    
    return (
        <div className="section py-[143px] bg-lightGray">
            <div className={RightStart 
            ? "sectionContainer px-6 sm:px-[30px] md:px-[50px] lg:px-[50px] xl:px-[100px] 2xl:px-[150px] flex justify-center lg:flex-row-reverse flex-col gap-[53px]" 
            : "sectionContainer px-6 sm:px-[30px] md:px-[50px] lg:px-[50px] xl:px-[100px] 2xl:px-[150px] flex justify-center lg:flex-row flex-col gap-[53px]"
            }>
                <div className={RightStart 
                ? "sectionLeft text-right  flex flex-col items-end justify-between lg:w-[calc(100%/5-32px)]"
                : "sectionLeft text-left  flex flex-col items-start justify-between lg:w-[calc(100%/5-32px)]"
            }>
                    <div className={RightStart
                        ? "sectionTitle flex flex-col items-end"
                        :"sectionTitle flex flex-col items-start"
                    }>our go-to <br /> market <span>
                        {
                        RightStart
                        ? <ArrowLeft />
                        : <ArrowRight/>
                        }
                </span></div>
                    <p className="text flex flex-col justify-between">
                        In order to cover &
                        satisfy all types of
                        customers, we
                        adopted a MIXED
                        G2M combining
                    </p>
                    
                </div>
               <div className="block sm:hidden">
               <Carousel showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true} showThumbs={false} className="sectionRight w-full lg:w-[calc(100%/5*4)] flex  lg:flex-row flex-col">
                        {
                            strategySteps.map((item,i)=>(
                                <StrategySingleStep height={i===0 && "p-[25px] "} key={i} icon={item.icon} title={item.title} desc={item.desc} isInversed={i%2===0 ? false : true} />
                            ))
                        }
                </Carousel>
                <div className="flex mt-5 justify-center items-center gap-5">
                <img className='bg-verte cursor-pointer flex items-center justify-center p-2 w-[50px] h-[50px]' src={leftArrow} alt="" />
                <img className='bg-verte cursor-pointer flex items-center justify-center p-2 w-[50px] h-[50px]' src={rightArrow} alt="" />
                </div>
               </div>
               <div className="hidden sm:flex lg:w-[calc(100%/5*4)]">
               <div className="sectionRight w-full flex  lg:flex-row flex-col">
                        {
                            strategySteps.map((item,i)=>(
                                <StrategySingleStep height={i===0 && "p-[25px] "} key={i} icon={item.icon} title={item.title} desc={item.desc} isInversed={i%2===0 ? false : true} />
                            ))
                        }
                    
                </div>
               </div>
            </div>
        </div>
    )
}

export default Strategy