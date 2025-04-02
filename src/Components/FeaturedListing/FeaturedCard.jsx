import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
const FeaturedCard = ({ featuredPropertie }) => {
    
    const { title, location, description, bedrooms, bathrooms, size_sqm, listed_by, homeUrl } = featuredPropertie;

    return (
        <div>
            <div className="border border-gray-300 rounded-3xl overflow-hidden">
                <div className="overflow-hidden">
                    <img className="hover:scale-110 w-full h-86 transition-all duration-500" src={homeUrl} alt="" />
                </div>

                <div className="p-6 space-y-4">
                    <h1 className="text-2xl font-outfit font-semibold">{title}</h1>
                    <div className="flex justify-start items-center gap-1 ">
                        <IoLocationOutline />
                        <h1 className="text-gray-500">{location}</h1>
                    </div>
                    <h1 className="text-gray-500">{description}</h1>

                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2  w-full">
                            <IoBedOutline />
                            <h1>Bed {bedrooms}</h1>
                        </div>
                        <div className="flex justify-center items-center gap-2 border-gray-300 border-r border-l w-full">
                            <PiBathtubLight />
                            <h1>Bath {bathrooms}</h1>
                        </div>
                        <div className="flex justify-center items-center gap-2  w-full">
                            <img className="w-4" src="https://wordpress.themeholy.com/realar/wp-content/plugins/realar-core/assets/img/property-icon1-3.svg" alt="" />
                            <h1>{size_sqm} sqft</h1>
                        </div>
                    </div>
                    <hr className="text-gray-300" />

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img className="rounded-full" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/property-user-3-1.png" alt="" />
                            <h1>{listed_by}</h1>
                        </div>
                        <div>
                            <button className='btn-text-primary' style={{ padding: "6px 16px" }}>
                                <p>Details </p>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard