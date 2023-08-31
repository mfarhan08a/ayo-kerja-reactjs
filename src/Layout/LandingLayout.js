import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const LandingLayout = (props) => {
  return (
    <>
      <Navbar />
      <section className="w-full">{props.children}</section>
      <Footer />
    </>
  );
};

export default LandingLayout;
