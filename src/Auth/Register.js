import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { useHistory } from "react-router-dom";

const Register = () => {
  const { inputRegister, setInputRegister } = useContext(Context);
  let history = useHistory();

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setInputRegister({ ...inputRegister, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(inputRegister);

    let { name, image_url, email, password } = inputRegister;

    axios
      .post(`https://dev-example.sanbercloud.com/api/register`, { name, image_url, email, password })
      .then((res) => {
        let { data } = res;
        console.log(data);

        setInputRegister({
          name: "",
          image_url: "",
          email: "",
          password: "",
        });

        history.push("/login");
      })
      .catch((error) => {
        console.log(error.response.data.error);
        alert(error.response.data.error);
      });
  };

  return (
    <div className="w-full h-screen">
      <div className="absolute bg-black w-full h-full bg-layer z-0"></div>
      <div className="w-full h-screen font-sans bg-cover bg-landscape">
        <div className="container flex items-center justify-center flex-1 h-full mx-auto ">
          <div className="w-full max-w-lg absolute">
            <div className="leading-loose">
              <form onSubmit={handleRegister} method="POST" className="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl">
                <p className="mb-8 text-2xl font-light text-center text-white">Register</p>
                <div className="mb-2">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={inputRegister.name}
                      onChange={handleChange}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="name"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="image_url"
                      name="image_url"
                      value={inputRegister.image_url}
                      onChange={handleChange}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="image_url"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <div className=" relative ">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={inputRegister.email}
                      onChange={handleChange}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <div className=" relative ">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={inputRegister.password}
                      onChange={handleChange}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Password (mininmal 8 digit)"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Register
                  </button>
                </div>
                <div className="text-center">
                  <Link to={"/login"} className="right-0 inline-block text-sm font-light align-baseline text-slate-200 hover:text-slate-400">
                    Already Have an account?
                  </Link>
                </div>
                <div className="text-center mt-5 ">
                  <Link to={"/"} className="flex justify-center text-sm font-light text-slate-200 hover:text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute mr-36 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back to Main Page</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
