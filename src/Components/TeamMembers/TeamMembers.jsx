import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import MemberPage from "../../Pages/Teams/MemberPage";

const TeamMembers = () => {

  const { teamMembers } = useContext(AuthContext)
  // console.log(teamMembers);

  return (
    <div>
      <div className="max-w-7xl md:mx-auto mlgpx-0 px-5 lg:my-20 my-10 space-y-7">
        <h1 className="w-fit border-t border-b py-1">Team Member</h1>
        <div className="flex justify-between items-center md:flex-row flex-col gap-5 ">
          <h1 className="md:text-5xl text-3xl font-semibold font-outfit">Meet The Awesome Team</h1>
          <Link to={"/teams"} className="btn-text-primary ">View All Team<FaArrowRight /></Link>
        </div>

        {/* slider  */}
        <div className='lg:my-16 my-10'>
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
            className='awards-imgs rounded-3xl'
          >


            {/* Teams Member  */}
            <div className="max-w-7xl mx-auto md:my-20 my-10 lg:p-0 p-5 grid md:grid-cols-3 gap-5">
              {
                teamMembers.map(tMember => <MemberPage tMember={tMember} key={tMember.id} />)
              }
            </div>


          </Swiper>
        </div>



      </div>
    </div>
  )
}

export default TeamMembers