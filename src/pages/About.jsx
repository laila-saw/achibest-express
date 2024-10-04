import React from 'react'
import Banner from '../components/sections/Banner'
import Realisation from '../components/sections/Realisation'
import Story from '../components/sections/Story'
import Strategy from '../components/sections/Strategy'
import backgroundImg from "../assets/imgs/About - background.png"

const About = () => {
  return (
    <div>
        <Banner title={"About Us"} bgImg={`url("${backgroundImg}")`} />
        <Story/>
        <Strategy/>
        <Realisation/>
    </div>
  )
}

export default About