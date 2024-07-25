import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import PageNotFound from "./pages/Pagenotfount/PageNotFound";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contactpage/Contact";
import ServicesPage from "./pages/Servicespage/ServicesPage";

const App = () => {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <div className="app">
      <Header openMenu={openMenu} setopenMenu={setopenMenu} />
      <div onClick={() => setopenMenu(false)}>
        <Routes>
          <Route exact path="/" element={<Homepage openMenu={openMenu} />} />
          <Route exact path="/about" element={<Aboutpage />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* add remaining routes here */}
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </div>
        <Footer setopenMenu={setopenMenu} />
    </div>
  );
};

export default App;
