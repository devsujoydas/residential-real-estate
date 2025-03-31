import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules'
import Member from "./Member";


const TeamMembers = () => {
  return (
    <div>
      <div className="max-w-7xl md:mx-auto md:px-0 px-5 my-20 space-y-7">

        <h1 className="w-fit border-t border-b py-1">Team Member</h1>

        <div className="flex justify-between items-center ">
          <h1 className="text-5xl font-semibold font-outfit">Meet The Awesome Team</h1>

          <button className="border px-8 py-4 rounded-full cursor-pointer hover:bg-[#0D0D0C] hover:text-white hover:translate-x-1 transition-all duration-300 flex justify-center items-center gap-2 active:scale-95 ">View All Team<FaArrowRight /></button>
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
            <SwiperSlide><Member /></SwiperSlide>
            <SwiperSlide><Member /></SwiperSlide>
            <SwiperSlide><Member /></SwiperSlide>
            <SwiperSlide><Member /></SwiperSlide>

          </Swiper>
        </div>



      </div>
    </div>
  )
}

export default TeamMembers