import React from 'react'

const SectionContainer = ({ children }) => {
  return (
    <div className='w-full min-h-screen max-h-max flex flex-col items-center py-10'>
        { children }
    </div>
  )
}

export default SectionContainer