import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./navbar";
import Home from "./home";
import About from "./about";
import Project from "./projects";
import Services from "./services";
import Contact from "./contact";
const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index exact path="/" element={<Home />} />
          <Route index exact path="/about" element={<About />} />
          <Route index exact path="/project" element={<Project />} />
          <Route index exact path="/services" element={<Services />} />
          <Route index exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default MainRouter;
