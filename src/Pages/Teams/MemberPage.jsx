import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const MemberPage = ({ tMember }) => {
    const { id, name, imgUrl, position } = tMember;


    const navigate = useNavigate()

    return (
        <div>
            <div onClick={()=>{navigate(`/memberDetails/${id}`)   }} className="border border-gray-300 rounded-3xl overflow-hidden">
                <div className="overflow-hidden">
                    <img className="hover:scale-105 transition-all duration-500" src={imgUrl} alt="" />
                </div>

                <div className="p-6 space-y-2 bg-primary text-white flex justify-between items-center" >
                    <div>
                        <h1 className="text-2xl font-outfit font-semibold">{name}</h1>
                        <h1>{position}</h1>
                    </div>
                    <div>
                        <FiPhoneCall className="bg-[#0D0D0C] hover:bg-yellow-400 w-12 h-12 p-3 cursor-pointer rounded-full hover:text-black text-white active:scale-95 duration-500 transition-all" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberPage