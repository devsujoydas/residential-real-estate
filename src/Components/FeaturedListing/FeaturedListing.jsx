
import FeaturedCard from "./FeaturedCard";
const FeaturedListing = () => {
  return (
    <div>
      <div className="max-w-7xl md:mx-auto md:px-0 px-5 my-20 space-y-7">

        <h1 className="w-fit border-t border-b py-1">Featured Listing</h1>

        <h1 className="text-5xl font-semibold font-outfit">Featured Listing</h1>

        <div className="flex justify-between items-center ">
          <h1>Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis integer dui <br /> sed posuere sem. Id molestie mi arcu gravida lorem potenti.</h1>
          <button className="border px-6 py-4 rounded-full cursor-pointer hover:bg-gray-600 hover:text-white hover:translate-x-1 transition-all duration-300">View All Properties</button>
        </div>


        <div className="grid grid-cols-3 gap-5">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>


      </div>
    </div>
  )
}

export default FeaturedListing