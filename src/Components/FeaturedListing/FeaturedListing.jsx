import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules'
import FeaturedCard from "./FeaturedCard";

const FeaturedListing = () => {
  return (
    <div>
      <div className="max-w-7xl md:mx-auto md:px-0 px-5 my-20 space-y-7">

        <h1 className="w-fit border-t border-b py-1">Featured Listing</h1>

        <h1 className="text-5xl font-semibold font-outfit">Featured Listing</h1>

        <div className="flex justify-between items-center ">
          <h1>Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis integer dui <br /> sed posuere sem. Id molestie mi arcu gravida lorem potenti.</h1>
          <button className="border px-6 py-4 rounded-full cursor-pointer hover:bg-gray-600 hover:text-white hover:translate-x-1 transition-all duration-300">View All Properties</button>
        </div>


      

        <div className='my-16'>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false
              }}
              modules={[FreeMode, Autoplay]}
              className='awards-imgs rounded-3xl'
            >
              <SwiperSlide><FeaturedCard /></SwiperSlide>
              <SwiperSlide><FeaturedCard /></SwiperSlide>
              <SwiperSlide><FeaturedCard /></SwiperSlide>
              <SwiperSlide><FeaturedCard /></SwiperSlide>
              <SwiperSlide><FeaturedCard /></SwiperSlide>
              
            </Swiper>
          </div>


      </div>
    </div>
  )
}

export default FeaturedListing