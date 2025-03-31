import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";

const Project = () => {
    return (
        <div>
            <div className=" rounded-3xl overflow-hidden">
                <div className="overflow-hidden rounded-3xl">
                    <img className="hover:scale-110 cursor-pointer rounded-3xl w-full transition-all duration-500" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/07/project_4_1.png" alt="" />
                </div>

                <div className=" pt-5 space-y-7 text-center">
                    <div>
                        <h1 className="text-2xl font-outfit font-semibold ">Residential</h1>
                        <h1 className=" text-gray-500 text-lg">California</h1>
                    </div>

                    <div className="flex px-30 justify-between items-center">
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
                    <hr className="text-gray-300 mx-30" />

                    <p className="text-gray-500 mx-10  text-sm">Telescope kittens revision broomstick your cleansweep ipsum half-blood <br /> flourish poltergeist. A cadogan find juice together bathroom dervish <br /> transfiguration cottage. </p>
                </div>
            </div>
        </div>
    )
}

export default Project