import React from 'react'
import closeSVG from '../../../assets/close-icon.svg'

const CloseIcon = () => {
  return (
    <img src={closeSVG} alt="Close Icon" className='absolute top-0 right-0 cursor-pointer' width={24} />
  )
}

export default CloseIcon