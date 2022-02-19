import React from "react";
import "./Body.css";

export const Body = () => {
  return (
    <div className="body">
      <h3 className="body-title">Services Provided:</h3>
      <ul className="body-ul">
        <span className="service-provided-title">
          Battery cell, module and low/high voltage pack manufacturing planning
        </span>
        <li className="body-li">- Cost estimations and scenario planning</li>
        <li className="body-li">- Risk reduction</li>
        <li className="body-li">- Process Flow</li>
        <li className="body-li">- DFM/A</li>
        <li className="body-li">- PFMEA</li>
        <li className="body-li">- Work Instruction</li>
        <li className="body-li">- Control Plan</li>
        <li className="body-li">- Process Development</li>
        <li className="body-li">- Equipment SOR</li>
        <li className="body-li">- Facility</li>
        <li className="body-li">- Aftermarket and service center</li>
      </ul>
      <ul className="body-ul">
        <span className="service-provided-title">Business Plan Deployment</span>
        <li className="body-li">
          - BPD: Corporate goals to Plant Metrics to Production Floor
        </li>
        <li className="body-li">
          - Plant Floor Focus: Safety, People, Quality, Cost, Delivery
        </li>
      </ul>
      <h3 className="body-title">Experience and Know-How:</h3>
      <ul className="body-ul">
        <li className="body-li">
          - Li-Ion: Cylindrical and Prismatic cell formats
        </li>
        <li className="body-li">- NiMH: Full manufacturing value stream</li>
        <li className="body-li">
          - Zero(0) PPM performance to major automotive OEMs
        </li>
        <li className="body-li">
          - Quality Management System: ISO9001, IATF16949
        </li>
        <li className="body-li">- Environmental Management System: ISO14001</li>
      </ul>
      <h3 className="body-title">Contact Me:</h3>
      <ul className="body-ul">
        <li className="body-li">Matt Jonas, Proprieter</li>
        <li className="body-li">
          <a href="mailto:cejedge@gmail.com" target="_blank">
            Click Here
          </a>
          <span> to contact CEJ EDGE by email (cejedge@gmail.com)</span>
        </li>
      </ul>
    </div>
  );
};
