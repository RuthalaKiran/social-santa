import React, { useState } from "react";
import "./Header.css";
import Sidebar from "../Sidebar/Sidebar";

const Header = ({ openMenu, setopenMenu }) => {
  // console.log(openMenu);
  return (
    <div className={`header ${openMenu ? "navbar-fixed" : ""} `}>
      <div className="flex-col">
        <a>
          <p>Logo</p>
        </a>
        <div
          onClick={() => {
            setopenMenu((prev) => (prev ? false : true));
          }}
          className={`menuicon ${openMenu ? "openmenu" : ""}`}
        >
          <div>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </div>
      <div className={`sidebarmenu ${openMenu ? "sidebar-slide" : ""} `}>
        {openMenu ? (
          <div>
            {" "}
            <Sidebar />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
