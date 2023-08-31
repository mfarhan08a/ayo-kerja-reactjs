import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";

const JobDisplay = () => {
  const { data, fetchStatus, setFetchStatus, functions } = useContext(Context);
  const { fetchData, handleText } = functions;
  let { id } = useParams();

  useEffect(() => {
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <div className="job w-full bg-white p-12 ">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Look For Job</p>
          <p className="text-2xl font-light text-gray-400">Find job that you would enjoy and suits you</p>
        </div>
        <div className="text-end">
          <div className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <Link
              to={"/job-vacant"}
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-pink-500 rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-pink-200"
              type="button"
            >
              Click For More
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {data.slice(0, 3) !== null &&
          data.slice(0, 3).map((e, index) => {
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
                      <p className="text-gray-800">{e.job_type}</p>
                      <p className="text-gray-400">{e.job_tenure}</p>
                      <div className="flex flex-col justify-between ml-4 text-sm"></div>
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

export default JobDisplay;
