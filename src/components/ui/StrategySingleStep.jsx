import React from 'react'

const StrategySingleStep = ({ icon, title, desc, isInversed, height }) => {
  return (
    <div className={isInversed
      ? "stepItem items-center h-full lg:h-full  w-full lg:w-[calc(100%/3)] flex flex-col sm:flex-row lg:flex-col-reverse"
      : "stepItem items-center h-full lg:h-full  w-full lg:w-[calc(100%/3)] flex flex-col-reverse sm:flex-row-reverse lg:flex-col"}>
      <div className={"boxImg bg-verte w-full sm:w-[50%] lg:w-full h-[50%] sm:h-full lg:h-[50%] "+height}>
        {icon}
      </div>
      <div className="boxText px-5 w-full sm:w-[50%] lg:w-full h-[50%] sm:h-full lg:h-[50%] flex flex-col justify-center ">
        <div className="boxTitle text-orange">{title}</div>
        {desc}
      </div>
    </div>
  )
}

export default StrategySingleStep