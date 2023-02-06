import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MiniMenuLarge = ({ items, name, title }) => {

  const navigate = useNavigate();

  const handleNavigation = (index) => {
    if(title !== "Clothes") return;
    if(items[index] === "T-Shirts") navigate("/section/shirts")
    else navigate("/section/" + (items[index]).toLowerCase());
  }


  return (
    <div className={`hidden w-[200px] px-2 ${title === name ? "h-[195px] opacity-100" : " opacity-0 h-0"} rounded-b-lg bg-[#ECF0F1] border-r-2 border-b-2 border-l-2 border-black transition-all duration-700 lg:absolute lg:flex flex-col top-[8vh] left-0 hover:cursor-pointer`}>
        {
          items.map((item, index) => (
            <div onClick={() => handleNavigation(index)} key={index} className={`w-full ${item !== "Shoes" && item !== "Help" && item !== "Special editions" && "border-b border-black"} h-[65px] transition-all duration-1000 flex items-center justify-center`}>
              <span className='text-center'>{item}</span>
            </div>
          ))
        }
        
    </div>
  )
}

export default MiniMenuLarge