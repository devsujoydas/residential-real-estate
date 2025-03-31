

import { FaInstagram } from "react-icons/fa6";
const InstaImgs = () => {
    return (
        <div
            className="relative min-h-86 hover:-translate-x-2 transition-all duration-500 bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: "url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/insta_1_1.png')" }}
        >

            <div className="text-white hover:text-yellow-400 text-7xl top-[40%] right-[40%] absolute transition-all" ><FaInstagram className="active:scale-95 transition-all"/></div>

        </div>
    )
}

export default InstaImgs