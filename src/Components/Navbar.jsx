import React from 'react'
import Logo from '../Assets/Content/Logo.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[70px] z-40'>
      <div className='w-[80%] h-[50px] mx-auto bg-[#303030] mt-5 rounded-full'>
        <div className='flex justify-between text-[#ffff] font-["Open Sans"] font-semibold text-[15px] pt-4 pl-10 pr-10'>
          <img className='h-5' src={Logo} alt='/' />
          <div className='flex space-x-4'>
            <div>Home</div>
            <div>Pricing</div>
            <div>Products & Services</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar