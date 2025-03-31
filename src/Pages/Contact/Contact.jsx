import { Helmet } from "react-helmet"
import { FaArrowRight } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import ScheduleVisit from "../../Components/Awards/ScheduleVisit";
const Contact = () => {


  const contactBtnStyle = "hover:text-yellow-400 transition-all duration-500 flex items-center gap-2 text-gray-300"
  return (
    <div className="bg-[#A4B5BA]">
      <Helmet>
        <title>RRE | Contact</title>
      </Helmet>


      {/* Navigaiton  */}
      <div className="h-96 flex justify-center items-center text-white" style={{ backgroundImage: "url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/breadcumb-bg.png')" }}>
        <div className="max-w-7xl mx-auto space-y-5">
          <h1 className="text-5xl font-semibold  text-center">Contact</h1>
          <h1 className="text-xl flex justify-center items-center gap-2"><Link to={"/"} className="hover:text-yellow-400 active:scale-95 transition-all">Home</Link> <FaArrowRight />Contact </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto lg:py-26 py-10 lg:px-24 px-5 space-y-5">


        {/* Get In Touch  */}
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="border-t border-b w-fit text-xl  ">Get In Touch</h1>
          <h1 className="md:text-5xl text-3xl font-outfit font-semibold ">Our Contact Information</h1>
        </div>


        {/* Address container  */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:mt-10 text-white ">

          <div className="bg-[#1C2D37] p-5 flex items-center gap-5 rounded-xl">
            <div className="col-span-1 text-6xl flex  items-center">
              <IoLocationOutline className="border p-3 rounded-full" />
            </div>
            <div className="col-span-2 space-y-2">
              <h1 className="text-2xl font-outfit  ">Our Address</h1>
              <p className="text-gray-300">2690 Hiltona Street Victoria Road, New York, Canada</p>
            </div>
          </div>

          <div className="bg-[#1C2D37] p-5 flex items-center gap-5 rounded-xl">
            <div className="col-span-1 text-6xl flex items-center">
              <LuPhoneCall className="border p-3 rounded-full" />
            </div>
            <div className="col-span-2 grid grid-cols-1 gap-1">
              <h1 className="text-2xl font-outfit  ">Phone Number</h1>
              <a href="tel:+8801303436299" className={contactBtnStyle}>+880 13034-36299</a>
              <a href="tel:+8801934160934" className={contactBtnStyle}>+880 1934-160934</a>
            </div>
          </div>

          <div className="bg-[#1C2D37] p-5 flex items-center gap-5 rounded-xl">
            <div className="col-span-1 text-6xl flex items-center">
              <MdOutlineMarkEmailRead className="border p-3 rounded-full" />
            </div>
            <div className="col-span-2 grid grid-cols-1 gap-1">
              <h1 className="text-2xl font-outfit  ">Email Address</h1>
              <a href="mailto:sdsujoy920243@gmail.com" className={contactBtnStyle}>sdsujoy920243@gmail.com</a>
              <a href="mailto:sujoydaspc2023@gmail.com" className={contactBtnStyle}>sujoydaspc2023@gmail.com</a>
            </div>
          </div>


        </div>

      </div>


      {/* Schedule a Visit  */}
      <div className="bg-white lg:py-20 py-5 lg:px-0 px-5">
      <div className="border-t rounded-3xl max-w-7xl mx-auto">
        <ScheduleVisit />
      </div>
      </div>
    </div>
  )
}

export default Contact