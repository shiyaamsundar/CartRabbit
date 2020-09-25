import React from "react";
import Menu from "./menu";

const Base = ({
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
    <footer className="footer bg-dark mt-auto ">
      <div className="container-fluid bg-blue text-white text-center py-3">
        <h4>If you got any queries, feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
    </footer>

  </div>
  
);

export default Base;
