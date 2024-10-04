import React from 'react'
import Banner from '../components/sections/Banner'
import BannerProducts from '../components/sections/BannerProducts'
import ProductList from '../components/sections/ProductList'
import productsHomePage from "../assets/imgs/Product - background.png"

const Products = () => {
  return (
    <div>
      <Banner title={"Products"} bgImg={`url("${productsHomePage}")`} />
      <BannerProducts/>
      <ProductList/>
    </div>
    

  )
}

export default Products