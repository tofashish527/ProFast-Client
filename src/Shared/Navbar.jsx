import React from 'react';
import { NavLink } from 'react-router';
import Logo from './Logo';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const {user,logout}=useAuth();
   const handleLogOut = () => {
    logout()
      .then(() => console.log("Log Out Successfully!"))
      .catch((error) => console.log(error));
  };

    const navlinks=<>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/beARider">Be A Rider</NavLink></li>
        <li><NavLink to="/addparcel">Add Parcel</NavLink></li>
        <li><NavLink to="/coverage">Coverage</NavLink></li>

        {
          user && <>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </>
        }
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navlinks}
      </ul>
    </div>
      <Logo></Logo>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
          <div className="navbar-end flex gap-3">
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-outline btn-blue-600 hover:bg-lime-400 hover:text-black transition"
          >
            LogOut
          </button>
        ) : (
          <>
            <NavLink to='/register' className={({ isActive }) =>
    isActive
      ? "btn btn-outline bg-lime-400 text-black"
      : "btn btn-outline  hover:bg-lime-400 hover:text-black"
  }>
              Register
            </NavLink>
            <NavLink to='/login' className={({ isActive }) =>
    isActive
      ? "btn btn-outline bg-lime-400 text-black"
      : "btn btn-outline hover:bg-lime-400 hover:text-black"}>
              Login
            </NavLink>
          </>
        )}
      </div>
  </div>
</div>
    );
};

export default Navbar;