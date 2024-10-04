import React from 'react'
import ButtonLink from '../ui/ButtonLink'
import backgroundImg from "../../assets/imgs/img05.png"
import RightArrow from "../../assets/icons - svg/Blanc/24 px/Achibest-icon-Right-Arrow.svg"
const BannerProducts = () => {
  return (
    <div className="section pt-[98px] ">
    <div className="sectionContainer px-6 sm:px-[30px] md:px-[50px] lg:px-[50px] xl:px-[100px] 2xl:px-[150px]  flex  lg:flex-row-reverse flex-col gap-[53px] ">
        <div className="bannerContent h-[50vh] w-full p-8 flex flex-col gap-8 justify-end" style={{backgroundImage:`url("${backgroundImg}")`, backgroundSize:"cover" }} >
            <p className="titleBanner text-white mb-8 lg:w-6/12 lg:text-[65px] lg:leading-[80px] md:text-[55px] md:leading-[58px] text-[35px] leading-[38px] ">
            Wanna
            <br />
            get inspired?
            </p>
            <ButtonLink  link={'/blog?category=vegan'} rounded="rounded-[0] " width="w-max"  btnContent={"see our vegan recipes"} isReversed btnIcon={RightArrow}  />
        </div>
    </div>
</div>
  )
}

export default BannerProducts