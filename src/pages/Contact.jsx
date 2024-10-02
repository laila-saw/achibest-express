import React from 'react'
import Banner from '../components/sections/Banner'
import Findus from '../components/sections/Findus'

const Contact = () => {
  return (
    <div>
        <Banner title={"Contact Us"} bgImg={'url("../assets/imgs/contact - img bg.png")'} />
        <Findus/>
    </div>
  )
}

export default Contact