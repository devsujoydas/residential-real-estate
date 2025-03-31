import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { FreeMode, Autoplay } from 'swiper/modules'
import ScheduleVisit from './ScheduleVisit';
const Awards = () => {
  return (
    <div>
      <div className="bg-[url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/award-bg-1-1.png')] bg-cover bg-no-repeat bg-center  bg-[#1C2D37] text-white ">
        <div className=" max-w-7xl md:mx-auto md:py-25">

          {/* Section Heading  */}
          <div className="flex justify-center items-center flex-col space-y-5">
            <h1 className="  border-t border-b py-1">Awards</h1>
            <h1 className=" text-5xl font-semibold font-outfit">Our Recognition & Awards</h1>
          </div>

          {/* Award img slider  */}
          <div className='my-16'>
            <Swiper
              slidesPerView={5}
              spaceBetween={0}
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false
              }}
              modules={[FreeMode, Autoplay]}
              className='awards-imgs'
            >
              <SwiperSlide><img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/award1-1-1.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/award1-2-1.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/award1-3-1.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/award1-4-1.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/award1-5-1.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/award1-1-1.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/award1-2-1.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/award1-3-1.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/award1-4-1.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/award1-5-1.png" alt="" /></SwiperSlide>

            </Swiper>
          </div>

          {/* Schedule a visit Form  */}
          <ScheduleVisit/>
        </div>
      </div>

    </div>
  )
}

export default Awards