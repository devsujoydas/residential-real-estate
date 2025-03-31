import { Helmet } from "react-helmet"
import { FaArrowRight } from 'react-icons/fa'
import { Link } from "react-router-dom"
import Blog from "./Blog"
import { FaRegBuilding } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

const Blogs = () => {
  return (
    <div className="bg-[#A4B5BA]">
      <Helmet>
        <title>RRE | Blogs</title>
      </Helmet>


      {/* Navigaiton  */}
      <div className="h-86 flex justify-center items-center text-white" style={{ backgroundImage: "url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/breadcumb-bg.png')" }}>
        <div className="max-w-7xl mx-auto space-y-5">
          <h1 className="text-5xl font-semibold  text-center">Latest News</h1>
          <h1 className="text-xl flex justify-center items-center gap-2"><Link to={"/"} className="hover:text-yellow-400 active:scale-95 transition-all">Home</Link> <FaArrowRight />Blogs </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 grid grid-cols-3 gap-8 ">

        {/* Blog Container  */}
        <div className="col-span-2 grid gap-16">
          <Blog />
          <Blog />
        </div>

        <div className="col-span-1 flex flex-col gap-8 ">

          {/* Search Bar  */}
          <div className="bg-[#1C2D37] relative p-8 rounded-2xl">
            <input type="text" placeholder="Search Here...." className=" rounded-full p-4 w-full bg-[#A4B5BA] text-black placeholder:text-black" />
            <div className="text-white font-semibold text-xl border-l-2 pl-2 absolute right-12 bottom-12 active:scale-95 transition-all duration-500">
              <IoSearch />
            </div>
          </div>


          {/* Post Categories  */}
          <div className="bg-[#1C2D37] text-white p-8 rounded-2xl">
            <h1 className="text-2xl font-outfit font-semibold mb-5 pb-2 border-b-2 border-gray-300 ">Post Categories</h1>

            <div className="grid grid-cols-1 gap-5">

              <button className="flex justify-between items-center border-gray-500  border-b pb-3 hover:text-yellow-400 cursor-pointer active:scale-95 transition-all duration-500">
                <p className="flex justify-center items-center gap-2"><FaRegBuilding className="" />Apartment</p>
                <p>(1)</p>
              </button>

              <button className="flex justify-between items-center border-gray-500  border-b pb-3 hover:text-yellow-400 cursor-pointer active:scale-95 transition-all duration-500">
                <p className="flex justify-center items-center gap-2"><FaRegBuilding className="" />Banglow</p>
                <p>(2)</p>
              </button>

              <button className="flex justify-between items-center border-gray-500  border-b pb-3 hover:text-yellow-400 cursor-pointer active:scale-95 transition-all duration-500">
                <p className="flex justify-center items-center gap-2"><FaRegBuilding className="" />Modern Houses</p>
                <p>(4)</p>
              </button>

              <button className="flex justify-between items-center border-gray-500  border-b pb-3 hover:text-yellow-400 cursor-pointer active:scale-95 transition-all duration-500">
                <p className="flex justify-center items-center gap-2"><FaRegBuilding className="" />Property</p>
                <p>(5)</p>
              </button>

              <button className="flex justify-between items-center border-gray-500  border-b pb-3 hover:text-yellow-400 cursor-pointer active:scale-95 transition-all duration-500">
                <p className="flex justify-center items-center gap-2"><FaRegBuilding className="" />Real Estate</p>
                <p>(7)</p>
              </button>

            </div>
          </div>


          {/* Recent Post  */}
          <div className="bg-[#1C2D37] text-white p-8 rounded-2xl">
            <h1 className="text-2xl font-outfit font-semibold mb-5 pb-2 border-b-2 border-gray-300 ">Recent Post</h1>

            <div className="grid grid-cols-1 gap-5">

              <div className="grid grid-cols-3 ">
                <div className="col-span-1 rounded-lg overflow-hidden">
                  <img className="rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer " src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/06/Untitled-1-85x85.png" alt="" />
                </div>
                <div className="col-span-2 ">
                  <h1 className="text-lg font-outfit hover:text-yellow-400 cursor-pointer hover:underline transition-all duration-500">Emphasizes the importance of continuous learning</h1>
                  <h1 className="flex items-center gap-2"><MdOutlineDateRange className="font-semibold" />June 8, 2024</h1>
                </div>
              </div>

              <div className="grid grid-cols-3 ">
                <div className="col-span-1 rounded-lg overflow-hidden">
                  <img className="rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer " src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/06/Untitled-1-85x85.png" alt="" />
                </div>
                <div className="col-span-2 ">
                  <h1 className="text-lg font-outfit hover:text-yellow-400 cursor-pointer hover:underline transition-all duration-500">Enrich Your Mind Envision Your Future</h1>
                  <h1 className="flex items-center gap-2"><MdOutlineDateRange className="font-semibold" />June 9, 2024</h1>
                </div>
              </div>

              <div className="grid grid-cols-3 ">
                <div className="col-span-1 rounded-lg overflow-hidden">
                  <img className="rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer " src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/06/Untitled-1-85x85.png" alt="" />
                </div>
                <div className="col-span-2 ">
                  <h1 className="text-lg font-outfit hover:text-yellow-400 cursor-pointer hover:underline transition-all duration-500">University class starting soon while the</h1>
                  <h1 className="flex items-center gap-2"><MdOutlineDateRange className="font-semibold" />June 10, 2024</h1>
                </div>
              </div>

            </div>
          </div>


          {/* Popular Tags */}
          <div className="bg-[#1C2D37] text-white p-8 rounded-2xl">
            <h1 className="text-2xl font-outfit font-semibold mb-5 pb-2 border-b-2 border-gray-300 ">Popular Tag</h1>


            <div className="flex flex-wrap gap-2">
              <Link className="hover:bg-yellow-400 bg-gray-700 hover:text-black px-2 py-1 rounded-sm transition-all duration-500" to={""}>Apartment</Link>
              <Link className="hover:bg-yellow-400 bg-gray-700 hover:text-black px-2 py-1 rounded-sm transition-all duration-500" to={""}>Buyer</Link>
              <Link className="hover:bg-yellow-400 bg-gray-700 hover:text-black px-2 py-1 rounded-sm transition-all duration-500" to={""}>Innovate</Link>
              <Link className="hover:bg-yellow-400 bg-gray-700 hover:text-black px-2 py-1 rounded-sm transition-all duration-500" to={""}>Luxury</Link>
              <Link className="hover:bg-yellow-400 bg-gray-700 hover:text-black px-2 py-1 rounded-sm transition-all duration-500" to={""}>Modern</Link>
              <Link className="hover:bg-yellow-400 bg-gray-700 hover:text-black px-2 py-1 rounded-sm transition-all duration-500" to={""}>Real estate</Link>
              <Link className="hover:bg-yellow-400 bg-gray-700 hover:text-black px-2 py-1 rounded-sm transition-all duration-500" to={""}>Sale</Link> 
            </div>







          </div>




        </div>
      </div>




    </div>
  )
}

export default Blogs