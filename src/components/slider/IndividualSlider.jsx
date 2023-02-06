import React from 'react'

const IndividualSlider = ({ src, buttonDirection, price }) => {
  return (
    <div className='w-full h-full relative flex justify-center lg:inline'>
        <img src={src} className="w-full h-full object-cover" alt="" />
        <button className={`absolute bottom-16 lg:bottom-32 ${buttonDirection === "left" ? "lg:left-20" : "lg:right-20"} w-max px-8 rounded-xl h-[50px] lg:h-[60px] flex items-center justify-evenly bg-[#02AA32] hover:scale-105 transition-all duration-700`}>
          <span className='font-medium text-xl lg:text-2xl text-white'>
            ¡ Buy Now for { price } !
          </span>
        </button>
    </div>
  )
}

export default IndividualSlider