import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const MemberPage = ({ tMember }) => {
    const { id, name, imgUrl, position } = tMember;


    const navigate = useNavigate()

    return (
        <div onClick={() => { navigate(`/memberDetails/${id}`) }} className="md:rounded-2xl rounded-md overflow-hidden">
            <div className="overflow-hidden">
                <img className="hover:scale-105 transition-all duration-500" src={imgUrl} alt="" />
            </div>

            <div className="md:p-6 p-3 space-y-2 bg-primary text-white flex justify-between md:flex-row flex-col items-center" >
                <div>
                    <h1 className="md:text-2xl font-outfit font-semibold">{name}</h1>
                    <h1 className="md:text-lg text-xs">{position}</h1>
                </div>
                <div className="md:block hidden">
                    <FiPhoneCall className="bg-[#0D0D0C] hover:bg-yellow-400 md:w-12 w-10 md:h-12 h-10 md:p-3 p-2 cursor-pointer rounded-full hover:text-black text-white active:scale-95 duration-500 transition-all" />
                </div>
            </div>
        </div>
    )
}

export default MemberPage