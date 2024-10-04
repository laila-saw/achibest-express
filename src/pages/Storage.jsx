import React from 'react'
import Banner from '../components/sections/Banner'
import StorageSection from '../components/sections/StorageSection'
import backgroundImg from "../assets/imgs/About - background.png"

const Storage = () => {
  return (
    <div>
        <Banner title={"Storage"}  bgImg={`url("${backgroundImg}")`} />
        <StorageSection/>
    </div>
  )
}

export default Storage