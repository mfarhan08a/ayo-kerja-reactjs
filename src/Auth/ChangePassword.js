import React, { useContext } from "react";
import { Context } from "../Context/Context";

const ChangePassword = () => {
  const { inputChangePass, setInputChangePass, functions } = useContext(Context);
  const { functionChangePass } = functions;

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setInputChangePass({ ...inputChangePass, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    functionChangePass();
  };

  return (
    <div className="w-full max-w-screen-xl py-12 px-6">
      <div className="bg-white rounded-md shadow-md py-10 px-12 ">
        <h2 className="text-3xl font-bold mb-4">Change Password</h2>
        <form onSubmit={handleSubmit} method="post">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              name="current_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={inputChangePass.current_password}
              onChange={handleChange}
            />
            <label
              htmlFor="current_password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Current Password
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              name="new_password"
              id="new_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={inputChangePass.new_password}
              onChange={handleChange}
            />
            <label
              htmlFor="new_password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              New Password
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              name="new_confirm_password"
              id="new_confirm_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={inputChangePass.new_confirm_password}
              onChange={handleChange}
            />
            <label
              htmlFor="new_confirm_password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm New Password
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

export default ChangePassword;
