import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import Cookies from "js-cookie";

const Sidebar = () => {
  const { sidebarDisplay, functions } = useContext(Context);
  const { sidebarMenu } = functions;

  return (
    <div className={`w-72 max-w-full bg-pink-500 h-screen flex flex-col text-white fixed lg:sticky top-0 transition-transform transform duration-500 ease ${sidebarDisplay} lg:translate-x-0 absolute z-50`}>
      <Link to={"/"} className="flex items-center mx-auto my-0 w-full justify-center py-8">
        <span className="uppercase text-white font-black text-2xl ">AyoKerja.id</span>
      </Link>
      <button onClick={sidebarMenu} className="lg:hidden absolute  flex mt-9 ml-60 rounded-md bg-pink-700 font-black align-middle px-1 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="flex-1">
        <div className="mt-6">
          <Link
            to={"/dashboard"}
            className="flex justify-between no-underline w-full px-8 py-5 border-l-4 text-sm transition-colors duration-200 ease-in-out hover:text-pink-400 bg-pink-500 hover:bg-pink-700 hover:border-pink-400 border-pink-500"
          >
            <div className="flex">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="svg-inline--fa fa-bone fa-w-20 mr-4 h-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <span>Dashboard</span>
            </div>
          </Link>
          <Link
            to={"/dashboard/list-job-vacancy"}
            className="flex justify-between no-underline w-full px-8 py-5 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-pink-400 hover:bg-pink-700 hover:border-l-4 hover:border-pink-400"
          >
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="svg-inline--fa fa-dog fa-w-18 mr-4 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              Job List
            </div>
          </Link>
          <Link
            to={"/dashboard/list-job-vacancy/form"}
            className="flex justify-between no-underline w-full px-8 py-5 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-pink-400 hover:bg-pink-700 hover:border-l-4 hover:border-pink-400"
          >
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="svg-inline--fa fa-dog fa-w-18 mr-4 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              Add New Job
            </div>
          </Link>

          <div className="border-b-2 border-pink-400 mx-auto my-0 w-64"></div>

          <Link
            to={"/dashboard/profile"}
            className="flex justify-between no-underline w-full px-8 py-5 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-pink-400 hover:bg-pink-700 hover:border-l-4 hover:border-pink-400"
          >
            <div className="flex ">
              <svg xmlns="http://www.w3.org/2000/svg" className="svg-inline--fa fa-dog fa-w-18 mr-4 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              Profile
            </div>
          </Link>
          <Link
            to={"/dashboard/change-password"}
            className="flex justify-between no-underline w-full px-8 py-5 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-pink-400 hover:bg-pink-700 hover:border-l-4 hover:border-pink-400"
          >
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="svg-inline--fa fa-dog fa-w-18 mr-4 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
              </svg>
              Change Password
            </div>
          </Link>
          <Link
            to={"/login"}
            onClick={() => {
              Cookies.remove("token");
              Cookies.remove("user");
            }}
            className="flex justify-between no-underline w-full px-8 py-5 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-pink-400 hover:bg-pink-700 hover:border-l-4 hover:border-pink-400"
          >
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="svg-inline--fa fa-dog fa-w-18 mr-4 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
              </svg>
              Logout
            </div>
          </Link>
        </div>
      </div>
      <div className="flex px-8 py-6 items-center">
        <span className="hidden sm:block text-xs lg:text-sm text-white sm:text-center ">© 2022. All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Sidebar;
