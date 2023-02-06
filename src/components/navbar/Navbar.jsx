import React, { useState, useRef, useEffect, Fragment } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Menu, Person, Login, Close, Groups, Checkroom, TrendingDown, ShoppingCartOutlined } from '@mui/icons-material'
import MiniMenu from './MiniMenu'
import Item from './Item'
import { openModal } from '../modal/functionality/openModal'
import { useSelector, useDispatch } from 'react-redux'
import UserMenu from './UserMenu'
import CartComponent from './CartComponent'
import { setShowCart } from '../../store/actions/cartActions'
import MiniMenuLarge from './MiniMenuLarge'
import Footer from '../footer/Footer'


const navbarItems = [
{
  section: "clothes",
  item1: "T-Shirts",
  item2: "Pants",
  item3: "Shoes",
  title: "Clothes",
  customIcon: Checkroom
}, {
  section: "offers",
  item1: "Discounts",
  item2: "Limited editions",
  item3: "Special editions",
  title: "Offers",
  customIcon: TrendingDown
}, {
  section: "aboutUs",
  item1: "Contact us",
  item2: "Frequent questions",
  item3: "Help",
  title: "Aboutus",
  customIcon: Groups
},]


const Navbar = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => setShowNavbar(!showNavbar)

  const products = useSelector(state => state.cart.items)
  const showCart = useSelector(state => state.cart.showCart);
  const handleShowCart = () => {
    dispatch(setShowCart(!showCart))
  }

  const [littleMenu, setLittleMenu] = useState({
    Clothes: false, 
    Offers: false, 
    Aboutus: false, 
    User: false
  })

  const handleSetLittleMenu = title => {
    if(littleMenu[title]) setLittleMenu({ ...littleMenu, [title]: false })
    else setLittleMenu({ ...littleMenu, [title]: true })
  }

  const [buttonType, setButtonType] = useState("open");
  const buttonRef = useRef(null);

  const user = useSelector(state => state.user.user);

  const handleOpenModal = (component) => {
    openModal("ModalReusable", component)
  }

  useEffect(() => {
    if(!showNavbar){
        buttonRef.current.addEventListener('animationstart', () => {
            setButtonType('open')
        })
    } else {
        buttonRef.current.addEventListener('animationstart', () => {
            setButtonType('close')
        })
    }
}, [showNavbar])

  return (
    <>
      <nav className='navbar-main-design'>
        <div className='navbar-div-design'>
          <h1 onClick={() => navigate("/")} className='font-semibold text-2xl lg:text-3xl'>Style Corner</h1>
          <div className='navbar-second-div'>
            <ul className={` ${showNavbar ? "top-[8vh]" : "top-[-380px]"} navbar-ul`}>
              {
                navbarItems.map((item, index) => (
                  <Fragment key={index}>
                    <Item littleMenu={littleMenu} handleSetLittleMenu={handleSetLittleMenu} showNavbar={showNavbar} key={index} title={item.title} Icon={item.customIcon} />
                    <MiniMenu littleMenu={littleMenu} title={item.title} item1={item.item1} item2={item.item2} item3={item.item3} user={null}/>
                  </Fragment>
                ))
              }
              {
                !user ? 
                <>
                  <Item handleOpenModal={handleOpenModal} showNavbar={showNavbar} title="Login" Icon={Person} />
                  <Item handleOpenModal={handleOpenModal} showNavbar={showNavbar} title="Register" Icon={Login} />
                </>
                 : 
                <>
                  <UserMenu littleMenu={littleMenu} handleSetLittleMenu={handleSetLittleMenu} user={user}/>
                  <MiniMenu littleMenu={littleMenu} title={"User"} item1="Edit Profile" item2="Privacy Policy" item3="Logout" user={true} />
                </>
              }
            </ul>
            {
              user && 
              <button className='relative' onClick={handleShowCart}>
              { 
              products.length > 0 && 
                <div className='absolute rounded-full flex items-center justify-center bg-green-600 text-white top-[-10px] right-[-4px] w-[20px] h-[20px]'>
                  <span className='text-sm'>{products.length}</span>
                </div> 
              }
                <ShoppingCartOutlined className='!w-8 !h-8 mr-2'/>
              </button>
            }
            <button ref={buttonRef} onClick={handleShowNavbar} className={`${showNavbar ? "first" : "second"} lg:hidden ml-2`}>
              { buttonType === "open" ? <Menu className='!w-8 !h-8'/> : <Close className='!w-8 !h-8'/> }
            </button>
          </div>
        </div>

        { showCart && <CartComponent handleShowCart={handleShowCart}/>}
      </nav>
      <Outlet />
      <Footer />
    </>
  )
}

export default Navbar


