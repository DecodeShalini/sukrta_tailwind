import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactHeader from "./Components/Headers/ContactHeader";
import NavHeader from "./Components/Headers/NavHeader";

// Page components
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Layout from "./Components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
