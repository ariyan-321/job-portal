import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";

export default function Navbar() {
  const { user, userLogOut } = useContext(authContext);

  const handleLogOut = () => {
    userLogOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-box mt-3 w-52 p-2 shadow-lg"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/myApplications">My Applications</Link>
            </li>
            <li>
            <Link to="/addJob">Add Job</Link>
            </li>
            <li>
          <Link to="/myPostedJobs">My Posted Jobs</Link>
            </li>
          </ul>
        </div>
        {/* Brand Name */}
        <Link to="/" className="text-xl font-bold">
          Job Portal
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/myApplications">My Applications</Link>
          </li>
          <li>
            <Link to="/addJob">Add Job</Link>
          </li>
          <li>
            <Link to="/myPostedJobs">My Posted Jobs</Link>
            </li>
        </ul>
      </div>

      {/* User Section */}
      <div className="navbar-end flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            {/* User Profile Photo */}
            {user?.photoURL && (
              <img
                src={user?.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            )}
            {/* Display Name */}
            <span className="hidden md:block font-medium">
              {user.displayName || "User"}
            </span>
            {/* Logout Button */}
            <button
              onClick={handleLogOut}
              className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-sm bg-blue-500 hover:bg-blue-600 border-none text-white">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-sm bg-green-500 hover:bg-green-600 border-none text-white">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
