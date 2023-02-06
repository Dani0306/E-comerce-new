import SectionContainer from '../components/utils/SectionContainer'
import CardsContainer from '../components/cards/CardsContainer'
import { PRODUCTS } from '../utils/shopProducts'
import SectionsTitle from '../components/titles/SectionsTitle'

const PantsSection = () => {
  return (
    <SectionContainer>
      <SectionsTitle title={"Pants"} />
      <CardsContainer products={PRODUCTS.pants} />
    </SectionContainer>
  )
}

export default PantsSection