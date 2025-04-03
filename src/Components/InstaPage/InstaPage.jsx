

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules'
import InstaImgs from "./InstaImgs";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext } from 'react';



const InstaPage = () => {
  const { featuredProperties } = useContext(AuthContext)
  // console.log(featuredProperties);

  return (
    <div className="relative">
      
      <div className="lg:py-20 py-10 lg:px-0 px-5">
        

        {/* slider  */}
        <div className='my-10'>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 100000,
              disableOnInteraction: false
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            modules={[FreeMode, Autoplay]}
            className=''
          >
            {featuredProperties.map((featuredPropertie,idx) => (
              <SwiperSlide key={idx}><InstaImgs featuredPropertie={featuredPropertie}/></SwiperSlide>
            ))}
            
          </Swiper>
        </div>


      </div>
    </div>
  )
}

export default InstaPage