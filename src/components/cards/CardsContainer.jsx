import React from 'react'
import ProductCard from './ProductCard'

const CardsContainer = ({ products }) => {
  return (
    <div className='w-full max-w-[1650px] h-max grid cards-container gap-4 pt-16 pb-20 place-items-center'>
        {
          products?.map(item => (
            <ProductCard key={item.id} id={item.id} name={item.name} price={item.price} image={item.image}/>
          ))
        }
    </div>
  )
}

export default CardsContainer