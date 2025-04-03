import Project from "./Project"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules'
import { FaArrowRight } from 'react-icons/fa'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BestProjects = () => {
const { featuredProperties } = useContext(AuthContext)
  // console.log(featuredProperties);

  return (
    <div className="relative">
      <img className="absolute md:h-fit h-20 left-5 md:left-10 md:top-10 top-2 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />
      <img className="absolute md:h-fit h-20 md:right-10 right-2  md:bottom-10 bottom-2 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />

      <div className="lg:py-25 py-10">
        {/* Section Heading  */}
        <div className="flex justify-center items-center flex-col space-y-5">
          <h1 className="  border-t border-b py-1">Best Project</h1>
          <h1 className=" text-5xl font-semibold font-outfit">Ongoing Projects</h1>
          <p className="text-center text-gray-500">Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis integer dui <br /> sed posuere sem. Id molestie mi arcu gravida lorem potenti.</p>
        </div>

        {/* slider  */}
        <div className='my-10 lg:px-0 px-5'>
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
            {featuredProperties.map((featuredPropertie,idx) => (
              <SwiperSlide key={idx}><Project featuredPropertie={featuredPropertie}/></SwiperSlide>
            ))}

          </Swiper>
        </div>


        <div className="flex justify-center items-center">
          <button className="btn-text-primary">Brows All Project<FaArrowRight /></button>
        </div>


      </div>
    </div>
  )
}

export default BestProjects