

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
import Work from "./pages/Work";
import WorkPage from "./pages/WorkPage";
import ThoughtEssays from "./pages/ThoughtEssays";
import Travel from "./pages/Travel";
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
          <Route path="/work/" element={<Work />} />
          <Route path="/work/:id/" element={<WorkPage />} />
          <Route path="/achievements/" element={<Achievements />} />
          <Route path="/other/:id/" element={<Other />} />
          <Route path="/other/achievements/" element={<Achievements />} />
          <Route path="/other/coursework/" element={<Coursework />} />
          <Route path="/other/identity/" element={<Identity />} />
          <Route path="/other/travel/" element={<Travel />} />
          <Route path="/other/" element={<Other />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/essays/" element={<ThoughtEssays />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
