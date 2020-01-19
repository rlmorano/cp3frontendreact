import React from "react";

// reactstrap components

// core components
import NavBar from "components/Navbars/NavBar.js";
import Footer from "components/Footers/Footer.js";

// index sections

import PromoOne from "pagesections/PromoOne";
import Services from "pagesections/Services";
import Gallery from "pagesections/Gallery";
import AboutUs from "pagesections/AboutUs";
import Team from "pagesections/Team";
import ContactUs from "pagesections/ContactUs";





function Home() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <NavBar />
      <div className="main">
        <PromoOne />
        <Services />
        <Gallery />
        <AboutUs />
        <Team />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default Home;
