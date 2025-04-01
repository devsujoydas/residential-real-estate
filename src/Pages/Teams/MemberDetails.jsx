import { FaRegPaperPlane } from "react-icons/fa";
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { FiPhoneCall } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MemberDetails = () => {

    const { teamMembers } = useContext(AuthContext)
    console.log(teamMembers);

    const paramsId = useParams()
    console.log(paramsId.id);

    const filterdMember = teamMembers.filter(member => member.id === paramsId.id);
    console.log(filterdMember[0]);
    const { id, name, designation, imgUrl, bio, position, experience, location, practice_area, projects_done, contact, description } = filterdMember[0];

    console.log(id);
    return (
        <div className='bg-[#A4B5BA]'>
            <Helmet>
                <title>Teams Details</title>
            </Helmet>

            {/* Navigaiton  */}
            <div className="h-86 flex justify-center items-center text-white" style={{ backgroundImage: "url('https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/breadcumb-bg.png')" }}>
                <div className="max-w-7xl mx-auto space-y-5">
                    <h1 className="text-5xl font-semibold  text-center">Team Details</h1>
                    <h1 className="text-xl flex justify-center items-center gap-2"><Link to={"/"} className="hover:text-yellow-400 active:scale-95 transition-all">Home</Link> <FaArrowRight />Team Details of {name}</h1>
                </div>
            </div>


            {/* Member card  */}
            <div className='max-w-7xl md:mx-auto lg:px-0 px-5 grid lg:grid-cols-3  gap-10 md:py-20 py-10'>

                {/* member img  */}
                <div className='md:col-span-1'>
                    <div>
                        <div className="border border-gray-300 rounded-3xl overflow-hidden">
                            <div className="overflow-hidden">
                                <img className="hover:scale-105 transition-all duration-500" src={imgUrl} alt="" />
                            </div>

                            <div className="p-6 space-y-2 bg-[#A4B5BA] flex justify-between items-center" >
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
                </div>

                {/* member details  */}
                <div className='md:col-span-2 space-y-10'>
                    <h1 className='font-outfit md:text-3xl text-2xl font-semibold'>{bio}</h1>

                    <div className=" ">

                        <div className=" space-y-3  ">

                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold">Position:</h1>
                                <h1>{designation}</h1>
                            </div>

                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold">Experience:</h1>
                                <h1>{experience}</h1>
                            </div>

                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold">Locatotion:</h1>
                                <h1>{location}</h1>
                            </div>

                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold">Practice Area:</h1>
                                <h1>{practice_area}</h1>
                            </div>

                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold">Project Done:</h1>
                                <h1>{projects_done}</h1>
                            </div>

                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold">Phone:</h1>
                                <h1>{contact.phone}</h1>
                            </div>

                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold">Location:</h1>
                                <h1>{location}</h1>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <h1 className="font-semibold">Email:</h1>
                                <h1>{contact.email}</h1>
                            </div>

                        </div>
                    </div>

                    <p className="md:text-lg text-sm text-gray-600">{description}</p>

                    <h1 className="md:text-4xl text-3xl font-outfit font-semibold">Book Business Solutions</h1>
                    <form className='grid grid-cols-1 gap-5'>
                        <input className='w-full border border-gray-400 md:p-5 p-3 rounded-full' type="text" placeholder='Your Name*' />
                        <input className='w-full border border-gray-400 md:p-5 p-3 rounded-full' type="email" placeholder='Your Email*' />
                        <select className='w-full border border-gray-400 md:p-5 p-3 rounded-full' name="" id="">
                            <option value="Real Estate">Real Estate</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Residential">Residential</option>
                            <option value="Deluxe">Deluxe</option>
                        </select>

                        <textarea className='w-full border border-gray-400 md:p-5 p-3 rounded-2xl' name="" id="" placeholder='Type Your Message'></textarea>

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


  
// https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/blog-s-1-2.png
// https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/blog-s-1-3.png
// https://wordpress.themeholy.com/realar/wp-content/uploads/2024/06/Untitled-1.png
// https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/blog_inner_1.png