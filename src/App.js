import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ContactUs } from "./components/Body/components/ContactUs/ContactUs";
import { WhatWeDo } from "./components/Body/components/WhatWeDo/WhatWeDo";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer"
import { Home } from "./components/Body/Home/Home";

function App() {
  return (
    <>
      <HashRouter>
        <div className="react-app">
          <Header />
          <Routes>
            {/* <Route path="/" element={< />} /> */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
