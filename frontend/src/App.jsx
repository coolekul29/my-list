import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contactUs";
import Pricing from "./pages/pricing";

import './styles.css';

function App() {

  // Set up theme for light or dark mode
  const [theme, setTheme] = useState("light");

  return (
    <div className={`app-shell ${theme}`}>
      
      {/* The header stays at the top and can switch themes */}
      <Header theme={theme} setTheme={setTheme}/>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contactus" element={<ContactUs />}/>
            <Route path="/pricing" element={<Pricing />}/>
          </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
