import React from "react";
import { ContactButton } from "../components/ContactUs/ContactButton/ContactButton";
import Helmet from "react-helmet";
import "./Home.css";

export const Home = () => {
  const title = "CEJ Edge LLC | Home"
  const description = "CEJ Edge LLC has a focus on advanced battery manufacturing, business plan deployment, and general consulting while promoting a Zero(0) defect focus."

  return (
    <div className="home">
      <Helmet title={title} description={description} />
      <h1 className="home-header">
        CEJ Edge LLC
      </h1>
      <div className="home-body">
        <p className="home-body-para">CEJ Edge has experienced consulting focus on advanced battery
          manufacturing of cells, modules and packs.
        </p>
        <p className="home-body-para">
          CEJ Edge proven results include implementation
          and manufacturing of Zero(0) defect production processes for high and low
          voltage battery systems to major OEM automotive companies.
        </p>
        <p className="home-body-para">
          CEJ Edge supports manufacturing planning, business plan deployment, cost estimation,
          prototype and production scenario planning, prototype and production process development,
          risk reduction, facility planning, equipment SOR, aftermarket services, and more.
        </p>
        <p className="home-contact-para">
          Contact CEJ Edge to discuss how to help with your project
        </p>
        <ContactButton />
      </div>
    </div >
  );
};
