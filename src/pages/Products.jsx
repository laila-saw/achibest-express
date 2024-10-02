import React from 'react'
import Banner from '../components/sections/Banner'
import BannerProducts from '../components/sections/BannerProducts'
import ProductList from '../components/sections/ProductList'

const Products = () => {
  return (
    <div>
      <Banner title={"Products"} bgImg={'url("../assets/imgs/Product - background.png")'} />
      <BannerProducts/>
      <ProductList/>
    </div>
    

  )
}

export default Products