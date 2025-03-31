

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules'
import { FaInstagram } from "react-icons/fa6";
import InstaImgs from "./instaImgs";



const InstaPage = () => {
  return (
    <div className="relative">
      
      <div className="md:py-20">
        

        {/* slider  */}
        <div className='my-10'>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false
            }}
            modules={[FreeMode, Autoplay]}
            className=''
          >
            <SwiperSlide><InstaImgs/></SwiperSlide>
            <SwiperSlide><InstaImgs/></SwiperSlide>
            <SwiperSlide><InstaImgs/></SwiperSlide>
            <SwiperSlide><InstaImgs/></SwiperSlide>
            <SwiperSlide><InstaImgs/></SwiperSlide>
            <SwiperSlide><InstaImgs/></SwiperSlide>
            
          </Swiper>
        </div>


      </div>
    </div>
  )
}

export default InstaPage