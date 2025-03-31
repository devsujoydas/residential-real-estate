import { FaRegPaperPlane } from "react-icons/fa";
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { FiPhoneCall } from "react-icons/fi";


const MemberDetails = () => {
    return (
        <div className='bg-[#A4B5BA]'>
            <Helmet>
                <title>RRE | Teams Details</title>
            </Helmet>

            {/* Navigaiton  */}
            <div className="h-86 flex justify-center items-center text-white" style={{ backgroundImage: "url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/breadcumb-bg.png')" }}>
                <div className="max-w-7xl mx-auto space-y-5">
                    <h1 className="text-5xl font-semibold  text-center">Team Details</h1>
                    <h1 className="text-xl flex justify-center items-center gap-2"><Link to={"/"} className="hover:text-yellow-400 active:scale-95 transition-all">Home</Link> <FaArrowRight />Team Details</h1>
                </div>
            </div>


            {/* Member card  */}
            <div className='max-w-7xl md:mx-auto lg:px-0 px-5 grid lg:grid-cols-3  gap-10 py-20'>

                {/* member img  */}
                <div className='col-span-1'>
                    <div>
                        <div className="border border-gray-300 rounded-3xl overflow-hidden">
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
                </div>

                {/* member details  */}
                <div className='col-span-2 space-y-10'>
                    <h1 className='font-outfit text-3xl font-semibold'>Building lasting relationships based on trust and integrity is at the core of Scarlett Gray’s practice. He takes pride in providing exceptional service.</h1>

                    <div className="flex items-center  gap-30">
                        <div className=" flex justify-between items-center gap-5">
                            <div className="grid gap-2">
                                <h1 className="font-semibold">Position:</h1>
                                <h1 className="font-semibold">Experience:</h1>
                                <h1 className="font-semibold">Locatotion:</h1>
                                <h1 className="font-semibold">Practice Area:</h1>
                            </div>
                            <div className="grid gap-2">
                                <h1>Rental Property Expert</h1>
                                <h1>15+ Years</h1>
                                <h1>New Jersy, New York</h1>
                                <h1>Property Seller</h1>
                            </div>
                        </div>
                        <div className=" flex justify-between items-center gap-5">
                            <div className="grid gap-2">
                                <h1 className="font-semibold">Project Done:</h1>
                                <h1 className="font-semibold">Phone:</h1>
                                <h1 className="font-semibold">Locatotion:</h1>
                                <h1 className="font-semibold">Email:</h1>
                            </div>
                            <div className="grid gap-2">
                                <h1>200+ Property</h1>
                                <h1>+0123- 456 789</h1>
                                <h1>New Jersy, New York</h1>
                                <h1>example@realar.com</h1>
                            </div>
                        </div>
                    </div>

                    <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        <br />
                        <br />
                        Realar rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <h1 className="text-4xl font-outfit font-semibold">Book Business Solutions</h1>
                    <form className='grid grid-cols-1 gap-5'>
                        <input className='w-full border border-gray-400 p-5 rounded-full' type="text" placeholder='Your Name*' />
                        <input className='w-full border border-gray-400 p-5 rounded-full' type="email" placeholder='Your Email*' />
                        <select className='w-full border border-gray-400 p-5 rounded-full' name="" id="">
                            <option value="Real Estate">Real Estate</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Residential">Residential</option>
                            <option value="Deluxe">Deluxe</option>
                        </select>

                        <textarea className='w-full border border-gray-400 p-5 rounded-2xl' name="" id="" placeholder='Type Your Message'></textarea>

                        <div className='flex justify-center items-center'>
                            <button className='border px-6 py-4 flex justify-center items-center gap-2 rounded-full bg-black text-white  hover:bg-white hover:text-black cursor-pointer active:scale-95 transition-all' type='submit'>Submit Message<FaRegPaperPlane /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MemberDetails