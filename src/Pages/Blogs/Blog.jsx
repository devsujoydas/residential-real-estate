import { FaArrowRight, FaRegUser } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div className="space-y-8">
            <div className="rounded-3xl overflow-hidden">
                <img className="hover:scale-110 transition-all duration-500" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/06/Untitled-1.png" alt="" />
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-5">
                    <h1 className="flex items-center gap-2"><FaRegUser className="font-semibold" />Realar</h1>
                    <h1 className="flex items-center gap-2"><MdOutlineDateRange className="font-semibold" />June 9, 2024</h1>
                    <h1 className="flex items-center gap-2"><BsHouse className="font-semibold" />Property</h1>
                </div>
                <Link to={"/blogDetails"} className="text-3xl hover:underline  transition-all duration-500 hover:font-bold font-semibold font-outfit">Emphasizes the importance of continuous learning and intellectual</Link>
                <p className="text-gray-700 mt-3">Relar Residence promotes sustainable transportation options, with dedicated spaces. Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we’ll explore the green innovations seamlessly integrated into the fabric of EcoLand, creating a unique</p>
            </div>
            <div>
                <button className="border px-8 py-4 rounded-full cursor-pointer hover:bg-[#0D0D0C] hover:text-white hover:translate-x-1 transition-all duration-300 flex justify-center items-center gap-2 active:scale-95 ">READ MORE<FaArrowRight /></button>
            </div>
        </div>
    )
}

export default Blog