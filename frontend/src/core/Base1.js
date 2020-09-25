import React from "react";
import Menu from "./menu";

const Base1 = ({
  title = "My Title",
  className = "text-dark p-2",
  children
}) => (
  <div>
    <Menu/>
    <div className="container-fluid ">
      <div className="pt-9 bg-white text-black text-center">
        <h2 className="display-4 pt-3">{title}</h2>
      </div>
      <div className={className}>{children}</div>
    </div>
  
  </div>

);

export default Base1;
