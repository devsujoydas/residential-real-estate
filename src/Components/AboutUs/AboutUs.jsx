import { FiPhoneCall } from "react-icons/fi";
import { FaArrowRight } from 'react-icons/fa'
const AboutUs = () => {




  return (
    <div>
      <div className="max-w-7xl md:mx-auto md:px-0 px-5 my-20 grid grid-cols-2 gap-14">

        <div className=" w-full flex justify-center items-center ">
          <div className="overflow-hidden">
            <img className=" rounded-3xl " src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/about_6_1.png" alt="" />
          </div>
          {/* <img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/about_6_2.png" alt="" /> */}
        </div>

        <div className=" w-full  space-y-6">
          <h1 className="w-fit border-t border-b py-1">About Us</h1>

          <h1 className="text-5xl font-semibold font-outfit">Welcome to Realar</h1>

          <h1 className="text-lg text-gray-600">Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis integer dui sed posuere sem. Id molestie mi arcu gravida lorem potenti.</h1>


          <div className="flex gap-5 items-center ">
            <div className="border-r space-y-5 md:w-1/2">
              <h1 className="flex justify-start items-center gap-3"><img src="https://wordpress.themeholy.com/realar/wp-content/themes/realar/assets/img/checkmark.svg" alt="" />Quality real estate services</h1>
              <h1 className="flex justify-start items-center gap-3"><img src="https://wordpress.themeholy.com/realar/wp-content/themes/realar/assets/img/checkmark.svg" alt="" />100% Satisfaction guarantee</h1>
              <h1 className="flex justify-start items-center gap-3"><img src="https://wordpress.themeholy.com/realar/wp-content/themes/realar/assets/img/checkmark.svg" alt="" />Highly professional team</h1>
              <h1 className="flex justify-start items-center gap-3"><img src="https://wordpress.themeholy.com/realar/wp-content/themes/realar/assets/img/checkmark.svg" alt="" />Dealing always on time</h1>

              <button className="border px-6 py-5 rounded-full cursor-pointer bg-[#0D0D0C] text-white hover:translate-x-1 transition-all duration-300 flex justify-center items-center gap-2">More About Realar<FaArrowRight /></button>
            </div>


            <div className="relative space-y-4 md:w-1/2">
              <FiPhoneCall className="bg-[#0D0D0C] w-12 h-12 p-3 rounded-full text-white active:scale-95 duration-500 transition-all" />
              <h1 >Call Us 24/7</h1>
              <a href="tel:+8801303436299" className="hover:text-yellow-400 text-2xl font-semibold transition-all duration-500 flex items-center gap-2">+880 13034-36299</a>
              <img className="absolute -right-14 top-20 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />
            </div>


          </div>
        </div>
      </div>

      <div className="bg-[url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/award-bg-1-1.png')] bg-cover bg-no-repeat bg-center  bg-[#1C2D37] text-white ">
        <div className="flex justify-between items-center max-w-7xl md:mx-auto md:py-25">

          <div className="flex flex-col justify-center items-center gap-3">
            <img className="hover:rotate-y-180 transition-all duration-500 h-15" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/counter-4-1.svg" alt="" />
            <h1 className="text-4xl font-semibold ">850+</h1>
            <h1 className="text-gray-300">ELEGANT APARTMENTS</h1>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <img className="hover:rotate-y-180 transition-all duration-500 h-15" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/counter-4-2.svg" alt="" />
            <h1 className="text-4xl font-semibold ">950+</h1>
            <h1 className="text-gray-300">LUXURY HOUSES</h1>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <img className="hover:rotate-y-180 transition-all duration-500 h-15" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/counter-4-3.svg" alt="" />
            <h1 className="text-4xl font-semibold ">18K+</h1>
            <h1 className="text-gray-300">SATISFIED GUESTS</h1>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <img className="hover:rotate-y-180 transition-all duration-500 h-15" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/counter-4-4.svg" alt="" />
            <h1 className="text-4xl font-semibold ">2K+</h1>
            <h1 className="text-gray-300">HAPPY ONWERS</h1>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default AboutUs