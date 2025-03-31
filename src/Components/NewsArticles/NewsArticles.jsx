import { FaArrowRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules'
import BlogNews from './BlogNews';


const NewsArticles = () => {
  return (
    <div className="bg-[#1C2D37] text-white relative">
      <img className="absolute bg-white rounded-full left-10 top-10 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />
      <img className="bg-white rounded-full absolute right-10 bottom-10 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />


      <div className="max-w-7xl md:mx-auto md:px-0 px-5 py-20 space-y-7">

        <div className='flex justify-between items-center'>
          <div>
            <h1 className="text-5xl font-semibold font-outfit">News & Articles</h1>
            <p>Realar help you easily create a real estate trading website. With the <br />  function Register, Login, Post real estate news.</p>
          </div>
          <div>
            <button className="border px-8 py-5 flex justify-center items-center gap-2 rounded-full  text-white  hover:bg-white hover:text-black cursor-pointer active:scale-95 transition-all">Brows All Blogs<FaArrowRight /></button>
          </div>
        </div>

        {/* slider  */}
        <div className='my-14'>
          <Swiper
            slidesPerView={2}
            spaceBetween={26}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false
            }}
            modules={[FreeMode, Autoplay]}
            className='awards-imgs rounded-3xl'
          >
            <SwiperSlide><BlogNews /></SwiperSlide>
            <SwiperSlide><BlogNews /></SwiperSlide>
            <SwiperSlide><BlogNews /></SwiperSlide>
            <SwiperSlide><BlogNews /></SwiperSlide>
          </Swiper>
        </div>


      </div>
    </div>
  )
}

export default NewsArticles