import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Template = (props) => {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      <div>
       
        {props.children}
       
      </div>
      <Footer />
    </div>
  );
};

export default Template;
