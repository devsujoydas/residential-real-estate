import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules'
import FeaturedCard from "./FeaturedCard";

const FeaturedListing = () => {
  return (
    <div>
      <div className="max-w-7xl md:mx-auto lg:px-0 px-5 lg:my-20 space-y-7">

        <h1 className="w-fit md:text-md text-sm border-t border-b py-1">Featured Listing</h1>

        <h1 className="md:text-5xl text-3xl font-semibold font-outfit">Featured Listing</h1>

        <div className="flex justify-between items-center md:flex-row flex-col ">
          <h1 className='text-sm'>Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis integer dui <br /> sed posuere sem. Id molestie mi arcu gravida lorem potenti.</h1>
          <button className="md:text-md text-sm border px-6 py-4 rounded-full cursor-pointer hover:bg-gray-600 hover:text-white hover:translate-x-1 transition-all duration-300">View All Properties</button>
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