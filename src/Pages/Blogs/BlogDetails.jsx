import { Link, useParams } from "react-router-dom"

import { FaArrowRight } from 'react-icons/fa'
import { Helmet } from "react-helmet"

import { FaRegBuilding } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { BsHouse } from "react-icons/bs";
import { TiArrowBack } from "react-icons/ti";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BlogDetails = () => {


    const { blog } = useContext(AuthContext)
    console.log(blog);

    const paramsId = useParams()
    console.log(paramsId.id);

    const blogForDetails = blog.filter(blg => blg.id === paramsId.id);
    console.log(blogForDetails);

    return (
        <div className='bg-secondary'>
            <Helmet >
                <title>RRE | Teams Details</title>
            </Helmet>

            {/* Navigaiton  */}
            <div className="h-86 flex justify-center items-center text-white" style={{ backgroundImage: "url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/breadcumb-bg.png')" }}>
                <div className="max-w-7xl mx-auto space-y-5">
                    <h1 className="lg:text-5xl text-3xl font-semibold  text-center font-outfit  ">University class starting soon while the lovely valley team work</h1>
                    <h1 className=" md:text-xl text-xs flex justify-center items-center gap-2">
                        <Link to={"/"} className="hover:text-yellow-400 active:scale-95 transition-all">Home</Link>
                        <FaArrowRight />
                        <Link to={"/blogs"} className="hover:text-yellow-400 active:scale-95 transition-all">Blogs</Link>
                        <FaArrowRight /> University class ...
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto lg:px-0 px-5 lg:py-20 py-10 grid lg:grid-cols-3 gap-8 ">

                {/* Blog Container  */}
                <div className="lg:col-span-2 grid gap-16">
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
                            <h1 className="md:text-4xl text-2xl  font-semibold font-outfit">Emphasizes the importance of continuous learning and intellectual</h1>
                            <p className="text-gray-700 mt-3">Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we’ll explore the green innovations seamlessly integrated into the fabric of EcoLand, creating a unique and eco-friendly living experience for its residents.
                                <br /> <br />
                                A platform dedicated to exploring the transformative power of education. We believe that education is not only a means to acquire knowledge but also a catalyst for personal growth, societal progress, and global development. In this blog, we aim to inspire, inform, and engage readers in conversations about the latest trends, insights, and innovations in the field of education.
                                <br /> <br />
                                Dinning: Prepare a dinner using fresh ingredients from your own garden or the local CSA program. The energy-efficient appliances in your kitchen make cooking a breeze while minimizing your overall energy consumption. Share a meal with neighbors, The quiet night offers a peaceful ambiance, reinforcing the community’s commitment to a sustainable, low-impact lifestyle.
                                <br /> <br />
                                Living sustainably at Realar Residence is more than a choice; it’s an immersive experience that shapes every moment of your day. From the moment you wake up in your solar-powered home to the evening gatherings with like-minded neighbors</p>
                            <h1 className="md:text-4xl text-2xl font-semibold font-outfit">Residence is not just a place to live it’s asustainable way of life.</h1>
                            <p className="text-gray-700 mt-3">Whether you work from home or commute to a nearby office, the energy-efficient features of your home contribute to a productive and eco-conscious workday. Smart home systems allow you to monitor and control energy usage, ensuring that your environmental impact remains minimal.</p>
                            <div className="rounded-2xl overflow-hidden">
                                <img className="rounded-2xl hover:scale-110 transition-all duration-500" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/blog_inner_1.png" alt="" />
                            </div>
                            <p className="text-gray-700 mt-3">Buying a first home may be an exciting and daunting experience for those who have never done it before. This blog article serves as a thorough guide to help you through the process of buying your first house. We’re here to provide you with useful advice and insights to help you navigate every step of the home-buying process, from comprehending the financial elements to luxury about its all realar properties nuances
                                <br /> <br />
                                Buying a first home may be an exciting and daunting experience for those who have never done it before. This blog article serves as a thorough guide to help you through the process of buying your first house. We’re here to provide you with useful advice and insights to help you navigate every step of the home-buying process, from comprehending the financial elements to luxury about its all realar properties nuances
                            </p>
                        </div>


                        {/* Leave a Comment */}
                        <div className="space-y-5">
                            <h1 className="text-4xl font-semibold font-outfit flex items-center gap-2"><TiArrowBack className="text-6xl" />Leave a Comment</h1>
                            <p>Your email address will not be published. Required fields are marked *</p>

                            <div>
                                <form className="grid grid-cols-1 gap-5 ">
                                    <div className="flex gap-4">
                                        <input type="text" placeholder="Your Name" className="border w-full p-4 rounded-2xl" />
                                        <input type="email" placeholder="Your Email" className="border w-full p-4 rounded-2xl" />
                                    </div>
                                    <input type="url" placeholder="Website" className="border w-full p-4 rounded-2xl" />
                                    <textarea name="" id="" placeholder="Write a Comment" className="border w-full p-4 rounded-2xl" />
                                    <div>
                                        <button className="btn-text-primary">Post Comment<FaArrowRight /></button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>




                {/* right side  */}
                <div className="col-span-1 flex flex-col gap-8 ">

                    {/* Search Bar  */}
                    <div className="bg-[#1C2D37] relative p-8 rounded-2xl">
                        <input type="text" placeholder="Search Here...." className=" rounded-full p-4 w-full bg-[#A4B5BA] text-black placeholder:text-black" />
                        <div className="text-white font-semibold text-xl border-l-2 pl-2 absolute right-12 bottom-12 active:scale-95 transition-all duration-500">
                            <IoSearch />
                        </div>
                    </div>


                    {/* Post Categories  */}
                    <div className="bg-[#1C2D37] text-white p-8 rounded-2xl">
                        <h1 className="text-2xl font-outfit font-semibold mb-5 pb-2 border-b-2 border-gray-300 ">Post Categories</h1>

                        <div className="grid grid-cols-1 gap-5">

                            <button className="flex justify-between items-center border-gray-500  border-b pb-3 hover:text-yellow-400 cursor-pointer active:scale-95 transition-all duration-500">
                                <p className="flex justify-center items-center gap-2"><FaRegBuilding className="" />Apartment</p>
                                <p>(1)</p>
                            </button>

                            <button className="flex justify-between items-center border-gray-500  border-b pb-3 hover:text-yellow-400 cursor-pointer active:scale-95 transition-all duration-500">
                                <p className="flex justify-center items-center gap-2"><FaRegBuilding className="" />Banglow</p>
                                <p>(2)</p>
                            </button>

                            <button className="flex justify-between items-center border-gray-500  border-b pb-3 hover:text-yellow-400 cursor-pointer active:scale-95 transition-all duration-500">
                                <p className="flex justify-center items-center gap-2"><FaRegBuilding className="" />Modern Houses</p>
                                <p>(4)</p>
                            </button>

                            <button className="flex justify-between items-center border-gray-500  border-b pb-3 hover:text-yellow-400 cursor-pointer active:scale-95 transition-all duration-500">
                                <p className="flex justify-center items-center gap-2"><FaRegBuilding className="" />Property</p>
                                <p>(5)</p>
                            </button>

                            <button className="flex justify-between items-center border-gray-500  border-b pb-3 hover:text-yellow-400 cursor-pointer active:scale-95 transition-all duration-500">
                                <p className="flex justify-center items-center gap-2"><FaRegBuilding className="" />Real Estate</p>
                                <p>(7)</p>
                            </button>

                        </div>
                    </div>


                    {/* Recent Post  */}
                    <div className="bg-[#1C2D37] text-white p-8 rounded-2xl">
                        <h1 className="text-2xl font-outfit font-semibold mb-5 pb-2 border-b-2 border-gray-300 ">Recent Post</h1>

                        <div className="grid grid-cols-1 gap-5">

                            <div className="grid grid-cols-3 ">
                                <div className="col-span-1 rounded-lg overflow-hidden">
                                    <img className="rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer " src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/06/Untitled-1-85x85.png" alt="" />
                                </div>
                                <div className="col-span-2 ">
                                    <h1 className="text-lg font-outfit hover:text-yellow-400 cursor-pointer hover:underline transition-all duration-500">Emphasizes the importance of continuous learning</h1>
                                    <h1 className="flex items-center gap-2"><MdOutlineDateRange className="font-semibold" />June 8, 2024</h1>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 ">
                                <div className="col-span-1 rounded-lg overflow-hidden">
                                    <img className="rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer " src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/06/Untitled-1-85x85.png" alt="" />
                                </div>
                                <div className="col-span-2 ">
                                    <h1 className="text-lg font-outfit hover:text-yellow-400 cursor-pointer hover:underline transition-all duration-500">Enrich Your Mind Envision Your Future</h1>
                                    <h1 className="flex items-center gap-2"><MdOutlineDateRange className="font-semibold" />June 9, 2024</h1>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 ">
                                <div className="col-span-1 rounded-lg overflow-hidden">
                                    <img className="rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer " src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/06/Untitled-1-85x85.png" alt="" />
                                </div>
                                <div className="col-span-2 ">
                                    <h1 className="text-lg font-outfit hover:text-yellow-400 cursor-pointer hover:underline transition-all duration-500">University class starting soon while the</h1>
                                    <h1 className="flex items-center gap-2"><MdOutlineDateRange className="font-semibold" />June 10, 2024</h1>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* Popular Tags */}
                    <div className="bg-[#1C2D37] text-white p-8 rounded-2xl">
                        <h1 className="text-2xl font-outfit font-semibold mb-5 pb-2 border-b-2 border-gray-300 ">Popular Tag</h1>


                        <div className="flex flex-wrap gap-2">
                            <Link className="hover:bg-yellow-400 bg-gray-700 hover:text-black px-2 py-1 rounded-sm transition-all duration-500" to={""}>Apartment</Link>
                            <Link className="hover:bg-yellow-400 bg-gray-700 hover:text-black px-2 py-1 rounded-sm transition-all duration-500" to={""}>Buyer</Link>
                            <Link className="hover:bg-yellow-400 bg-gray-700 hover:text-black px-2 py-1 rounded-sm transition-all duration-500" to={""}>Innovate</Link>
                            <Link className="hover:bg-yellow-400 bg-gray-700 hover:text-black px-2 py-1 rounded-sm transition-all duration-500" to={""}>Luxury</Link>
                            <Link className="hover:bg-yellow-400 bg-gray-700 hover:text-black px-2 py-1 rounded-sm transition-all duration-500" to={""}>Modern</Link>
                            <Link className="hover:bg-yellow-400 bg-gray-700 hover:text-black px-2 py-1 rounded-sm transition-all duration-500" to={""}>Real estate</Link>
                            <Link className="hover:bg-yellow-400 bg-gray-700 hover:text-black px-2 py-1 rounded-sm transition-all duration-500" to={""}>Sale</Link>
                        </div>







                    </div>




                </div>
            </div>

        </div>
    )
}

export default BlogDetails