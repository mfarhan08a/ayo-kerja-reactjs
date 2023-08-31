import React from "react";
import Cookies from "js-cookie";

const Profile = () => {
  return (
    <div className="p-4 h-max flex-col align-items-middle mt-20 mx-auto my-0">
      <div className="text-center mb-4 opacity-90">
        <h2 className="text-3xl font-bold mb-10">Profile</h2>
        <div className="block relative">
          <img alt="profil" src={Cookies.get("image_url")} className="mx-auto object-cover rounded-full h-40 w-40 " />
        </div>
      </div>
      <div className="text-center ">
        <p className="text-2xl text-gray-800 ">{Cookies.get("name")}</p>
        <p className="text-xl text-gray-500  font-light">{Cookies.get("email")}</p>
        <p className="text-md text-gray-500  max-w-xs py-4 font-light mx-auto my-0 ">{Cookies.get("name")}, born November 14, 1953 in Brive-la-Gaillarde, is an imitator, humorist, actor, director, singer, songwriter, poet, writer</p>
      </div>
    </div>
  );
};

export default Profile;
