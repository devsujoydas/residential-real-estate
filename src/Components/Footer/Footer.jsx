import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

const Footer = () => {
  const socialBtnStyle = "border border-black w-9 h-9 p-2 rounded-full text-black hover:bg-gray-900 hover:text-white active:scale-95 duration-500 transition-all "
  const getTouchBtn = "border border-gray-300 w-9 h-9 p-2 rounded-full text-gray-300 active:scale-95 duration-500 transition-all"
  const footerBtns = "hover:text-yellow-400 transition-all duration-500 flex items-center gap-2"

  return (
    <div>
      <div className="bg-primary text-gray-400 md:py-20 py-10">

        <div className="max-w-7xl md:mx-auto px-5 lg:px-0 flex justify-between lg:flex-row flex-col gap-10">

          {/* Logo  */}
          <div className="grid gap-8">
            <Link to="/">
              <img className="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/logo-white2.svg" alt="Logo" />
            </Link>
            <p>Rapidiously myocardinate cross-platform <br /> intellectual capital model. Appropriately create <br /> interactive infrastructures</p>
          </div>

          {/* Get In Touch  */}
          <div className="grid md:gap-5 gap-3">
            <h1 className="text-2xl font-semibold text-white font-outfit">Get In Touch</h1>

            <div className="flex gap-4 items-center">
              <GrLocation className={getTouchBtn} />
              <p>789 Inner Lane, Holy park,<br />California, USA</p>
            </div>

            <div className="flex gap-4 items-center">
              <FiPhoneCall className={getTouchBtn} />
              <div className="grid grid-cols-1 gap-1">
                <a href="tel:+8801303436299" className={footerBtns}>+880 13034-36299</a>
                <a href="tel:+8801934160934" className={footerBtns}>+880 1934-160934</a>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <IoMailUnreadOutline className={getTouchBtn} />
              <div className="grid grid-cols-1 gap-1">
                <a href="mailto:sdsujoy920243@gmail.com" className={footerBtns}>sdsujoy920243@gmail.com</a>
                <a href="mailto:sujoydaspc2023@gmail.com" className={footerBtns}>sujoydaspc2023@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Usefull Link  */}
          <div className="grid gap-5">
            <h1 className="text-2xl font-semibold text-white font-outfit">Usefull Link</h1>

            <div className="flex flex-col space-y-2 md:space-y-4">
              <a href="/" className={footerBtns}><MdArrowForwardIos className="hover:translate-x-1 transition-all duration-300" />Pricing Page</a>
              <a href="/" className={footerBtns}><MdArrowForwardIos className="hover:translate-x-1 transition-all duration-300" />Privacy & Policy</a>
              <a href="/" className={footerBtns}><MdArrowForwardIos className="hover:translate-x-1 transition-all duration-300" />What we do</a>
              <a href="/" className={footerBtns}><MdArrowForwardIos className="hover:translate-x-1 transition-all duration-300" />Upcoming</a>
              <a href="/" className={footerBtns}><MdArrowForwardIos className="hover:translate-x-1 transition-all duration-300" />Apply</a>
            </div>
          </div>


          {/* Explore  */}
          <div className="grid gap-5">
            <h1 className="text-2xl font-semibold text-white font-outfit">Explore</h1>

            <div className="flex flex-col space-y-2 md:space-y-4">
              <a href="/" className={footerBtns}><MdArrowForwardIos className="hover:translate-x-1 transition-all duration-300" />All Properties</a>
              <a href="/" className={footerBtns}><MdArrowForwardIos className="hover:translate-x-1 transition-all duration-300" />All Author</a>
              <a href="/" className={footerBtns}><MdArrowForwardIos className="hover:translate-x-1 transition-all duration-300" />Our Team</a>
              <a href="/" className={footerBtns}><MdArrowForwardIos className="hover:translate-x-1 transition-all duration-300" />Our Pricing</a>
              <a href="/" className={footerBtns}><MdArrowForwardIos className="hover:translate-x-1 transition-all duration-300" />Our Prodcts</a>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-secondary md:px-0 px-5">
        <div className=" py-5 flex justify-between items-center md:flex-row flex-col gap-2 max-w-7xl mx-auto">
          <h1>&copy;  2025 By <a href="www.facebook.com/devsujoy36" className="font-semibold">Sujoy Das</a>. All Rights Reserved.</h1>
          <div className="flex gap-4">
            <Link to={"/"}> <FaFacebookF className={socialBtnStyle} /></Link>
            <Link to={"/"}><FaYoutube className={socialBtnStyle} /></Link>
            <Link to={"/"}><FiGithub className={socialBtnStyle} /></Link>
            <Link to={"/"}><FaInstagram className={socialBtnStyle} /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer