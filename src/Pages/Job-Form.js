import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import { useParams } from "react-router-dom";

const JobForm = () => {
  const { input, setInput, currentId, setCurrentId, functions } = useContext(Context);
  const { handleChange, functionSubmit, functionEdit, functionUpdate } = functions;
  let { Id } = useParams();

  useEffect(() => {
    if (Id !== undefined) {
      functionEdit(Id);

      return () => {
        setInput({
          title: "",
          job_description: "",
          job_qualification: "",
          job_type: "",
          job_tenure: "",
          job_status: "",
          job_status_0: "",
          job_status_1: "",
          company_name: "",
          company_image_url: "",
          company_city: "",
          salary_min: 0,
          salary_max: 0,
        });
      };
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);

    if (currentId === null) {
      functionSubmit();
    } else {
      functionUpdate(currentId);
    }

    setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: "",
      job_status_0: "",
      job_status_1: "",
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: 0,
      salary_max: 0,
    });
    setCurrentId(null);
  };

  return (
    <div className="w-full max-w-screen-xl py-12 px-6">
      <div className="bg-white rounded-md shadow-md py-10 px-12 ">
        <h2 className="text-3xl font-bold mb-4">Job Form</h2>
        <form onSubmit={handleSubmit} method="post">
          <h3 className="text-gray-700 font-medium text-lg mb-3">Job Details</h3>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="title"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={input.title}
              onChange={handleChange}
            />
            <label
              htmlFor="title"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Job Title
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="job_type"
              id="job_type"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={input.job_type}
              onChange={handleChange}
            />
            <label
              htmlFor="job_type"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Job Type
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="job_tenure"
              id="job_tenure"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={input.job_tenure}
              onChange={handleChange}
            />
            <label
              htmlFor="job_tenure"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Job Tenure
            </label>
          </div>
          <div className="xl:flex">
            <div className="relative z-0 mb-6 w-full group basis-1/4 ">
              <h5 className="text-gray-500 mb-5">Job Status</h5>
              <fieldset>
                <legend className="sr-only">Job Status</legend>

                <div className="flex items-center mb-4">
                  <input
                    checked={input.job_status_1}
                    value="1"
                    onChange={handleChange}
                    type="radio"
                    name="job_status_1"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                    aria-labelledby="status-option-1"
                    aria-describedby="status-option-1"
                  />
                  <label htmlFor="status-option-1" className="block ml-2 text-sm font-normal text-gray-500 ">
                    Open
                  </label>
                </div>

                <div className="flex items-center ">
                  <input
                    checked={input.job_status_0}
                    value="0"
                    onChange={handleChange}
                    type="radio"
                    name="job_status_0"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                    aria-labelledby="status-option-2"
                    aria-describedby="status-option-2"
                  />
                  <label htmlFor="status-option-2" className="block ml-2 text-sm font-normal text-gray-500 ">
                    Closed
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="relative z-0 mb-6 w-full group basis-3/4">
              <textarea
                type="text"
                name="job_description"
                id="job_description"
                required
                className="block resize-none h-32 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={input.job_description}
                onChange={handleChange}
              />
              <label
                htmlFor="job_description"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Job Description
              </label>
            </div>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <textarea
              type="text"
              name="job_qualification"
              id="job_qualification"
              className="block resize-none h-20 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={input.job_qualification}
              onChange={handleChange}
            />
            <label
              htmlFor="job_qualification"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Job Qualification
            </label>
          </div>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="number"
                name="salary_min"
                id="salary_min"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={input.salary_min}
                onChange={handleChange}
              />
              <label
                htmlFor="salary_min"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Salary Min
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="number"
                name="salary_max"
                id="salary_max"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={input.salary_max}
                onChange={handleChange}
              />
              <label
                htmlFor="salary_max"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Salary Max
              </label>
            </div>
          </div>
          <h3 className="text-gray-700 font-medium text-lg my-3">Company Details</h3>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="company_name"
                id="company_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={input.company_name}
                onChange={handleChange}
              />
              <label
                htmlFor="company_name"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company Name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="company_city"
                id="company_city"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={input.company_city}
                onChange={handleChange}
              />
              <label
                htmlFor="company_city"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company City
              </label>
            </div>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="company_image_url"
              id="company_image_url"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={input.company_image_url}
              onChange={handleChange}
            />
            <label
              htmlFor="company_image_url"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Company Logo (image url)
            </label>
          </div>

          <button type="submit" className="mt-5 text-white bg-pink-500 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
