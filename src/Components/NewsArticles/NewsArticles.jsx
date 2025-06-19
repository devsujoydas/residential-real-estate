import { FaArrowRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules'
import BlogNews from './BlogNews';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const NewsArticles = () => {
  const { blogs } = useContext(AuthContext)
  

  return (
    <div className="bg-primary text-white relative">
      <img className="hidden lg:block absolute bg-white rounded-full left-10 top-10 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />
      <img className="hidden lg:block bg-white rounded-full absolute right-10 bottom-10 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />


      <div className="max-w-7xl md:mx-auto lg:px-0 px-5 lg:py-20 py-10 space-y-7">

        <div className='flex justify-between items-center md:flex-row flex-col gap-5'>
          <div>
            <h1 className="md:text-5xl text-3xl font-semibold font-outfit md:mb-0 mb-5">News & Articles</h1>
            <p className='md:text-md text-sm'>Realar help you easily create a real estate trading website. With the <br />  function Register, Login, Post real estate news.</p>
          </div>
          <div>
            <Link to={"/blogs"} className="btn-text-primary">Brows All Blogs<FaArrowRight /></Link>
          </div>
        </div>

        {/* slider  */}
        <div className='md:my-14'>
          <Swiper
            slidesPerView={1}
            spaceBetween={26}
            freeMode={true} 
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
            className='awards-imgs rounded-3xl'
          >
             {blogs.map((blog,idx) => (
               <SwiperSlide key={idx}><BlogNews blog={blog} /></SwiperSlide>
            ))}
          </Swiper>
        </div>


      </div>
    </div>
  )
}

export default NewsArticles