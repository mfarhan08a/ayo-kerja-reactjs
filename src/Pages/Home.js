import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" bg-white relative overflow-hidden mb-10 mt-20 ">
      <div className="bg-white  flex relative z-10 items-center overflow-hidden ">
        <div className="container mx-auto px-6 flex relative py-16 justify-around">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-10">
            <span className="w-20 h-2 bg-gray-800  mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-5xl sm:text-7xl font-black flex flex-col leading-none  text-gray-800">
              Employ.
              <span className="text-5xl sm:text-7xl">Grow</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 ">Having Trouble Finding The Right One? Leave It Up To Us.</p>
            <div className="flex mt-8">
              <Link to={"/job-vacant"} className="uppercase py-3 px-24 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                Get started
              </Link>
            </div>
          </div>
          <div className="relative home-image align-middle hidden lg:block">
            <img src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
