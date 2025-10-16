

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Other from "./pages/Other";
import Coursework from "./pages/Coursework";
import Identity from "./pages/Identity";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
  <main className="pt-24 flex-1 pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/" element={<Projects />} />
          <Route path="/projects/:id/" element={<ProjectPage />} />
          <Route path="/achievements/" element={<Achievements />} />
          <Route path="/other/:id/" element={<Other />} />
          <Route path="/other/achievements/" element={<Achievements />} />
          <Route path="/other/coursework/" element={<Coursework />} />
          <Route path="/other/identity/" element={<Identity />} />
          <Route path="/other/" element={<Other />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
