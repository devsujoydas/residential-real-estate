import { FaArrowRight } from "react-icons/fa6";
const ApartmentListing = () => {
  return (
    <div className="relative">
        <img className="absolute md:block hidden left-10 -top-10 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />
        <img className="absolute md:block hidden right-14 bottom-0 aboutus-rotator" id="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/section_shape_2_1-1.png" alt="" />
      
      
      <div className="max-w-7xl md:mx-auto md:px-0 px-5 md:my-20 my-10 space-y-7">

        <h1 className="w-fit border-t border-b py-1">More than 745K apartment listing</h1>

        <div className="flex justify-between items-center md:flex-row flex-col gap-5">
          <h1 className="text-5xl font-semibold font-outfit">Buy, Rent & Sell</h1>

          <button className="btn-text-primary ">View all Properties<FaArrowRight /></button>
        </div>


        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">

          <div className="bg-primary text-center space-y-4 text-white rounded-3xl p-8 flex flex-col justify-center items-center">
            <div className="bg-[#33424B] p-6 rounded-full">
              <img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/rent-icon1-1.svg" alt="" />
            </div>
            <h1 className="text-2xl font-outfit font-semibold">Buy a home</h1>
            <p className="text-gray-400 text-lg">Discover your perfect living place by looking through Homy's 2 million+ residences.</p>
            <button className="btn-text-primary border">Find Home<FaArrowRight /></button>
          </div>

          <div className="bg-primary text-center space-y-4 text-white rounded-3xl p-8 flex flex-col justify-center items-center">
            <div className="bg-[#33424B] p-6 rounded-full">
              <img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/rent-icon1-2.svg" alt="" />
            </div>
            <h1 className="text-2xl font-outfit font-semibold">Rent a home</h1>
            <p className="text-gray-400 text-lg">Discover your perfect living place by looking through Homy's 2 million+ residences.</p>
            <button className="btn-text-primary border">Find Home<FaArrowRight /></button>
          </div>

          <div className="bg-primary text-center space-y-4 text-white rounded-3xl p-8 flex flex-col justify-center items-center">
            <div className="bg-[#33424B] p-6 rounded-full">
              <img src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/rent-icon1-1.svg" alt="" />
            </div>
            <h1 className="text-2xl font-outfit font-semibold">Sell a home</h1>
            <p className="text-gray-400 text-lg">Discover your perfect living place by looking through Homy's 2 million+ residences.</p>
            <button className="btn-text-primary border">Find Home<FaArrowRight /></button>
          </div>

        </div>


      </div>

    </div>
  )
}

export default ApartmentListing