import React from 'react'
import Banner from '../components/sections/Banner'
import StorageSection from '../components/sections/StorageSection'

const Storage = () => {
  return (
    <div>
        <Banner title={"Storage"} bgImg={'url("../assets/imgs/About - background.png")'} />
        <StorageSection/>
    </div>
  )
}

export default Storage