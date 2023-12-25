import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const handleLogout = () => {
    userLogOut();
  };
  const navlinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-lg"
          >
            {navlinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-outline text-xl">
          ClickDown
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-lg">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link onClick={handleLogout} className="btn btn-primary text-xl">
            Logout
          </Link>
        ) : (
          <Link to="/login" className="btn btn-primary text-xl">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
