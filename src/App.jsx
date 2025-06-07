import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import backgallary from "../src/assets/images/spa2.webp"
import BridalPage from "./Pages/BridalPage";
import Makeup from "./Pages/Makeup";
import { MdContactPage } from "react-icons/md";
import ContactForm from "./Pages/ContactPage";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div
          className="loading h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${backgallary})` }}
        >
          <h2 className="text-4xl font-bold text-white drop-shadow-lg animate-pulse">
            Loading...
          </h2>
        </div>
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/bridalCollections" element={<BridalPage />} />
              <Route path="/Makeup" element={<Makeup />} />
              <Route path="/contact" element={<ContactForm/>} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
};

export default App;
