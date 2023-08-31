import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context/Context";

const JobDisplayDetails = () => {
  const { input, setInput, functions } = useContext(Context);
  const { handleStatus } = functions;
  let { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
        .then((result) => {
          let fetchResult = result.data;
          setInput({
            title: fetchResult.title,
            job_description: fetchResult.job_description,
            job_qualification: fetchResult.job_qualification,
            job_type: fetchResult.job_type,
            job_tenure: fetchResult.job_tenure,
            job_status: fetchResult.job_status,
            company_name: fetchResult.company_name,
            company_image_url: fetchResult.company_image_url,
            company_city: fetchResult.company_city,
            salary_min: fetchResult.salary_min,
            salary_max: fetchResult.salary_max,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handleSalary = (val) => {
    if (val > 1000000) {
      return "Rp. " + val / 1000000 + " juta";
    } else {
      return "Rp. " + val / 1000 + " K";
    }
  };

  return (
    <section className="details w-fit">
      <div className="relative bg-white p-4 m-10">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="mt-10 mx-auto relative lg:mt-0 lg:col-start-1 ">
            <h4 className="relative mb-10 text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:leading-9">Company Details</h4>
            <img src={input.company_image_url} alt="illustration" className="relative mx-0 shadow-lg rounded  h-96" />
            <ul className="mt-10 lg:flex">
              <li className="mb-5 lg:mr-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 text-gray-900 font-bold">Company Name</h5>
                    <p className="text-base leading-6 text-gray-500">{input.company_name}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 ">
                    <h5 className="text-lg leading-6 text-gray-900 font-bold">Company City</h5>
                    <p className="text-base leading-6 text-gray-500">{input.company_city}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:col-start-2 md:pl-20 mt-10 lg:mt-0">
            <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:leading-9">Job Details</h4>
            <ul className="mt-10">
              <ul className="mt-10 lg:flex">
                <li className="mb-5 lg:mr-24">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 text-gray-900 font-bold">Job Title</h5>
                      <p className="text-base leading-6 text-gray-500">{input.title}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 ">
                      <h5 className="text-lg leading-6 text-gray-900 font-bold">Job Status</h5>
                      <p className=" text-base leading-6 text-gray-500">{handleStatus(input.job_status)}</p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="mt-10 lg:flex">
                <li className="mb-5 lg:mr-32">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 text-gray-900 font-bold">Job Type</h5>
                      <p className="text-base leading-6 text-gray-500">{input.job_type}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 ">
                      <h5 className="text-lg leading-6 text-gray-900 font-bold">Job Tenure</h5>
                      <p className=" text-base leading-6 text-gray-500">{input.job_tenure}</p>
                    </div>
                  </div>
                </li>
              </ul>

              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 text-gray-900 font-bold">Job Description</h5>
                    <p className=" text-base leading-6 text-gray-500">{input.job_description}</p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 text-gray-900 font-bold">Job Qualification</h5>
                    <p className=" text-base leading-6 text-gray-500">{input.job_qualification}</p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 text-gray-900 font-bold">Salary</h5>
                    <p className=" text-base leading-6 text-gray-500">
                      Minimal : {handleSalary(input.salary_min)}, Maximal : {handleSalary(input.salary_max)}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDisplayDetails;
