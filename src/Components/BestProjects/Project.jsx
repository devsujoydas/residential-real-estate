
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";

const Project = ({featuredPropertie}) => {

    const { title, location, description, bedrooms, bathrooms, size_sqm, homeUrl } = featuredPropertie;
    return (
        <div>
            <div className=" rounded-3xl overflow-hidden">
                <div className="overflow-hidden rounded-3xl">
                    <img className="hover:scale-110 h-96 cursor-pointer rounded-3xl w-full transition-all duration-500" src={homeUrl} alt="" />
                </div>

                <div className=" pt-5 md:space-y-7 space-y-4 text-center">
                    <div>
                        <h1 className="text-2xl font-outfit font-semibold ">{title}</h1>
                        <h1 className=" text-gray-500 text-lg">{location}</h1>
                    </div>

                    <div className="flex md:px-30 px-10 justify-between items-center">
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
                    <hr className="text-gray-300 mx-30" />

                    <p className="text-gray-500 mx-10  text-sm">{description} </p>
                </div>
            </div>
        </div>
    )
}

export default Project