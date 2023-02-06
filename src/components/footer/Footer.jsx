import React from 'react'
import { Language, AttachMoney } from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='w-full h-[550px] bg-[#082635] mt-[100px] flex items-center justify-center flex-col'>
        <div className='w-full max-w-[1000px] h-full footer place-content-center place-items-center'>
          <ul className='w-[200px] h-[165px] flex-col items-start hidden lg:flex'>
            <li className='footer-item'>Know more about us</li>
            <li className='footer-item'>Work with us</li>
            <li className='footer-item'>About Style Corner</li>
            <li className='footer-item'>Relationships with the investors</li>
            <li className='footer-item'>Clothes items</li>
          </ul>
          <ul className='w-[200px] h-[165px] flex-col items-start hidden lg:flex'>
            <li className='footer-item'>Buy our products</li>
            <li className='footer-item'>Sell our products</li>
            <li className='footer-item'>Buy Wholesale</li>
            <li className='footer-item'>Be part of our store</li>
            <li className='footer-item'>Sell with us</li>
          </ul>
          <ul className='w-[200px] h-[165px] flex flex-col items-start'>
            <li className='footer-item'>Your account</li>
            <li className='footer-item'>Your orders</li>
            <li className='footer-item'>Your record</li>
            <li className='footer-item'>Your payments</li>
          </ul>
          <ul className='w-[200px] h-[165px] flex flex-col items-start'>
            <li className='footer-item'>Shipping fee</li>
            <li className='footer-item'>Returns and replacements</li>
            <li className='footer-item'>Contact an assistant</li>
            <li className='footer-item'>Did you have any problem?</li>
            <li className='footer-item'>Help</li>
          </ul>
        </div>
        <div className='w-[385px] lg:w-max h-max mb-16 py-2 flex items-center justify-between'>
          <button className='flex items-center justify-center py-2 border border-white mx-4 w-[125px] lg:w-[170px]'>
                <Language className='lg:!w-6 !w-4 !h-4 lg:!h-6 text-white md:mr-2 mr-1'/>
                <span className='text-xs md:text-base text-white lg:ml-2'>English</span>
            </button>
            <button className='flex items-center justify-center py-2 border border-white mx-4 w-[125px] lg:w-[170px]'>
                <AttachMoney className='lg:!w-6 !w-4 !h-4 lg:!h-6 text-white md:mr-2 mr-1'/>
                <span className='text-xs md:text-base text-white lg:ml-2'>US Dollar</span>
            </button>
            <button className='flex items-center justify-center py-2 border border-white mx-4 w-[125px] lg:w-[170px]'>
                <img src="/colombia.png" className='w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] object-contain mr-2' alt="Country language" />
                <span className='text-xs md:text-base text-white md:ml-2'>Colombia</span>
            </button>
          </div>
    </div>
  )
}

export default Footer