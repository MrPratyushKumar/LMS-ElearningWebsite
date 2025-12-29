import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";

function Navbar() {

  const {navigate , isEducator} = useContext(AppContext)

  const location = useLocation();

  // true when URL contains "/course-list"
  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between
        px-4 sm:px-10 md:px-14 lg:px-36
        py-4 border-b border-gray-500
        ${isCourseListPage ? "bg-white" : "bg-cyan-100/70"}
      `}
    >
      {/* Logo */}
      <img
        onClick={()=> navigate('/')}
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              {/* if user is login then only display this otherwise this will hide it */}
              <button onClick={()=> {navigate('/educator')}}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>|{" "}
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              {/* if user is login then only display this otherwise this will hide it */}
              <button onClick={()=> {navigate('/educator')}}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>|{" "}
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {
          // if user is available then dispaly userButton otherwise it will display assets user icon
          user ? <UserButton />
          : <button>
          <img src={assets.user_icon} alt="User" />
        </button>
        }
        
      </div>
    </div>
  );
}

export default Navbar;
