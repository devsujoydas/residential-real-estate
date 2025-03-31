import Project from "./Project"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules'
import { FaArrowRight } from 'react-icons/fa'

const BestProjects = () => {
  return (
    <div className="relative">
      <img className="absolute left-10 top-10 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />
      <img className="absolute right-10 bottom-10 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />

      <div className="md:py-25">
        {/* Section Heading  */}
        <div className="flex justify-center items-center flex-col space-y-5">
          <h1 className="  border-t border-b py-1">Best Project</h1>
          <h1 className=" text-5xl font-semibold font-outfit">Ongoing Projects</h1>
          <p className="text-center text-gray-500">Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis integer dui <br /> sed posuere sem. Id molestie mi arcu gravida lorem potenti.</p>
        </div>

        {/* slider  */}
        <div className='my-10'>
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
            className='awards-imgs'
          >
            <SwiperSlide><Project /></SwiperSlide>
            <SwiperSlide><Project /></SwiperSlide>
            <SwiperSlide><Project /></SwiperSlide>
            <SwiperSlide><Project /></SwiperSlide>
            <SwiperSlide><Project /></SwiperSlide>

          </Swiper>
        </div>


        <div className="flex justify-center items-center">
          <button className="border px-8 py-5 flex justify-center items-center gap-2 rounded-full bg-black text-white  hover:bg-white hover:text-black cursor-pointer active:scale-95 transition-all">Brows All Project<FaArrowRight /></button>
        </div>


      </div>
    </div>
  )
}

export default BestProjects