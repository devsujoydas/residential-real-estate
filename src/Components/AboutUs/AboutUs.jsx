import { FiPhoneCall } from "react-icons/fi";
import { FaArrowRight } from 'react-icons/fa'
import LuxuryHouses from "../LuxuryHouses/LuxuryHouses";
import { Link } from "react-router-dom";
const AboutUs = () => {




  return (
    <div>
      <div className="max-w-7xl md:mx-auto lg:px-0 px-5 md:my-30 grid grid-cols-1 lg:grid-cols-2 gap-14">

        <div className=" w-full flex justify-center items-center ">
          <div className="overflow-hidden">
            <img className=" rounded-3xl " src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/about_6_1.png" alt="" />
          </div>
        </div>

        <div className=" w-full relative space-y-6">
          <h1 className="w-fit border-t border-b py-1">About Us</h1>

          <h1 className="md:text-5xl text-3xl font-semibold font-outfit">Welcome to Realar</h1>

          <h1 className="text-lg text-gray-600">Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis integer dui sed posuere sem. Id molestie mi arcu gravida lorem potenti.</h1>


          <div className="flex gap-5 items-center md:flex-row flex-col">
            <div className="md:border-r space-y-5 md:w-1/2">
              <h1 className="flex justify-start items-center gap-3"><img src="https://wordpress.themeholy.com/realar/wp-content/themes/realar/assets/img/checkmark.svg" alt="" />Quality real estate services</h1>
              <h1 className="flex justify-start items-center gap-3"><img src="https://wordpress.themeholy.com/realar/wp-content/themes/realar/assets/img/checkmark.svg" alt="" />100% Satisfaction guarantee</h1>
              <h1 className="flex justify-start items-center gap-3"><img src="https://wordpress.themeholy.com/realar/wp-content/themes/realar/assets/img/checkmark.svg" alt="" />Highly professional team</h1>
              <h1 className="flex justify-start items-center gap-3"><img src="https://wordpress.themeholy.com/realar/wp-content/themes/realar/assets/img/checkmark.svg" alt="" />Dealing always on time</h1>

              <Link to={"/aboutus"} className="btn-text-primary">More About Realar<FaArrowRight /></Link>
            </div>


            <div className="md:relative space-y-4 md:w-1/2 ">
              <FiPhoneCall className="bg-[#0D0D0C] w-12 h-12 p-3 rounded-full text-white active:scale-95 duration-500 transition-all" />
              <h1 >Call Us 24/7</h1>
              <a href="tel:+8801303436299" className="hover:text-yellow-400 text-2xl font-semibold transition-all duration-500 flex items-center gap-2">+880 13034-36299</a>
              <img className="absolute lg:block hidden md:-right-14 md:top-20 right-0 top-0 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />
            </div>


          </div>
        </div>
      </div>

      <LuxuryHouses/>
    </div>
  )
}

export default AboutUs