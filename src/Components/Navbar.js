import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import Cookies from "js-cookie";

const Navbar = () => {
  const { burgerMenu, functions } = useContext(Context);
  const { burgerMenuDisplay } = functions;

  return (
    <div className="sticky top-0 z-20">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-3 shadow-md ">
        <div className="container flex flex-wrap justify-around items-center mx-auto">
          <Link to={"/"} className="flex items-center">
            <span className="uppercase text-gray-800 font-black text-2xl">AyoKerja.id</span>
          </Link>
          <div className="flex md:order-2">
            {!Cookies.get("token") && (
              <Link to={"/login"}>
                <button type="button" className="text-gray-700 hover:text-pink-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex ">
                  <span>Login</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 ml-2 " viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </button>
              </Link>
            )}
            {Cookies.get("token") && (
              <Link to={"/login"}>
                <button
                  onClick={() => {
                    Cookies.remove("token");
                    Cookies.remove("user");
                  }}
                  type="button"
                  className="text-gray-700 hover:text-pink-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 flex "
                >
                  <span>Logout</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className=" ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </Link>
            )}
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              onClick={burgerMenuDisplay}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to={"/"} className="block py-2 pr-4 pl-3 text-white bg-pink-400 rounded md:bg-transparent md:text-pink-700 md:p-0">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/job-vacant"} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0  ">
                  Job Vacancy
                </Link>
              </li>
              {Cookies.get("token") && (
                <li>
                  <Link to={"/dashboard"} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0  ">
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className={`md:hidden ${burgerMenu}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to={"/"} className="text-gray-300 hover:text-gray-800  block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to={"/job-vacant"} className="text-gray-300 hover:text-gray-800  block px-3 py-2 rounded-md text-base font-medium">
              Job Vacancy
            </Link>
            {Cookies.get("token") && (
              <Link to={"/dashboard"} className="text-gray-300 hover:text-gray-800  block px-3 py-2 rounded-md text-base font-medium">
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
