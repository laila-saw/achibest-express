import React from 'react'
import { realisations } from '../../data/Data'
import SingleRealisation from '../ui/SingleRealisation'

const Realisation = () => {
    return (
        <div className="section py-[100px]">
            <div className="sectionContainer px-6 sm:px-[85px] lg:pr-[75px] lg:pl-[75px] flex flex-col gap-[100px]">
                <h2 className="sectionTitle mb-10 lg:mb-0 flex flex-col  text-center ">
                    Today Building a
                    Bright Future...
                </h2>
                <div className="reaclisationList flex justify-between gap-5 flex-wrap">
                    {
                        realisations.map((item, i) => (
                            <SingleRealisation key={i} icon={item.icon} number={item.number} img={item.img} desc={item.desc} bgColor={item.bgColor} isReverse={i%2===0 ? false : true} />
                        ))

                    }

                </div>
            </div>
        </div>
    )
}

export default Realisation