import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-20 lg:px-47 border-b border-gray-400 py-4 ${
        isCourseListPage ? "bg-white" : "bg-purple-100/70"
      }`}
    >
      <img src={assets.logo} alt="Logo" className="w-28 lg:32 cursor-pointer" />
      <div className="hidden md:flex items-center gap-5 text-gray-600">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button>Become Educator</button> |
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-purple-800 text-white px-5 py-2 rounded-full hover:bg-purple-900 transition"
          >
            Create Account
          </button>
        )}
      </div>

      {/* for phone screens*/}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-600">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button>Become Educator</button> |
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
          {user ? (
            <UserButton />
          ) : (
            <button onClick={() => openSignIn()}>
              <img src={assets.user_icon} alt="user"></img>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
