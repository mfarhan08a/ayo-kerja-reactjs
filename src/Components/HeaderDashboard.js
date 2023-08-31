import React, { useContext } from "react";
import { Context } from "../Context/Context";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const HeaderDashboard = () => {
  const { profileDisplay, functions } = useContext(Context);
  const { sidebarMenu, profileMenu } = functions;

  return (
    <div className="w-full py-6 px-6 bg-white border-b border-gray-300 flex justify-between items-center shadow-sm">
      <button
        data-collapse-toggle="mobile-menu-4"
        type="button"
        onClick={sidebarMenu}
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
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
      <h2 className="text-lg font-bold text-pink-500 pl-12 lg:pl-0">Selamat Datang, {Cookies.get("name")}</h2>
      <div className="flex items-center">
        <div className="relative ml-4">
          <div onClick={profileMenu} className="cursor-pointer relative rounded-full w-12 h-12">
            <img src={Cookies.get("image_url")} className="absolute left-0 top-0 w-full h-full rounded-full object-cover" />
            <div className={profileDisplay}>
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div className="relative inline-block text-left">
                    <div className="origin-top-right absolute z-50 right-0 mt-8 w-56 rounded-md shadow-lg bg-white  ring-1 ring-black ring-opacity-5">
                      <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <Link to={"/dashboard/profile"} className=" block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                          <span className="flex flex-col">
                            <span>Profile</span>
                          </span>
                        </Link>
                        <Link to={"/dashboard/change-password"} className=" block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                          <span className="flex flex-col">
                            <span>Change Password</span>
                          </span>
                        </Link>
                        <Link
                          to={"/login"}
                          onClick={() => {
                            Cookies.remove("token");
                            Cookies.remove("user");
                          }}
                          className=" block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          <span className="flex flex-col">
                            <span>Logout</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
