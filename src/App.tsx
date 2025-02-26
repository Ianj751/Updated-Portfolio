import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";

import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";

const Animated = () => {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <div className="bg-pattern ibm-plex-mono-bold">
      <BrowserRouter>
        <Navbar />
        <Animated />
      </BrowserRouter>
    </div>
  );
}

export default App;
