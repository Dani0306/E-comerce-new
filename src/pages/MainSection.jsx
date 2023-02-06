import React from 'react'
import CardsContainer from '../components/cards/CardsContainer'
import Footer from '../components/footer/Footer'
import Slider from '../components/slider/Slider'
import SectionsTitle from '../components/titles/SectionsTitle'
import { PRODUCTS } from '../utils/shopProducts'

const products = [PRODUCTS.shoes[0], PRODUCTS.shirts[4], PRODUCTS.pants[2], PRODUCTS.shoes[1], PRODUCTS.shirts[1], PRODUCTS.pants[1], PRODUCTS.shoes[3], PRODUCTS.shirts[3]]

const MainSection = () => {
  return (
    <div className='w-full min-h-[92vh] max-h-max flex flex-col items-center'>
        <Slider />
        <SectionsTitle title={"Most Purchased Products"} />
        <CardsContainer products={products}/>
    </div>
  )
}

export default MainSection