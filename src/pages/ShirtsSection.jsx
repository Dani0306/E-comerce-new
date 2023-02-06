import React from 'react'
import SectionContainer from '../components/utils/SectionContainer'
import CardsContainer from '../components/cards/CardsContainer'
import { PRODUCTS } from '../utils/shopProducts'
import SectionsTitle from '../components/titles/SectionsTitle'

const ShirtsSection = () => {
  return (
    <SectionContainer>
      <SectionsTitle title={"T-Shirts"}/>
      <CardsContainer products={PRODUCTS.shirts} />
    </SectionContainer>
  )
}

export default ShirtsSection