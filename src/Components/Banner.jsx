import React from 'react'
import Decoration from '../Assets/Background/Banner/Decoration.svg'
import Decorationl from '../Assets/Background/Banner/Decoration-l.svg'
import Decorationr from '../Assets/Background/Banner/Decoration-r.svg'
import Bannerct from '../Assets/Content/Bannerct.svg'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-tl from-[#9C27B0] to-[#6A1B9A] relative'>
        <img className='absolute h-screen inset-y-0 left-0' src={Decorationl} alt='/' />
        <img className='absolute h-screen inset-y-0 right-0 ml-[-500px]' src={Decorationr} alt='/' />
        <img className='absolute inset-x-0 bottom-0' src={Decoration} alt='/' />
        <div className='mx-auto flex flex-row justify-center text-[#ffff] font-["Open Sans"]'>
            <div className='flex flex-col text-left justify-center z-10'>
                <h1 className='font-semibold text-[40px]'>The Best Internet Needs 
                    <span className='flex font-bold text-[40px] mt-[-15px]'>for Your business !</span>
                </h1>
                <Typed className='flex text-[20px]' strings={['No Limit - No Boundary - No Delay']} typeSpeed={100} backSpeed={20} loop />
                <div>
                    <button className='bg-[#8BC34A] rounded-full p-1 mt-2 w-[150px]'>
                        Contact US!
                    </button>
                </div>
            </div>
            <div>
                <img className='w-[500px] mt-[150px] my-4' src={Bannerct} alt='/' />
            </div>
        </div>
    </div>
  )
}

export default Banner