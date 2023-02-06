import React from 'react'
import { ShoppingCartOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, setTotal } from '../../store/actions/cartActions'


const ProductCard = ({ name, price, image, id }) => {

    const dispatch = useDispatch();
    const total = useSelector(state => state.cart.total)
    const items = useSelector(state => state.cart.items);

    const handleAddProduct = () => {
        dispatch(setTotal(total + price))
        dispatch(addProduct(items, { name, price, image, id, size: "s", color: 0 }))
    }
    const formatNumber = (number) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(number);
    
  return (
    <div className='w-full h-full flex flex-col shadow-lg product-card lg:min-h-[380px] max-h-[380px] transition-all duration-1000 hover:scale-[1.01] max-w-[380px]'>
        <div className='w-full h-[15%] flex items-center px-5'>
            <strong className='font-semibold'>{name}</strong>
        </div>
        <img className='w-full h-[72%] object-cover' src={image} alt="product" />
        <div className='w-full h-[13%] flex items-center justify-between'>
            <button className='w-[50%] h-full flex items-center justify-center'>
                <strong className='font-semibold'>{formatNumber(price)}</strong>
            </button>
            <button onClick={handleAddProduct} className='w-[50%] h-full flex items-center justify-center bg-[#BDC3C7] hover:scale-[1.04] transition-all duration-700'>
                <strong className='mr-1 font-semibold'>Add To Cart</strong>
                <ShoppingCartOutlined className='!w-7 !h-7 ml-1'/>
            </button>
        </div>
    </div>
  )
}

export default ProductCard