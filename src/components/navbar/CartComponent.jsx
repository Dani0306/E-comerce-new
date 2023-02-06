import { ChevronLeft, ChevronRight, Close } from '@mui/icons-material'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct, removeProduct, setShowCart, setTotal } from '../../store/actions/cartActions';

const CartComponent = ({ handleShowCart }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)

    const handleIncreaseAmount = (item) => {
        dispatch(setTotal(total + item.price))
        dispatch(addProduct(products, item));
    }

    const handleDecreaseAmount = (item) => {
        dispatch(setTotal(total - item.price))
        dispatch(removeProduct(products, item))
    }


    const handleNavigate = () => {
        navigate("/section/checkout")
        dispatch(setShowCart(false))
    }


  return (
    <div className='w-full h-screen grid cart absolute top-0 left-0 bg-white py-6 px-4 lg:w-[400px] lg:h-[550px] lg:right-[5%] lg:top-[8vh] lg:left-auto lg:border border-black'>
        <button onClick={handleShowCart} className='absolute top-4 right-1 lg:hidden'><Close className='!w-7 !h-7 mx-2'/></button>
        {
            products.length > 0 ? 
            <div className={`w-full h-full pb-4 flex flex-col overflow-y-scroll scrollbar-hide pt-6 lg:pt-0`}>
                {products.length > 0 && <h2 className='py-2'>{products.length} products</h2>}
            {
                products.map((item, index) => (
                    <div key={index} className='w-full min-h-[60px] border border-black flex items-center justify-between px-4 my-2 relative'>
                        <span className='max-w-[55%]'>{item.name}</span>
                        <div className='w-max h-full flex items-center justify-center'>
                            <div className='w-max h-full flex items-center justify-between mr-1'>
                                <button onClick={() => handleDecreaseAmount(item)}>
                                    <ChevronLeft className='!w-7 !h-7 mx-2'/>
                                </button>
                                    <span>{item.quantity}</span>
                                <button onClick={() => handleIncreaseAmount(item)}>
                                    <ChevronRight className='!w-7 !h-7 mx-2'/>
                                </button>
                            </div>
                            <img className='w-[45px] h-[35px] object-cover ml-2' src={item.image} alt="" />
                        </div>
                    </div>
                ))
            }
        </div> : <h2 className='max-w-[80%] text-base text-center mx-auto mt-[200px]'>There is nothing in you cart yet, add some products to buy.</h2>
        }
        <button onClick={handleNavigate} className='bg-black w-full h-full flex items-center justify-center'>
            <span className='text-white'>Go to checkout</span>
        </button>
    </div>
  )
}

export default CartComponent