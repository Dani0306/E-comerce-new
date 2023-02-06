import React, { useEffect } from 'react'
import SectionTitles from '../components/titles/SectionsTitle'
import { PRODUCTS } from '../utils/shopProducts'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, removeProduct, setCurrentProduct, setTotal } from '../store/actions/cartActions'
import { openModal } from '../components/modal/functionality/openModal'
import ProductModal from '../components/modal/modalComponents/productModal/ProductModal'

const CheckOut = () => {


  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)

  const formatNumber = (number) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(number)

  const handleOpenModal = (item) => {
    dispatch(setCurrentProduct(item))
    openModal("ModalReusable", ProductModal)
  }

  const handleAddProduct = (item) => {
    dispatch(setTotal(total + item.price))
    dispatch(addProduct(products, item))
  }

  const handleRemoveProduct = (item) => {
    dispatch(setTotal(total - item.price))
    dispatch(removeProduct(products, item))
  }


  return (
    <div className='w-full md:w-[90%] lg:w-[70%] h-[97vh] max-h-max mx-auto pt-[6vh] grilla'>
        <div className='w-full h-full overflow-y-scroll scrollbar-hide flex flex-col px-4'>
          {
            products.length > 0 ? <SectionTitles title="Your Basket" basket/> : <h2 className='text-black text-base px-6 md:text-2xl mt-[10vh] mx-auto text-center'>You don't have any product in your basket yet.</h2>
          }
          {
            products.map((item, index) => (
              <div key={index} className='w-full h-[250px] lg:h-[300px] border flex flex-col sm:flex-row border-black my-6'>
                <img src={item.image} className='w-full h-[55%] sm:h-full sm:w-[50%] object-cover' alt="" />
                <div className='w-full h-[45%] flex flex-col items-center justify-center sm:h-full sm:w-[50%]'>
                  <span className='flex items-center justify-center h-[60%] sm:h-[80%]'>{item.name}</span>
                  <div className='w-full h-[40%] flex items-center justify-between sm:h-[20%]'>
                    <div className='w-[50%] h-full flex items-center justify-evenly'>
                      <button onClick={() => handleRemoveProduct(item)}><ChevronLeft className='!w-6 !h-6'/></button>
                        <strong>{item.quantity}</strong>
                      <button onClick={() => handleAddProduct(item)}><ChevronRight className='!w-6 !h-6'/></button>
                    </div>
                    <button onClick={() => handleOpenModal(item)} className='w-[50%] h-full bg-[#BDC3C7] flex items-center justify-center'>
                      <span>Custom</span>
                    </button>
                </div>
                </div>
              </div>
            ))
          }
        </div>
        {
      products.length > 0 &&  
        <div className='w-full h-full flex items-center justify-between mt-4 mb-8 py-2 px-4'>
          <div className='w-[49%] h-full flex items-center justify-center bg-[#BDC3C7]'>
            <strong className='mr-1'>Total :</strong>
            <span className='ml-1'>{formatNumber(total)}</span>
          </div>
          <button className='w-[49%] h-full flex items-center justify-center bg-black text-white'>
            <span>Pay Now</span>
          </button>
        </div>
     }

    </div>
  )
}

export default CheckOut