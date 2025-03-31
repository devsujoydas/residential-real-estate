import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules'
import TestimonialCard from './TestimonialCard';
import BrandBaner from '../BrandBaner/BrandBaner';


const Testimonial = () => {
  return (
    <div className="bg-[url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/award-bg-1-1.png')] bg-cover bg-no-repeat bg-center  bg-[#1C2D37] text-white ">
      <div className=" max-w-7xl md:mx-auto py-10 lg:px-0 px-5 lg:py-25">
        {/* Section Heading  */}
        <div className=" flex-col space-y-5">
          <h1 className=" w-fit border-t border-b py-1">Testimonial</h1>
          <h1 className=" text-5xl font-semibold font-outfit">What Our Customers Says</h1>
        </div>

         {/* slider  */}
         <div className='lg:my-14 my-10'>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false
            }}
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
            modules={[FreeMode, Autoplay]}
            className='awards-imgs'
          >
            <SwiperSlide><TestimonialCard /></SwiperSlide>
            <SwiperSlide><TestimonialCard /></SwiperSlide>
            <SwiperSlide><TestimonialCard /></SwiperSlide>
            <SwiperSlide><TestimonialCard /></SwiperSlide>
            <SwiperSlide><TestimonialCard /></SwiperSlide>

          </Swiper>
        </div>

        <BrandBaner/>
      </div>
    </div>
  )
}

export default Testimonial