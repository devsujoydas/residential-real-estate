import { NavLink } from 'react-router-dom'

const Nav = ({ isOpen, user, setIsOpen }) => {
    const navBtnStyle = " mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-yellow-400  dark:hover:bg-gray-700"


    return (
        <div onClick={() => setIsOpen(!isOpen)} className='flex flex-col my-5
        md:my-0 md:gap-5 lg:flex-row lg:items-center lg:mx-8'>
            <NavLink to={'/'} className={navBtnStyle}> Home </NavLink>
            <NavLink to={'/aboutus'} className={navBtnStyle}> About Us</NavLink>
            <NavLink to={'/teams'} className={navBtnStyle}> Team </NavLink>
            <NavLink to={'/blogs'} className={navBtnStyle}> Blogs </NavLink>
            <NavLink to={"/contact"} className={navBtnStyle}>Contact Us</NavLink>
            {
                !user && <NavLink to={"/signin"} className={navBtnStyle}>Sign In</NavLink>
            }
        </div>
    )
}

export default Nav