import { FaRegPaperPlane } from "react-icons/fa";
import { FaArrowRight, FaRegUser } from "react-icons/fa6";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex justify-center items-center w-full bg-[#A4B5BA] md:flex-row flex-col-reverse">

        <div className="w-full md:h-[100vh]  flex justify-center items-center md:flex-row flex-col">

          <div className="  space-y-8 lg:p-0 p-5">
            <h1 className="text-8xl font-outfit">404</h1>
            <h1 className="text-3xl font-outfit">This page seems to have slipped <br /> through a time portal</h1>
            <h1>We appologize for any distruction to the space-time continuum. <br /> Feel free to journey back to our homepage</h1>
            <div className='flex  items-center'>
              <button onClick={()=>{navigate('/')}} className='flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-black hover:text-white hover:border-transparent transition-all duration-500 cursor-pointer active:scale-95' type='submit'>Return To Home<FaArrowRight /></button>
            </div>
          </div>
        </div>

        <div className="w-full md:h-[100vh] ">
          <img className="w-full h-full" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/05/error_1_1.png" alt="" />
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage