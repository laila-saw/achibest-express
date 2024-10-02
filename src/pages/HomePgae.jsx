import React from 'react'
import About from '../components/sections/About'
import BannerHomePage from '../components/sections/BannerHomePage'
import Brands from '../components/sections/Brands'
import Clients from '../components/sections/Clients'
import ProductHomepage from '../components/sections/ProductHomepage'
import Strategy from '../components/sections/Strategy'
import Supplier from '../components/sections/Supplier'

export const HomePgae = () => {
  return (
    <div className='main'>
        <BannerHomePage/>
        <About/>
        <Strategy RightStart/>
        <ProductHomepage/>
        <Supplier/>
        <Brands/>
        <Clients/>
    </div>
  )
}
