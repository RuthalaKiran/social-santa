import React from "react";
import "./Homepage.css";
import Intro from "../../components/Intro/Intro";
import Services from "../../components/Services/Services";
import ApartSection from "../../components/ApartSection/ApartSection";
import HowDoWeDo from "../../components/HowDoWeDo/HowDoWeDo";
import Projects from "../../components/Projects/Projects";
import Testimonials from "../../components/Testimonials/Testimonials";
import Clients from "../../components/Clients/Clients";

const Homepage = ({ openMenu }) => {
  return (
    <div
      style={openMenu ? { backgroundColor: "gray" } : {}}
      className={` ${openMenu ? "blur-homepage" : ""} homepage`}
    >
      <Intro />
      <Services />
      <ApartSection />
      <HowDoWeDo />
      <Projects />
      <Testimonials />
      <Clients />
    </div>
  );
};

export default Homepage;
