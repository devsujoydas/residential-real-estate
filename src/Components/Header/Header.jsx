import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute top-0 z-10 w-full text-white">
      <nav className=" max-w-7xl mx-auto flex justify-between items-center p-5">

        <Link to="/">
          <img className="" src="https://wordpress.themeholy.com/realar/wp-content/uploads/2024/04/logo-white2.svg" alt="Logo" />
        </Link>

        <div className="flex gap-13">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/aboutus">About Us</NavLink>
          <NavLink to="/teams">Team</NavLink>
          <NavLink to="/blogs">Blog</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        <div className="flex gap-4">
          <NavLink to="/signin">Sign In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>

      </nav>
    </div>
  );
};

export default Header;
