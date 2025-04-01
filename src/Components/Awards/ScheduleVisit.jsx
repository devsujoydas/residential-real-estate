
import { FaRegPaperPlane } from "react-icons/fa";
const ScheduleVisit = () => {
    return (
        <div className="shadow-2xl rounded-3xl ">
            <div className='bg-white text-black overflow-hidden rounded-3xl flex justify-center lg:flex-row flex-col-reverse transition-all duration-500'>

                <div className='lg:w-1/2 p-8 space-y-8'>
                    <h1 className='md:text-5xl text-3xl font-semibold font-outfit '>Schedule a visit</h1>
                    <form className='grid grid-cols-1 gap-5'>
                        <input className='w-full border border-gray-400 md:p-5 p-2 rounded-full' type="text" placeholder='Your Name*' />
                        <input className='w-full border border-gray-400 md:p-5 p-2 rounded-full' type="email" placeholder='Your Email*' />
                        <select className='w-full border border-gray-400 md:p-5 p-2 rounded-full' name="" id="">
                            <option value="Real Estate">Real Estate</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Residential">Residential</option>
                            <option value="Deluxe">Deluxe</option>
                        </select>

                        <textarea className='w-full border border-gray-400 md:p-5 p-2 rounded-2xl' name="" id="" placeholder='Type Your Message'></textarea>

                        <div className='flex justify-center items-center'>
                            <button className='btn-text-primary' type='submit'>Submit Message<FaRegPaperPlane /></button>
                        </div>
                    </form>
                </div>

                <div className='lg:w-1/2'>
                    <img className="w-full" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/09/contact_thumb_4_1.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default ScheduleVisit