import { Swiper, SwiperSlide } from 'swiper/react'
import { FaArrowRight } from 'react-icons/fa'
import { BsMouse } from 'react-icons/bs'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

import { EffectFade, Autoplay } from 'swiper/modules'
const Hero = () => {
  const btnStyle =
    'flex justify-center items-center md:gap-5 gap-2 border md:py-4 py-2 md:px-6 px-4 rounded-full hover:bg-white hover:text-black transition-all active:scale-95 cursor-pointer'

  return (
    <div className='h-[95vh]'>
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
            <div className='md:h-[90vh] h-[85vh] hero-bg-color w-full  flex justify-center  items-center'>
              <div className='flex space-y-16 flex-col justify-center items-center '>
                
                <div className='flex justify-center flex-wrap items-center md:gap-10 gap-6 font-medium md:px-0 px-20'>

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


                <h1 className='md:text-7xl text-4xl font-bold font-outfit md:px-0 px-20 text-center'>
                  Elevate Your Lifestyle Where <br /> Luxury Meets Comfort
                </h1>

                <div>
                  <button className='btn-text-primary'>
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
            <div className='md:h-[90vh] h-[85vh] hero-bg-color w-full  flex justify-center  items-center'>
              <div className='flex space-y-16 flex-col justify-center items-center '>
                <div className='flex justify-center items-center md:gap-10 gap-5 font-medium md:px-0 px-20 flex-wrap'>
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

                <h1 className='md:text-7xl text-4xl font-bold font-outfit text-center'>
                  Discover Your Comfortable <br /> & Flexible Living House
                </h1>

                <div>
                  <button className='btn-text-primary'>
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
            <div className='md:h-[90vh] h-[85vh] hero-bg-color w-full  flex justify-center  items-center'>
              <div className='flex space-y-16 flex-col justify-center items-center '>
                <div className='flex justify-center items-center md:gap-10 gap-5 font-medium md:px-0 px-20 flex-wrap'>
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

                <h1 className='md:text-7xl text-4xl font-bold font-outfit text-center'>
                  Experience The Harmonious <br /> Blend Of Luxury
                </h1>

                <div>
                  <button className='btn-text-primary'>
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
    </div>
  )
}

export default Hero
