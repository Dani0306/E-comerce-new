import React from 'react'

const PickSize = ({ setCurrentSize, currentSize }) => {
  return (
    <div className='w-full flex items-center justify-center flex-col h-[40%]'>
      <h2 className='w-full h-[50%] text-center text-base lg:text-xl flex items-center justify-center'>Choose your size.</h2>
      <div className='w-full h-[50%] flex items-center justify-center'>
        <div onClick={() => setCurrentSize("s")} className={`w-[60px] h-[40px] rounded-lg bg-[#BDC3C7] font-semibold flex items-center justify-center mx-2 ${currentSize === "s" && "border-[3px] border-black"}`}>S</div>
        <div onClick={() => setCurrentSize("m")} className={`w-[60px] h-[40px] rounded-lg bg-[#BDC3C7] font-semibold flex items-center justify-center mx-2 ${currentSize === "m" && "border-[3px] border-black"}`}>M</div>
        <div onClick={() => setCurrentSize("l")} className={`w-[60px] h-[40px] rounded-lg bg-[#BDC3C7] font-semibold flex items-center justify-center mx-2 ${currentSize === "l" && "border-[3px] border-black"}`}>L</div>
        <div onClick={() => setCurrentSize("xl")} className={`w-[60px] h-[40px] rounded-lg bg-[#BDC3C7] font-semibold flex items-center justify-center mx-2 ${currentSize === "xl" && "border-[3px] border-black"}`}>XL</div></div>        
    </div>
  )
}

export default PickSize