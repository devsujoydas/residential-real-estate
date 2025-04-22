import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules'
import FeaturedCard from "./FeaturedCard";
import { FaArrowRight } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const FeaturedListing = () => {

  const { featuredProperties } = useContext(AuthContext)
  // console.log(featuredProperties);

  return (
    <div id='featuredlist'>
      <div className="max-w-7xl md:mx-auto lg:px-0 px-5 lg:my-20 ">

        <div className='space-y-7 lg:text-left text-center'>

          <div className='flex lg:justify-start justify-center items-center'>
            <h1 className="w-fit md:text-md text-sm border-t border-b py-1">Featured Listing</h1>
          </div>

          <h1 className="md:text-5xl text-3xl font-semibold font-outfit">Featured Listing</h1>

          <div className="flex justify-between items-center md:flex-row flex-col gap-5">
            <h1 className='text-sm'>Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis integer dui <br /> sed posuere sem. Id molestie mi arcu gravida lorem potenti.</h1>
            <button className="btn-text-primary">View All Properties<FaArrowRight /></button>
          </div>
        </div>



        {/* Slider  */}
        <div className='my-16'>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            freeMode={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            
            autoplay={{
              delay: 1500,
              disableOnInteraction: false
            }}
            modules={[FreeMode, Autoplay]}
            className='awards-imgs rounded-3xl'
          >
            {featuredProperties.map((featuredPropertie,idx) => (
              <SwiperSlide key={idx}><FeaturedCard featuredPropertie={featuredPropertie}/></SwiperSlide>
            ))}

          </Swiper>
        </div>


      </div>
    </div>
  )
}

export default FeaturedListing