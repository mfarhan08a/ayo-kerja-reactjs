import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";

const JobDisplayMore = () => {
  const { data, search, filterIn, fetchStatus, setFetchStatus, functions } = useContext(Context);
  const { fetchData, handleText, handleSearch, handleFilter, handleChangeFilter, handleChangeSearch } = functions;

  useEffect(() => {
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <div className="job w-full bg-white p-12 ">
      <div className="header flex-col  p-10 w-full mb-12">
        <div className="title flex-col mb-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 flex justify-center ">Find Your Dream Job Here</h1>
          <small className="text-2xl font-light text-gray-400 flex justify-center">“If your dreams don`t scare you, they are too small.”</small>
          <small className="text-lg font-light text-gray-400 flex justify-center">Richard Branson, businessman</small>
        </div>
        <div className="text-end">
          <div className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center"></div>
          <div className="lg:flex justify-center">
            <form method="post" onSubmit={handleFilter} className="flex flex-col md:flex-row md:w-full max-w-fit md:space-x-3 space-y-3 mb-3  md:space-y-0 md:justify-end">
              <div className=" relative ">
                <input
                  type="text"
                  name="job_type"
                  onChange={handleChangeFilter}
                  value={filterIn.job_type}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-slate-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  placeholder="job type"
                />
              </div>
              <div className=" relative ">
                <input
                  type="text"
                  name="company_name"
                  onChange={handleChangeFilter}
                  value={filterIn.company_name}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-slate-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  placeholder="company name"
                />
              </div>
              <div className=" relative ">
                <input
                  type="text"
                  name="company_city"
                  onChange={handleChangeFilter}
                  value={filterIn.company_city}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-slate-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purpinkle-600 focus:border-transparent"
                  placeholder="company city"
                />
              </div>
              <button
                className="h-fit px-4 py-2 text-base font-semibold text-white bg-pink-600 rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-pink-200"
                type="submit"
              >
                Filter
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </button>
            </form>
          </div>
          <div className="lg:flex justify-center">
            <form method="post" onSubmit={handleSearch} className="flex flex-col md:flex-row md:w-full max-w-fit md:space-x-3 space-y-3 mb-3  md:space-y-0 md:justify-end ">
              <div className=" relative ">
                <input
                  type="text"
                  name="search"
                  onChange={handleChangeSearch}
                  value={search}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-slate-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  placeholder="search value.."
                />
              </div>
              <button
                className="h-fit px-4 py-2 text-base font-semibold text-white bg-pink-600 rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-pink-200"
                type="submit"
              >
                Search
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button
                onClick={() => {
                  setFetchStatus(true);
                }}
                className="h-fit px-4 py-2 text-base font-semibold text-white bg-pink-600 rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-pink-200"
              >
                reset
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {data !== null &&
          data.map((e, index) => {
            return (
              <>
                <div key={index} className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                  <Link to={`/job-vacant/details/${e.id}`} className="w-full block h-full">
                    <img alt="blog photo" src={e.company_image_url} className="max-h-40 w-full object-cover" />
                    <div className="bg-white  w-full p-4">
                      <p className="text-indigo-500 text-md font-medium">{e.company_name}</p>
                      <p className="text-gray-800 text-xl font-medium mb-2">{e.title}</p>
                      <p className="text-gray-400 font-light text-md">{handleText(e.job_description, 100)}</p>
                      <div className="flex items-center mt-4"></div>
                      <div className="flex flex-col justify-between text-sm">
                        <p className="text-gray-800">{e.job_type}</p>
                        <p className="text-gray-400">{e.job_tenure}</p>
                        <button
                          to={"/job-vacant"}
                          className="flex-shrink-0 mt-5 px-4 py-2 text-base font-semibold text-white bg-pink-500 rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-pink-200"
                          type="button"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default JobDisplayMore;
