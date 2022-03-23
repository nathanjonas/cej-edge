import React from "react";
import Helmet from "react-helmet";
import "./WhatWeDo.css";

export const WhatWeDo = () => {
  const title = "CEJ Edge LLC | What We Do"
  const description = "CEJ Edge LLC has a focus on advanced battery manufacturing, business plan deployment, and general consulting while promoting a Zero(0) defect focus."

  return <div className="what-we-do-container">
    <Helmet title={title} description={description} />
    <h3 className="what-we-do-header-text">
      CEJ Edge LLC has a focus on advanced battery manufacturing, business
      plan deployment, and general consulting while promoting a Zero(0) defect
      focus.
    </h3>
    <h2 className="what-we-do-title">What Services Do We Provide?</h2>
    <ul className="home-ul">
      <div className="service-provided-title">
        Battery cell, module and low/high voltage pack manufacturing planning
      </div>
      <li className="home-li">Cost estimations and scenario planning</li>
      <li className="home-li">Risk reduction</li>
      <li className="home-li">Process Flow</li>
      <li className="home-li">DFM/A</li>
      <li className="home-li">PFMEA</li>
      <li className="home-li">Work Instruction</li>
      <li className="home-li">Control Plan</li>
      <li className="home-li">Process Development</li>
      <li className="home-li">Equipment SOR</li>
      <li className="home-li">Facility</li>
      <li className="home-li">Aftermarket and service center</li>
    </ul>
    <ul className="home-ul">
      <div className="service-provided-title">Business Plan Deployment</div>
      <li className="home-li">
        BPD: Corporate goals to Plant Metrics to Production Floor
      </li>
      <li className="home-li">
        Plant Floor Focus: Safety, People, Quality, Cost, Delivery
      </li>
    </ul>
    <h2 className="what-we-do-title">Our Experience and Know-How</h2>
    <ul className="home-ul">
      <li className="home-li">
        Li-Ion: Cylindrical and Prismatic cell formats
      </li>
      <li className="home-li">NiMH: Full manufacturing value stream</li>
      <li className="home-li">
        Zero(0) PPM performance to major automotive OEMs
      </li>
      <li className="home-li">
        Quality Management System: ISO9001, IATF16949
      </li>
      <li className="home-li">Environmental Management System: ISO14001</li>
    </ul>
  </div>;
};
