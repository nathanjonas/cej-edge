import React from "react";
import { Link } from "react-router-dom";

import "./ContactButton.css"

export const ContactButton = () => {
    return (
        <div className="contact-button-container">
            <Link className="contact-button-link" to="/contact-us">Contact</Link>
        </div>
    )
}