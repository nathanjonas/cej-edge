import React from "react";
import Helmet from "react-helmet";
import "./ContactUs.css"

export const ContactUs = () => {
  const title = "Contact Us | CEJ Edge, LLC"
  const description = "Battery manufacturing, business plan deployment, and general consulting."
  return (
    <>
      <Helmet title={title} description={description} />
      <h1 className="contact-us-header">
        CEJ Edge LLC
      </h1>
      <div className="contact-us-body">
        <p className="contact-us-body-header">Contact Us</p>
        <p className="contact-us-body-sub-header">Contact us today to discuss battery manufacturing,
          business plan deployment, and general consulting.
        </p>
        <a className="way-to-contact way-to-contact-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matthew-jonas-95611510">LinkedIn</a>
        <span className="way-to-contact">513-257-8263</span>
        <a className="way-to-contact way-to-contact-link" href="mailto:cejedge@gmail.com" rel="noopener noreferrer" target="_blank">
          cejedge@gmail.com
        </a>
      </div>
    </>
  )
};
