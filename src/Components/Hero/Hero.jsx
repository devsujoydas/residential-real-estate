import { Swiper, SwiperSlide } from 'swiper/react'
import { FaArrowRight } from 'react-icons/fa'
import { BsMouse } from 'react-icons/bs'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { EffectFade, Autoplay } from 'swiper/modules'
const Hero = () => {
  const btnStyle =
    'flex justify-center items-center gap-5 border py-4 px-6 rounded-full hover:bg-white hover:text-black transition-all active:scale-95 cursor-pointer'

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }}
        modules={[EffectFade, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div
            className=' text-white bg-no-repeat bg-cover'
            style={{
              backgroundImage:
                "url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/hero_bg_5_1.png')"
            }}
          >
            <div className='h-[100vh] hero-bg-color w-full  flex justify-center  items-center'>
              <div className='flex space-y-16 flex-col justify-center items-center '>
                <div className='flex justify-center items-center gap-10 font-medium'>
                  <button className={btnStyle}>
                    <p>Sales</p>
                    <FaArrowRight />
                  </button>

                  <button className={btnStyle}>
                    <p>Rentals</p>
                    <FaArrowRight />
                  </button>

                  <button className={btnStyle}>
                    <p>Commercial</p>
                    <FaArrowRight />
                  </button>
                </div>


                <h1 className='text-7xl font-bold font-outfit text-center'>
                  Elevate Your Lifestyle Where <br /> Luxury Meets Comfort
                </h1>

                <div>
                  <button className='flex justify-center  items-center gap-5 border py-4 px-6 rounded-full bg-[#1C2D37] hover:border-transparent hover:bg-[#223d4d] active:scale-95 transition-all  cursor-pointer'>
                    <p>Request A Visit </p>
                    <FaArrowRight />
                  </button>
                </div>

                <button className='absolute bottom-10 text-7xl opacity-40 pt-10 cursor-pointer active:scale-95 transition-all hover:opacity-55'>
                  <BsMouse />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className=' text-white bg-no-repeat bg-cover'
            style={{
              backgroundImage:
                "url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/hero_bg_5_2.png')"
            }}
          >
            <div className='h-[100vh] hero-bg-color w-full  flex justify-center  items-center'>
              <div className='flex space-y-16 flex-col justify-center items-center '>
                <div className='flex justify-center items-center gap-10 font-medium'>
                  <button className={btnStyle}>
                    <p>Sales</p>
                    <FaArrowRight />
                  </button>

                  <button className={btnStyle}>
                    <p>Rentals</p>
                    <FaArrowRight />
                  </button>

                  <button className={btnStyle}>
                    <p>Commercial</p>
                    <FaArrowRight />
                  </button>
                </div>

                <h1 className='text-7xl font-bold font-outfit text-center'>
                  Discover Your Comfortable <br /> & Flexible Living House
                </h1>

                <div>
                  <button className='flex justify-center  items-center gap-5 border py-4 px-6 rounded-full bg-[#1C2D37] hover:border-transparent hover:bg-[#223d4d] active:scale-95 transition-all  cursor-pointer'>
                    <p>Request A Visit </p>
                    <FaArrowRight />
                  </button>
                </div>

                <button className='absolute bottom-10 text-7xl opacity-40 pt-10 cursor-pointer active:scale-95 transition-all hover:opacity-55'>
                  <BsMouse />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className=' text-white bg-no-repeat bg-cover'
            style={{
              backgroundImage:
                "url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/hero_bg_5_3.png')"
            }}
          >
            <div className='h-[100vh] hero-bg-color w-full  flex justify-center  items-center'>
              <div className='flex space-y-16 flex-col justify-center items-center '>
                <div className='flex justify-center items-center gap-10 font-medium'>
                  <button className={btnStyle}>
                    <p>Sales</p>
                    <FaArrowRight />
                  </button>

                  <button className={btnStyle}>
                    <p>Rentals</p>
                    <FaArrowRight />
                  </button>

                  <button className={btnStyle}>
                    <p>Commercial</p>
                    <FaArrowRight />
                  </button>
                </div>

                <h1 className='text-7xl font-bold font-outfit text-center'>
                  Experience The Harmonious <br /> Blend Of Luxury
                </h1>

                <div>
                  <button className='flex justify-center  items-center gap-5 border py-4 px-6 rounded-full bg-[#1C2D37] hover:border-transparent hover:bg-[#223d4d] active:scale-95 transition-all  cursor-pointer'>
                    <p>Request A Visit </p>
                    <FaArrowRight />
                  </button>
                </div>

                <button className='absolute bottom-10 text-7xl opacity-40 pt-10 cursor-pointer active:scale-95 transition-all hover:opacity-55'>
                  <BsMouse />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Hero
