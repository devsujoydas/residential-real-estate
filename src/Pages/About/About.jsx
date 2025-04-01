import { Helmet } from "react-helmet"
import { FaArrowRight } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { AiOutlineDollar } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { TbMailDollar } from "react-icons/tb";

const About = () => {
  return (
    <div className="bg-secondary ">
      <Helmet>
        <title>RRE | About</title>
      </Helmet>

      {/* About Navigation  */}
      <div className="h-86 flex justify-center items-center text-white" style={{ backgroundImage: "url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/breadcumb-bg.png')" }}>
        <div className="max-w-7xl mx-auto space-y-5">
          <h1 className="text-5xl font-semibold  text-center">About Us</h1>
          <h1 className="text-xl flex justify-center items-center gap-2"><Link to={"/"} className="hover:text-yellow-400 active:scale-95 transition-all">Home</Link> <FaArrowRight />About Us</h1>
        </div>
      </div>

      {/* Realar Vission & Mission  */}
      <div className="md:py-16 py-10 lg:px-0 px-5">
        <div className="max-w-7xl mx-auto space-y-5">

          <div className=" flex justify-center items-center gap-5 lg:gap-20 md:flex-row flex-col-reverse">
            <div className="md:w-1/2 space-y-5">
              <h1 className="md:text-5xl text-3xl font-outfit font-semibold">Realar Vission & Mission</h1>
              <p className="leading-8 text-gray-700">You are the center of our process. Your needs, your wants, and your goals. We actively listen, always keep it even keel — never rushing you or pushing something you don’t need. <br />
                Full transparency is our goal. We stay connected while building your home, clearly outlining next steps and collaborating with you to select personal design details. From day one, your peace of mind is our highest priority.</p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-3xl overflow-hidden">
                <img className="w-full  hover:scale-110 transition-all duration-500 " src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/about_3_1.png" alt="" />
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-center gap-5 lg:gap-20 md:flex-row flex-col">
            <div className="md:w-1/2">
              <div className="rounded-3xl overflow-hidden">
                <img className="w-full  hover:scale-110 transition-all duration-500 " src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/about_3_2.png" alt="" />
              </div>
            </div>
            <div className="md:w-1/2 space-y-5">
              <p className="leading-8 text-gray-700">We design homes for how people live. Centered Design is our philosophy, our approach to creating spaces that energize and inspire. <br />
                Our floor plan designs focus on three elements: natural light, color, and clean air all qualities that support your wellbeing and energy levels. When you walk into our homes, you’ll see design that puts people first, and more importantly, you’ll feel it.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Why Choose Us? */}
      <div className="bg-primary text-white py-5 relative">

        <img className="absolute bg-gray-400 rounded-full left-50 bottom-10  aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />
        <img className="absolute bg-gray-400 rounded-full right-10 top-10 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />

        <div className="max-w-7xl md:mx-auto md:px-0 px-5 my-20 space-y-7">

          <h1 className="md:text-5xl text-3xl font-semibold font-outfit">Why Choose Us?</h1>

          <div className="flex justify-between items-center md:flex-row flex-col">
            <h1 className="md:text-md text-sm">We are a real estate firm with over 20 years of expertise, and our main <br /> goal is to provide amazing locations to our partners and clients. Within the <br /> luxury real estate market, our agency offers customized solutions.</h1>
            <button className="btn-text-primary">Contact Us<FaArrowRight /></button>
          </div>



          <div className="grid md:grid-cols-3 gap-5 pt-10">

            {/* card  */}
            <div className=" space-y-4 text-white rounded-3xl">
              <div className="hover:bg-[#A4B5BA] border text-[#A4B5BA] hover:rotate-y-180 transition-all duration-500 w-fit p-6 rounded-full">
                <AiOutlineDollar className="text-5xl text-[#A4B5BA]  hover:text-black" />
              </div>
              <h1 className="text-2xl font-outfit font-semibold">Property Valuation</h1>
              <p className="text-gray-400 text-lg">All living, dining, kitchen and play areas were devised by attached to the home.</p>
              <div className="rounded-3xl overflow-hidden">
                <img className=" hover:scale-110 transition-all duration-500" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/1-1-2.png" alt="" />
              </div>
            </div>

            <div className=" space-y-4 text-white rounded-3xl">
              <div className="hover:bg-[#A4B5BA] border text-[#A4B5BA] hover:rotate-y-180 transition-all duration-500 w-fit p-6 rounded-full">
                <IoHome className="text-5xl text-[#A4B5BA]  hover:text-black" />
              </div>
              <h1 className="text-2xl font-outfit font-semibold">Property Management</h1>
              <p className="text-gray-400 text-lg">Generous amounts of south facing glazing maximize the solar gains for most of the year.</p>
              <div className="rounded-3xl overflow-hidden">
                <img className=" hover:scale-110 transition-all duration-500" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/1-3.png" alt="" />
              </div>
            </div>

            <div className=" space-y-4 text-white rounded-3xl">
              <div className="hover:bg-[#A4B5BA] border text-[#A4B5BA] hover:rotate-y-180 transition-all duration-500 w-fit p-6 rounded-full">
                <TbMailDollar className="text-5xl text-[#A4B5BA]  hover:text-black" />
              </div>
              <h1 className="text-2xl font-outfit font-semibold">Invest Opportunities</h1>
              <p className="text-gray-400 text-lg">All-inclusive real estate services to facilitate the easy management of your properties.</p>
              <div className="rounded-3xl overflow-hidden">
                <img className=" hover:scale-110 transition-all duration-500" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/1-1-2.png" alt="" />
              </div>
            </div>


          </div>




        </div>
      </div>

      {/* brand logos  */}
      <div className="max-w-7xl mx-auto lg:py-20 lg:p-0 p-5">
        <div className='grid grid-cols-3 md:grid-cols-6 gap-10 pt-10'>

          <div>
            <img className='hover:scale-110 transition-all duration-300' src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/brand_2_1.svg" alt="" />
          </div>

          <div>
            <img className='hover:scale-110 transition-all duration-300' src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/brand_2_2.svg" alt="" />
          </div>

          <div>
            <img className='hover:scale-110 transition-all duration-300' src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/brand_2_3.svg" alt="" />
          </div>

          <div>
            <img className='hover:scale-110 transition-all duration-300' src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/brand_2_4.svg" alt="" />
          </div>

          <div>
            <img className='hover:scale-110 transition-all duration-300' src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/brand_2_5.svg" alt="" />
          </div>

          <div>
            <img className='hover:scale-110 transition-all duration-300' src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/brand_2_6.svg" alt="" />
          </div>

        </div>
      </div>

    </div>
  )
}

export default About