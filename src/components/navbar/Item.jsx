import { ChevronRight } from '@mui/icons-material'
import RegisterModal from '../modal/modalComponents/RegisterModal'
import LoginModal from '../modal/modalComponents/LoginModal'
import MiniMenuLarge from './MiniMenuLarge'
import { useEffect, useState } from 'react'

const Item = ({ showNavbar, Icon, title, handleOpenModal, handleSetLittleMenu, littleMenu }) => {

  const [items, setItems] = useState([]);
  const [name, setName] = useState(null)

  const handleModal = () => {
    if(title === "Login") handleOpenModal(LoginModal)
    else if(title === "Register") handleOpenModal(RegisterModal)
    else return;
  }

  const handleLittleMenu = () => {
    if(title === "Login" || title === "Register") return;
    handleSetLittleMenu(title)
  }

  const handleOver = () => {
    if(window.innerWidth >= 1024){
      switch (title){
        case "Aboutus": 
          setItems(["Contact us", "Frequent questions", "Help"])
          setName("Aboutus")
        break;
        case "Clothes":
          setItems(["T-Shirts", "Pants", "Shoes"])
          setName("Clothes")
        break;
        case "Offers":   
          setItems(["Discounts", "Limited editions", "Special editions"])
          setName("Offers")
        break;
      }
    }
  }

  const handleLeave = () => {
    setItems([]);
    setName(null)
  }

  return (
    <li onMouseOver={handleOver} onMouseLeave={handleLeave} onClick={handleModal} className={`${showNavbar ? "opacity-100" : "opacity-0"} nav-li`}>
      <div className={`${title === "Login" && "lg:border lg:border-black lg:rounded-xl lg:py-1 lg:px-5"} ${title === "Register" && "lg:border lg:bg-black lg:border-black lg:rounded-xl lg:py-1 lg:px-5"} w-max h-max flex items-center justify-center`}>
        <Icon className={`${title === "Register" && "lg:text-white"} !w-7 !h-7 mr-2 lg:mr-1`}/>
        <span className={`${title === "Register" && "lg:text-white"} ml-2 lg:ml-1`}>{title === "Aboutus" ? "About us" : title}</span>
      </div>
      { title !== "Login" && title !== "Register" && <button onClick={handleLittleMenu} className={`${littleMenu[title] ? "rotate-90" : "rotate-0"} transition-all duration-500 lg:hidden`}><ChevronRight className='!w-7 !h-7 text-red-600'/></button> }
      <MiniMenuLarge items={items} name={name} title={title}/>
    </li>
  )
}

export default Item