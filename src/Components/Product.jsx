import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Wireless from '../Assets/Content/Wireless.png'
import Fibertohome from '../Assets/Content/Fibertohome.png'
import Gigabit from '../Assets/Content/Gigabit.png'
import "swiper/css/pagination";
import 'swiper/css';

const Product = () => {
  return (
    <div className='absolute w-full h-screen bg-[#303030] text-[#ffff] font-["Open Sans"]'>
        <div className='relative items-center text-center mx-auto px-[110px] z-10'>
            <h1 className='text-[35px] font-semibold mb-14'>Product <span className='font-bold'>& Services</span></h1>
            <p1>Neuviz Convergence Networks is a leading network provider that specializes in delivering ultra high-speed and resilient networks. We operate an "open access" network 24 hours a day and seven days a week. Neuviz colocation facilities are built to global standards for hosting and Disaster Recovery plans. Neuviz fiber-to-the-home broadband connections allow for better connectivity, unlimited speed, ease of use and many features while delivering speeds of up to one gigabit per second.</p1>
            <Swiper
                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={20}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mt-10"
                >
                <SwiperSlide>          
                    <div className='bg-gradient-to-b from-[#303030] via-[#303030] to-[#3D365A] rounded-3xl h-[500px] w-[500px] shadow-lg'>
                        <img className='rounded-t-lg h-[200px] w-full' src={Gigabit} alt='/'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>          
                    <div className='bg-gradient-to-b from-[#303030] via-[#303030] to-[#3D365A] rounded-3xl h-[500px] w-[500px] shadow-lg'>
                        <img className='rounded-t-lg h-[200px] w-full' src={Wireless} alt='/'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>          
                    <div className='bg-gradient-to-b from-[#303030] via-[#303030] to-[#3D365A] rounded-3xl h-[500px] w-[500px] shadow-lg'>
                        <img className='rounded-t-lg h-[200px] w-full' src={Fibertohome} alt='/'/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div> 
    </div>
  )
}

export default Product