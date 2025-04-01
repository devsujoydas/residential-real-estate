import { FaArrowRight, FaRegUser } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
    const { id, imgUrl1, title, date, category,summary,content } = blog;


    return (
        <div className="space-y-8">
            <div className="rounded-3xl overflow-hidden">
                <Link to={`/blogDetails/${id}`}>
                    <img className="hover:scale-110 transition-all duration-500" src={imgUrl1}alt="" />
                </Link>
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-5">
                    <h1 className="flex items-center gap-2"><FaRegUser className="font-semibold" />Realar</h1>
                    <h1 className="flex items-center gap-2"><MdOutlineDateRange className="font-semibold" />{date}</h1>
                    <h1 className="flex items-center gap-2"><BsHouse className="font-semibold" />{category}</h1>
                </div>
                <Link to={`/blogDetails/${id}`} className="text-3xl hover:underline  transition-all duration-500 hover:font-bold font-semibold font-outfit">{title}</Link>
                <p className="text-gray-700 mt-3">{summary}{content.introduction}</p>
            </div>
            <div>
                <Link to={`/blogDetails/${id}`} className="btn-text-primary w-fit">READ MORE<FaArrowRight /></Link>
            </div>
        </div>
    )
}

export default Blog