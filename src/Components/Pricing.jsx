import React from 'react'
import Flag from '../Assets/Background/Banner/Flag.png'
import Speed1 from '../Assets/Content/50Mbps.png'

const Pricing = () => {
  return (
    <div className='absolute w-full h-screen bg-[#303030] text-[#ffff] font-["Open Sans"] mt-[-126px] z-10'>
        <h1 className='mt-[65px] items-center text-center mx-auto text-[35px] font-semibold'>Pricing <span className='font-bold'>& Plan</span></h1>
        <img className='absolute w-full mt-[350px] -z-10' src={Flag} alt='/'/>
        <div className='h-[450px] w-[800px] grid grid-cols-3 gap-5 mx-auto mt-20'>
          <div className='relative flex flex-col items-center bg-gradient-radial from-[#424242] to-[#42424278] rounded-3xl'>
            <img className='absolute -z-9 mt-10' src={Speed1} alt='/'/>
            <div className='text-center pt-[120px] font-semibold'>
              <div>Up To</div>
              <div className='text-[35px]'>50</div>
              <div>Mbps</div>
            </div>
            <div className='absolute bottom-0 bg-[#3D365A] w-full h-[100px] rounded-b-3xl text-center'>
              <button className='bg-[#9C27B0] rounded-full w-[150px] h-10 mt-6 shadow-lg shadow-[#9C27B0]'>Choose Plan</button>
            </div>  
          </div>
          <div className='relative flex flex-col bg-gradient-radial from-[#424242] to-[#42424278] rounded-3xl h-[2000px]'>
            <img className='absolute -z-9 mt-10' src={Speed1} alt='/'/>
            <div className='text-center pt-[120px] font-semibold'>
                <div>Up To</div>
                <div className='text-[35px]'>50</div>
                <div>Mbps</div>
              </div>
            <div className='absolute top-0 bg-[#863998] w-full h-[100px] rounded-t-3xl rounded-[50px] text-center p-10 font-bold text-[20px]'>Best Deal !</div>
              <div className='absolute bottom-0 bg-[#3D365A] w-full h-[100px] rounded-b-3xl text-center'>
                <button className='bg-[#9C27B0] rounded-full w-[150px] h-10 mt-6 shadow-lg shadow-[#9C27B0]'>Choose Plan</button>
              </div>  
          </div>
          <div className='relative flex flex-col bg-gradient-radial from-[#424242] to-[#42424278] rounded-3xl'>
          <img className='absolute -z-9 mt-10' src={Speed1} alt='/'/>
            <div className='text-center pt-[120px] font-semibold'>
                <div>Up To</div>
                <div className='text-[35px]'>50</div>
                <div>Mbps</div>
              </div>
            <div className='absolute bottom-0 bg-[#3D365A] w-full h-[100px] rounded-b-3xl text-center'>
                <button className='bg-[#9C27B0] rounded-full w-[150px] h-10 mt-6 shadow-lg shadow-[#9C27B0]'>Choose Plan</button>
              </div>  
            <div className='absolute bottom-0 bg-[#3D365A] w-full h-[100px] rounded-b-3xl text-center'>
              <button className='bg-[#9C27B0] rounded-full w-[150px] h-10 mt-6 shadow-lg shadow-[#9C27B0]'>Get Quote!</button>
            </div>  
          </div>
        </div>
    </div>
  )
}

export default Pricing