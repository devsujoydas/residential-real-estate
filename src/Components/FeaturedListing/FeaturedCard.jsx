import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
const FeaturedCard = () => {
    return (
        <div>
            <div className="border border-gray-300 rounded-3xl overflow-hidden">
                <div className="overflow-hidden">
                    <img className="hover:scale-110 transition-all duration-500" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/property3-2.png" alt="" />
                </div>

                <div className="p-6 space-y-4">
                    <h1 className="text-2xl font-outfit font-semibold">Apartment Auckland</h1>
                    <div className="flex justify-start items-center gap-1 ">
                        <IoLocationOutline />
                        <h1 className="text-gray-500">Inner Circular Lamar Street, Houston, Texas</h1>
                    </div>
                    <h1 className="text-gray-500">Egestas Fringilla phasellus faucibus scelerisque eleifend donec. Porta nibh venenatis</h1>

                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2  w-full">
                            <IoBedOutline />
                            <h1>Bed 4</h1>
                        </div>
                        <div className="flex justify-center items-center gap-2 border-gray-300 border-r border-l w-full">
                            <PiBathtubLight />
                            <h1>Bath 2</h1>
                        </div>
                        <div className="flex justify-center items-center gap-2  w-full">
                            <img className="w-4" src="https://wordpress.themeholy.com/realar/wp-content/plugins/realar-core/assets/img/property-icon1-3.svg" alt="" />
                            <h1>1690 sqft</h1>
                        </div>
                    </div>
                    <hr className="text-gray-300" />

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img className="rounded-full" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/property-user-3-1.png" alt="" />
                            <h1>Sujoy Das</h1>
                        </div>
                        <div>
                            <button className='flex justify-center  items-center md:gap-3 gap-2 border md:py-2 py-1 md:px-6 px-4 rounded-full hover:bg-[#1C2D37] hover:border-transparent hover:text-white active:scale-95 transition-all  cursor-pointer'>
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