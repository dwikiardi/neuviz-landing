import React from 'react'
import Flag from '../Assets/Background/Banner/Flag.png'

const Pricing = () => {
  return (
    <div className='absolute w-full h-screen bg-[#303030] text-[#ffff] mt-[-126px] z-10'>
        <h1 className='mt-[65px] items-center text-center mx-auto text-[35px] font-semibold'>Pricing <span className='font-bold'>& Plan</span></h1>
        <img className='w-full mt-[350px]' src={Flag} alt='/' />
    </div>
  )
}

export default Pricing