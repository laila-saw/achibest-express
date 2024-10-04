import React from 'react'
import { footerComposant } from '../../data/Data'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-lightGray py-[50px]'>
            <div className="sectionContainer px-6 sm:px-[30px] md:px-[50px] xl:px-[100px] 2xl:px-[150px] flex flex-wrap  justify-between">
                {
                    footerComposant.map((item, i) => (
                        <div key={i} 
                        className={i===0
                            ? "footerBox sm:hidden lg:block  sm:w-[calc(100%/2)] lg:w-[calc(100%/5)]  "
                            : "footerBox sm:w-[calc(100%/2)] lg:w-[calc(100%/5)]  "
                            } style={{paddingRight:i===0 && "28px"}}>
                            <h2 className='footerBoxTitle text-[24px] font-medium mb-2'>{item.title && item.title}</h2>
                            <div className="footerBoxContent">
                                { item.subComposant &&
                                    <div className="footerBoxList flex flex-wrap gap-4  justify-between">
                                    {
                                        
                                        item.subComposant.map((subCom, j) => (
                                        <div 
                                        key={j} 
                                        className={i===4
                                        ? " footerBoxItem gap-1 flex flex-col sm:w-[calc(100%/2-8px)] lg:w-[calc(100%-8px)]"
                                        : " footerBoxItem gap-1 flex flex-col md:w-[calc(100%-8px)] lg:w-[calc(100%-8px)]"
                                    }>
                                            <div className="footerBoxItemTitle text-[20px] font-[500] ">{subCom.title}</div>
                                            {subCom.content}
                                        </div>
                                    ))
                                    }
                                </div>
                                }
                                {
                                    item.content && item.content
                                }
                            </div>
                        </div>
                    ))
                }
                <div className="hidden sm:flex lg:hidden  w-full justify-center mt-3">
                <img className='w-[179px] ' src="../assets/logos/Achibest-Express-Logo.svg" alt="" />
                </div>
            </div>
            <div className="footerBottom px-6 sm:px-[30px] md:px-[50px] xl:px-[100px] 2xl:px-[150px] flex justify-between items-center flex-col lg:flex-row mt-10 gap-5">
                <div className="flex justify-between lg:justify-start gap-0 lg:gap-10 items-center w-full lg:w[calc(100%/3)]">
                    <Link to={'/'} className='transition-all hover:text-orange hover:opacity-100 opacity-60 text-sm'>Privacy Policy</Link>
                    <Link to={'/'} className='transition-all hover:text-orange hover:opacity-100 opacity-60 text-sm'>Term and Cnditions</Link>
                </div>
                <div className="text-center opacity-60 text-sm w-full lg:w[calc(100%/3)]">
                    Created By <a href="https://laila-saw.github.io/personel_portfolio/" target="_blank" rel="noopener noreferrer"><strong>Laila Ouhamou.</strong></a>
                </div>
                <div className='text-center lg:text-right w-full lg:w[calc(100%/3)] opacity-60 text-sm'>
                    Copyright © {new Date()?.getFullYear()} ACHIBEST FOOD.
                    All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer