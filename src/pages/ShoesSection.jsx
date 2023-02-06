import SectionContainer from '../components/utils/SectionContainer'
import CardsContainer from '../components/cards/CardsContainer'
import { PRODUCTS } from '../utils/shopProducts'
import SectionsTitle from '../components/titles/SectionsTitle'

const ShoesSection = () => {

  Intl.NumberFormat

  return (
    <SectionContainer>
      <SectionsTitle title={"Shoes And Sneakers"}/>
      <CardsContainer products={PRODUCTS.shoes} />
    </SectionContainer>
  )
}

export default ShoesSection