// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Optionally, navigate to the login page or home page
        console.log("User logged out successfully");
      })
      .catch((error) => console.log(error));
  };

  const navItem = (
    <>
      <li className="text-xl">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="text-xl">
        <Link to={"/"}>About</Link>
      </li>
      <li className="text-xl">
        <Link to={"/"}>Services</Link>
      </li>
      <li className="text-xl">
        <Link to={"/"}>Blog</Link>
      </li>
      <li className="text-xl">
        <Link to={"/"}>Contact</Link>
      </li>
      {user?.email ? (
        <>
         <li className="text-xl">
          <Link to="/booking">My Bookings</Link>
        </li>
        <li className="text-xl">
          <Link onClick={handleLogOut}>Log out</Link>
        </li></>
      ) : (
        <>
          <li className="text-xl">
            <Link to={"/login"}>Sign In</Link>
          </li>
          <li className="text-xl">
            <Link to={"/signup"}>Sign Up</Link>
          </li>
        </>
      )}
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
              stroke="currentColor">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navItem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl h-auto">
          <img src={logo} alt="" className="h-24 w-28" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline text-xl text-[#FF3811]">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Navbar;