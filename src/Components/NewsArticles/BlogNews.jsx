
import { FaArrowRight } from 'react-icons/fa'
const BlogNews = () => {
    return (
        <div className='space-y-5 '>
            <div className='overflow-hidden rounded-3xl'>
                <img className='w-full max-h-80 hover:scale-110 transition-all duration-500 ' src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/blog_1_1-600x343.png" alt="" />
            </div>
            <div className='flex gap-5'>
                <p>Apr 17, 2024</p>
                <p>3 min read</p>
            </div>
            <p className='text-2xl font-outfit hover:underline duration-500 transition-all cursor-pointer'>University class starting soon while the lovely valley team work</p>
            <button className="btn-text-primary">Read More<FaArrowRight /></button>
        </div>
    )
}

export default BlogNews