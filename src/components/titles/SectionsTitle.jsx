import React from 'react'

const SectionsTitle = ({ title, basket }) => {
  return (
    <div className={`flex items-center justify-center w-full max-w-[1650px] mt-[50px] ${basket ? "mb-6" : "mb-0"} lg:mt-[80px] lg:mb-[30px]`}>
        <h2 className='font-semibold text-2xl lg:text-4xl'>{title}</h2>
    </div>
  )
}

export default SectionsTitle