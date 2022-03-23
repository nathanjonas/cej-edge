import React from "react";
import { Navbar } from "./Navbar";

import "./Header.css";
import "./NavBar.css";

export const Header = () => {
  return (
    <>
      <Navbar />
      <div className="header">
        {/* <span className="header-text">CEJ EDGE LLC</span>
        <h2 className="sub-header-text">Advanced Battery Manufacturing</h2>
        <h3 className="sub-sub-header-text">
          CEJ Edge LLC has a focus on advanced battery manufacturing, business
          plan deployment, and general consulting while promoting a Zero(0) defect
          focus.
        </h3> */}
      </div>
    </>
  );
};
