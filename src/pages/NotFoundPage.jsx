import React from 'react'
import ButtonLink from '../components/ui/ButtonLink'

const NotFoundPage = () => {
  return (
    <div
    className="notFoundContainer w-full h-[100vh]"
    >
            <div className="notFoundContent p-[24px] md:p-0 text-center w-full h-full flex flex-col items-center justify-center">
                <h1 className='status text-verte text-[85px] md:text-[100px] font-extrabold '>4<span className='text-orange'>0</span>4</h1>
                <h2 className='text-white mb-5  text-[40px] md:text-[50px] uppercase font-semibold '>opps! Page Not Found.</h2>
                <p className='text-white text-[20px] md:text-[25px] first-letter:uppercase mb-5 font-normal '>sorry the page you are looking for doesn't exist.</p>
                <ButtonLink btnContent="Return Home" link="/" width={"w-max"} rounded='rounded-lg' />
            </div>
    </div>
  )
}

export default NotFoundPage