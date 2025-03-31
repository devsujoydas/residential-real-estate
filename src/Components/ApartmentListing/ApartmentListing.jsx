import { FaArrowRight } from "react-icons/fa6";
const ApartmentListing = () => {
  return (
    <div className="relative">
        <img className="absolute left-10 -top-10 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />
        {/* <img className="absolute left-10 -bottom-20 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_3.png" alt="" /> */}
        <img className="absolute right-14 bottom-0 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />
      
      
      <div className="max-w-7xl md:mx-auto md:px-0 px-5 my-20 space-y-7">

        <h1 className="w-fit border-t border-b py-1">More than 745K apartment listing</h1>

        <div className="flex justify-between items-center ">
          <h1 className="text-5xl font-semibold font-outfit">Buy, Rent & Sell</h1>

          <button className="border px-8 py-4 rounded-full cursor-pointer hover:bg-[#0D0D0C] hover:text-white hover:translate-x-1 transition-all duration-300 flex justify-center items-center gap-2 active:scale-95 ">View all Properties<FaArrowRight /></button>
        </div>


        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">

          <div className="bg-[#0D0D0C] text-center space-y-4 text-white rounded-3xl p-8 flex flex-col justify-center items-center">
            <div className="bg-[#33424B] p-6 rounded-full">
              <img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/rent-icon1-1.svg" alt="" />
            </div>
            <h1 className="text-2xl font-outfit font-semibold">Buy a home</h1>
            <p className="text-gray-400 text-lg">Discover your perfect living place by looking through Homy's 2 million+ residences.</p>
            <button className="border border-white px-8 py-4 rounded-full cursor-pointer text-white hover:translate-x-1 hover:bg-white hover:text-black active:scale-95 transition-all duration-300 flex justify-center items-center gap-2">Find Home<FaArrowRight /></button>
          </div>

          <div className="bg-[#0D0D0C] text-center space-y-4 text-white rounded-3xl p-8 flex flex-col justify-center items-center">
            <div className="bg-[#33424B] p-6 rounded-full">
              <img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/rent-icon1-2.svg" alt="" />
            </div>
            <h1 className="text-2xl font-outfit font-semibold">Rent a home</h1>
            <p className="text-gray-400 text-lg">Discover your perfect living place by looking through Homy's 2 million+ residences.</p>
            <button className="border border-white px-8 py-4 rounded-full cursor-pointer text-white hover:translate-x-1 hover:bg-white hover:text-black active:scale-95 transition-all duration-300 flex justify-center items-center gap-2">Find Home<FaArrowRight /></button>
          </div>

          <div className="bg-[#0D0D0C] text-center space-y-4 text-white rounded-3xl p-8 flex flex-col justify-center items-center">
            <div className="bg-[#33424B] p-6 rounded-full">
              <img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/rent-icon1-1.svg" alt="" />
            </div>
            <h1 className="text-2xl font-outfit font-semibold">Sell a home</h1>
            <p className="text-gray-400 text-lg">Discover your perfect living place by looking through Homy's 2 million+ residences.</p>
            <button className="border border-white px-8 py-4 rounded-full cursor-pointer text-white hover:translate-x-1 hover:bg-white hover:text-black active:scale-95 transition-all duration-300 flex justify-center items-center gap-2">Find Home<FaArrowRight /></button>
          </div>

        </div>


      </div>

    </div>
  )
}

export default ApartmentListing