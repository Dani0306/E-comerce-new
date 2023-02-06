import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PickColor from './PickColor';
import PickSize from './PickSize';
import { customProduct } from '../../../../store/actions/cartActions'
import { Check } from '@mui/icons-material'


const ProductModal = () => {

  const dispatch = useDispatch();
  const product = useSelector(state => state.cart.currentProduct);
  const items = useSelector(state => state.cart.items);

  const [savedChanges, setSavedChanges] = useState(false);
  const [currentColor, setCurrentColor] = useState(product.color);
  const [currentSize, setCurrentSize] = useState(product.size)


  const handleCustomProduct = (itemId) => {
    dispatch(customProduct(items, itemId, currentSize, currentColor));
    setSavedChanges(true);
    setTimeout(() => {
      setSavedChanges(false);
    }, 2000);
  }


  return (
    <div className='w-[90%] xl:w-full h-[65vh] xl:h-[65vh] flex flex-col xl:flex-row items-center justify-center bg-white'>
      <img className='w-full h-[50%] xl:w-[50%] xl:h-full object-cover' src={product.image} alt="" />
        <div className='w-full h-[50%] lg:w-[50%] lg:h-full flex flex-col justify-between'>
          <PickColor currentColor={currentColor} setCurrentColor={setCurrentColor}/>
          <PickSize currentSize={currentSize} setCurrentSize={setCurrentSize}/>
          <div className='w-full h-[30%] flex items-end justify-center'>
            <button className='w-[50%] h-[50px] flex items-center justify-center'>
              <span className='font-semibold'>{product?.price}</span>
            </button>
            <button onClick={() => handleCustomProduct(product.id)} className='w-[50%] h-[50px] flex items-center justify-center bg-[#BDC3C7] relative'>
              <span className='font-semibold mr-1'>Save changes</span>
              <div className={`${savedChanges ? "w-full opacity-100" : "opacity-0 w-0"} h-full absolute top-0 left-0 flex items-center justify-center bg-[#2E4053] transition-all duration-700`}>
                  <span className='ml-2 text-white'>Saved</span>
                  <div className='w-[25px] h-[25px] flex items-center justify-center bg-green-600 rounded-full ml-2'>
                    <Check className='!w-4 !h-4 text-white'/>
                  </div>
              </div>              
            </button>
        </div>
        </div>
    </div>
  )
}

export default ProductModal