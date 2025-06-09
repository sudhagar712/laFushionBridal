import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import BridalPage from "./Pages/BridalPage";
import Makeup from "./Pages/Makeup";
import logo from "./assets/images/logo.png";
import ContactForm from "./Pages/ContactPage";
import loadingVideo from "./assets/images/mainlol2.mp4";
import SaloonPage from "./Pages/SaloonPage";
import Spapages from "./Pages/Spapages";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPages";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false);
            return 100;
          }
          return prev + 1;
        });
      }, 70);
    }
    return () => clearInterval(interval);
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="relative h-screen w-full overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={loadingVideo}
            autoPlay
            muted
            loop
          />

          {/* Gradient + dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/70 z-10" />

          {/* Loader content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
            <img
              src={logo}
              alt="logo"
              className="w-32 md:w-48 animate-bounce drop-shadow-2xl mb-6"
            />
            <h2 className="text-md md:text-xl font-bold drop-shadow-xl animate-pulse">
              Preparing your beauty experience...
            </h2>
            <div className="w-64 h-2 bg-white/30 rounded-full mt-6 overflow-hidden">
              <div
                className="h-full bg-yellow-400 transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="mt-2 text-yellow-300 font-semibold">{progress}%</p>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/services/bridalcollections" element={<BridalPage />} />
            <Route path="/services/saloon" element={<SaloonPage />} />
            <Route path="/services/spa" element={<Spapages />} />
            <Route path="/Makeup" element={<Makeup />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
