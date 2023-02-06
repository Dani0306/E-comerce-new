import React from 'react'

const PickColor = ({ setCurrentColor, currentColor }) => {
  return (
    <div className='w-full flex items-center justify-center flex-col h-[40%]'>
      <h2 className='w-full h-[50%] text-center text-base xl:text-xl flex items-center justify-center mt-4'>Pick a color for your product.</h2>
      <div className='w-full h-[60%] flex items-center justify-center'>
        <div onClick={() => setCurrentColor(0)} className={`w-[40px] h-[40px] rounded-full bg-[#7D3C98] mx-4 ${currentColor === 0 && "border-[3px] border-black"}`}></div>
        <div onClick={() => setCurrentColor(1)} className={`w-[40px] h-[40px] rounded-full bg-[#B3B6B7] mx-4 ${currentColor === 1 && "border-[3px] border-black"}`}></div>
        <div onClick={() => setCurrentColor(2)} className={`w-[40px] h-[40px] rounded-full bg-[#2ECC71] mx-4 ${currentColor === 2 && "border-[3px] border-black"}`}></div>
        <div onClick={() => setCurrentColor(3)} className={`w-[40px] h-[40px] rounded-full bg-[#E74C3C] mx-4 ${currentColor === 3 && "border-[3px] border-black"}`}></div></div>      
    </div>
  )
}

export default PickColor