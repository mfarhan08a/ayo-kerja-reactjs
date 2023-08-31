import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Context/Context";

const JobList = () => {
  const { data, fetchStatus, setFetchStatus, search, filterIn, functions } = useContext(Context);
  const { fetchData, functionDelete, handleStatus, handleText, handleChangeSearch, handleChangeFilter, handleFilter, handleSearch } = functions;

  let history = useHistory();

  useEffect(() => {
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const handleDelete = (e) => {
    let jobId = parseInt(e.target.value);
    functionDelete(jobId);
  };

  const handleEdit = (e) => {
    let id = parseInt(e.target.value);
    history.push(`/dashboard/list-job-vacancy/form/edit/${id}`);
  };

  return (
    <div className="w-full max-w-screen-xl py-12 px-5 ">
      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-4 ">Job List</h2>
        <div className="lg:flex justify-between">
          <form method="post" onSubmit={handleFilter} className="flex flex-col md:flex-row md:w-full max-w-fit md:space-x-3 space-y-3 mb-3  md:space-y-0 md:justify-end">
            <div className=" relative ">
              <input
                type="text"
                name="job_type"
                onChange={handleChangeFilter}
                value={filterIn.job_type}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="job type"
              />
            </div>
            <div className=" relative ">
              <input
                type="text"
                name="company_name"
                onChange={handleChangeFilter}
                value={filterIn.company_name}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="company name"
              />
            </div>
            <div className=" relative ">
              <input
                type="text"
                name="company_city"
                onChange={handleChangeFilter}
                value={filterIn.company_city}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="company city"
              />
            </div>
            <button
              className="h-fit px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Filter
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
          </form>
          <form method="post" onSubmit={handleSearch} className="flex flex-col md:flex-row md:w-full max-w-fit md:space-x-3 space-y-3 mb-3  md:space-y-0 md:justify-end">
            <div className=" relative ">
              <input
                type="text"
                name="search"
                onChange={handleChangeSearch}
                value={search}
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="search value.."
              />
            </div>
            <button
              className="h-fit px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
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
              className="h-fit px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            >
              reset
            </button>
          </form>
        </div>
        <div className="overflow-x-scroll pb-5">
          <table className="w-screen table-auto  bg-slate-50 shadow-md overflow-hidden rounded-md">
            <thead>
              <tr>
                <th className="px-4 py-4 text-left bg-pink-600 text-white text-sm font-medium"></th>
                <th className="px-4 py-4 text-left bg-pink-600 text-white text-sm font-medium whitespace-nowrap">Company Logo</th>
                <th className="px-4 py-4 text-left bg-pink-600 text-white text-sm font-medium whitespace-nowrap">Company Name</th>
                <th className="px-4 py-4 text-left bg-pink-600 text-white text-sm font-medium">Title</th>
                <th className="px-4 py-4 text-left bg-pink-600 text-white text-sm font-medium ">Description</th>
                <th className="px-4 py-4 text-left bg-pink-600 text-white text-sm font-medium">Qualification</th>
                <th className="px-4 py-4 text-left bg-pink-600 text-white text-sm font-medium">Type</th>
                <th className="px-4 py-4 text-left bg-pink-600 text-white text-sm font-medium">Tenure</th>
                <th className="px-4 py-4 text-left bg-pink-600 text-white text-sm font-medium">Status</th>
                <th className="px-4 py-4 text-left bg-pink-600 text-white text-sm font-medium">City</th>
                <th className="px-4 py-4 text-left bg-pink-600 text-white text-sm font-medium whitespace-nowrap">Min Salary</th>
                <th className="px-4 py-4 text-left bg-pink-600 text-white text-sm font-medium whitespace-nowrap">Max Salary</th>
              </tr>
            </thead>
            <tbody>
              {data !== null && (
                <>
                  {data.map((e) => {
                    return (
                      <tr key={e.id} className="border-gray-300 even:bg-slate-100">
                        <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">
                          <button onClick={handleEdit} value={e.id} className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white py-1.5 w-20 rounded-lg shadow-sm block mb-1 ">
                            Edit
                          </button>
                          <button onClick={handleDelete} value={e.id} className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white py-1.5 w-20 rounded-lg shadow-sm">
                            Delete
                          </button>
                        </td>
                        <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">
                          <img src={e.company_image_url} className="w-24" />
                        </td>
                        <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">{e.company_name}</td>
                        <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">{e.title}</td>
                        <td className="px-4 py-8 border-t border-b border-gray-300 text-sm ">{handleText(e.job_description, 45)}</td>
                        <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">{handleText(e.job_qualification, 45)}</td>
                        <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">{e.job_type}</td>
                        <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">{e.job_tenure}</td>
                        <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">
                          <span className="p-1 rounded-md bg-yellow-100">{handleStatus(e.job_status)}</span>
                        </td>
                        <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">{e.company_city}</td>
                        <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">{e.salary_min}</td>
                        <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">{e.salary_max}</td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobList;
