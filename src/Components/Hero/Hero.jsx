import { FaArrowRight } from 'react-icons/fa'
import { BsMouse } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

import { EffectFade, Autoplay } from 'swiper/modules'
const Hero = () => {
  const btnStyle =
    'flex justify-center items-center md:gap-5 gap-1 border md:py-4 py-1 md:px-6 px-2 rounded-full hover:bg-white hover:text-black transition-all active:scale-95 cursor-pointer'

  return (
    <div className='mb-5'>
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
                "url('https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg')"
            }}
          >
            <div className='md:h-[850px] h-[85vh] hero-bg-color w-full  flex justify-center  items-center'>
              <div className='flex space-y-16 flex-col justify-center items-center '>

                <div className='flex justify-center items-center md:gap-10 gap-2 font-medium md:px-0 px-20'>
                  <button className={btnStyle}><p>Sales</p><FaArrowRight /></button>
                  <button className={btnStyle}><p>Rentals</p><FaArrowRight /></button>
                  <button className={btnStyle}><p>Commercial</p><FaArrowRight /></button>
                </div>


                <h1 className='md:text-7xl text-4xl font-bold font-outfit md:px-0 px-20 text-center'>
                 Uncover the comfort and <br className='md:block hidden'/> flexibility of your dream home.
                </h1>

                <div>
                  <button className='btn-text-primary'>
                    <p>Request A Visit </p>
                    <FaArrowRight />
                  </button>
                </div>

                <button href='#featuredlist' className='absolute bottom-10 text-5xl opacity-40 pt-10 cursor-pointer active:scale-95 transition-all hover:opacity-55'>
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
                "url('https://images.pexels.com/photos/6538934/pexels-photo-6538934.jpeg')"
            }}
          >
            <div className='md:h-[850px] h-[85vh] hero-bg-color w-full  flex justify-center  items-center'>
              <div className='flex space-y-16 flex-col justify-center items-center '>
                <div className='flex justify-center items-center md:gap-10 gap-2 font-medium md:px-0 px-20'>
                  <button className={btnStyle}><p>Sales</p><FaArrowRight /></button>
                  <button className={btnStyle}><p>Rentals</p><FaArrowRight /></button>
                  <button className={btnStyle}><p>Commercial</p><FaArrowRight /></button>
                </div>

                <h1 className='md:text-7xl text-4xl font-bold text-wrap  md:px-0 px-20 font-outfit text-center'>
                  Find your ideal home comfortable, <br className='md:block hidden'/> flexible, and uniquely yours
                </h1>

                <div>
                  <button className='btn-text-primary'>
                    <p>Request A Visit </p>
                    <FaArrowRight />
                  </button>
                </div>

                <button href='#featuredlist' className='absolute bottom-10 text-5xl opacity-40 pt-10 cursor-pointer active:scale-95 transition-all hover:opacity-55'>
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
                "url('https://images.pexels.com/photos/7173666/pexels-photo-7173666.jpeg')" 
            }}
          >
            <div className='md:h-[850px] h-[85vh] hero-bg-color w-full  flex justify-center  items-center'>
              <div className='flex space-y-16 flex-col justify-center items-center '>

                <div className='flex justify-center items-center md:gap-10 gap-2 font-medium md:px-0 px-20'>
                  <button className={btnStyle}><p>Sales</p><FaArrowRight /></button>
                  <button className={btnStyle}><p>Rentals</p><FaArrowRight /></button>
                  <button className={btnStyle}><p>Commercial</p><FaArrowRight /></button>
                </div>

                <h1 className='md:text-7xl text-4xl md:px-0 px-10 font-bold font-outfit text-center'>
                  {/* Experience The Harmonious <br /> Blend Of Luxury */}
                  Elevate your lifestyle where <br className='md:block hidden'/> luxury and comfort unite.

                </h1>

                <div>
                  <button className='btn-text-primary'>
                    <p>Request A Visit </p>
                    <FaArrowRight />
                  </button>
                </div>

                <a href='#featuredlist' className='absolute bottom-10 text-5xl opacity-40 pt-10 cursor-pointer active:scale-95 transition-all hover:opacity-55'>
                  <BsMouse />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
