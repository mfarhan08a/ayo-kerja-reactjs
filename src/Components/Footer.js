import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 border-t-2 ">
      <span className="text-sm text-gray-500 sm:text-center ">© 2022. All Rights Reserved.</span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500  sm:mt-0">
        <li>
          <span className="uppercase text-gray-800 font-black text-2xl">AyoKerja.id</span>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
