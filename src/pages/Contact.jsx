import React from 'react'
import Banner from '../components/sections/Banner'
import Findus from '../components/sections/Findus'
import contactbackground from "../assets/imgs/contact - img bg.png"
const Contact = () => {
  return (
    <div>
        <Banner title={"Contact Us"} bgImg={`url("${contactbackground}")`} />
        <Findus/>
    </div>
  )
}

export default Contact