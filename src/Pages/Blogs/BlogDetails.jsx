/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom"

import { FaArrowRight } from 'react-icons/fa'
import { Helmet } from "react-helmet"

import { FaRegBuilding } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { BsHouse } from "react-icons/bs";
import { TiArrowBack } from "react-icons/ti";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BlogDetails = () => {

    const [blg, setBlg] = useState({})

    const { blogs } = useContext(AuthContext)
    console.log(blogs);



    const paramsId = useParams()
    console.log(paramsId.id);

    const blogForDetails = blogs.filter(blog => blog.id === paramsId.id);
    console.log(blogForDetails[0]);

    const { imgUrl1, imgUrl2, title, date, category, summary, content } = blogForDetails[0];
    const { introduction, community, about, lifestyle, real_estate_tips } = content;


    const { author, dining, daily_living, work } = lifestyle;
    const { tips_title1, tips_description1 } = real_estate_tips[0];
    const { tips_title2, tips_description2 } = real_estate_tips[1];



    return (
        <div className='bg-secondary'>
            <Helmet >
                <title>RRE | Teams Details</title>
            </Helmet>

            {/* Navigaiton  */}
            <div className="h-86 flex justify-center items-center text-white" style={{ backgroundImage: "url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/breadcumb-bg.png')" }}>
                <div className="max-w-7xl mx-auto space-y-5">

                    <h1 className="lg:text-5xl text-3xl font-semibold  text-center font-outfit  ">{title}</h1>

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
                            <img className="hover:scale-110 transition-all duration-500" src={imgUrl1} alt="" />
                        </div>

                        <div className="space-y-4">

                            <div className="flex items-center gap-5">
                                <h1 className="flex items-center gap-2"><FaRegUser className="font-semibold" />Realar</h1>

                                <h1 className="flex items-center gap-2"><MdOutlineDateRange className="font-semibold" />{date}</h1>

                                <h1 className="flex items-center gap-2"><BsHouse className="font-semibold" />{category}</h1>
                            </div>

                            <h1 className="md:text-4xl text-2xl  font-semibold font-outfit">{title}</h1>

                            <p className="text-gray-700 mt-3">{introduction}</p>

                            <p className="text-gray-700 mt-3">{about}</p>

                            <p className="text-gray-700 mt-3">{community}</p>

                            <p className="text-gray-700 mt-3">{dining}</p>

                            <p className="text-gray-700 mt-3">{daily_living}</p>

                            <h1 className="md:text-4xl text-2xl font-semibold font-outfit">{summary}</h1>

                            <p className="text-gray-700 mt-3">{work}</p>

                            <div className="rounded-2xl overflow-hidden">
                                <img className="rounded-2xl hover:scale-110 transition-all duration-500" src={imgUrl2} alt="" />
                            </div>

                            <p className="text-gray-700 mt-3">{tips_description1}</p>

                            <p className="text-gray-700 mt-3">{tips_description2}</p>

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




                <div className="col-span-1 ">
                    {/* right side  */}
                    <div className="flex flex-col gap-8 sticky top-24">

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

        </div>
    )
}

export default BlogDetails