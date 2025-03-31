import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Member = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div onClick={()=>{navigate("/memberDetails")}} className="border border-gray-300 rounded-3xl overflow-hidden">
                <div className="overflow-hidden">
                    <img className="hover:scale-105 transition-all duration-500" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/team_2_4.png" alt="" />
                </div>

                <div className="p-6 space-y-2 bg-[#A4B5BA] flex justify-between items-center" >
                    <div>
                        <h1 className="text-2xl font-outfit font-semibold">Michel Smith</h1>
                        <h1>Property Expert</h1>
                    </div>
                    <div>
                        <FiPhoneCall className="bg-[#0D0D0C] hover:bg-yellow-400 w-12 h-12 p-3 cursor-pointer rounded-full hover:text-black text-white active:scale-95 duration-500 transition-all" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member