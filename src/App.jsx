import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import BridalPage from "./Pages/BridalPage";
import Makeup from "./Pages/Makeup";
import ContactForm from "./Pages/ContactPage";
import loadingVideo from "./assets/images/bridemaster2.mp4";
import SaloonPage from "./Pages/SaloonPage";
import Spapages from "./Pages/Spapages";
import Footer from "./Components/Footer";

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
      }, 70); // 70ms * 100 = 7000ms or 7 seconds
    }

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="relative h-screen w-full overflow-hidden">
          {/* ✅ Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={loadingVideo}
            autoPlay
            muted
            loop
          />

          {/* ✅ Overlay Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/70">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-2 animate-pulse">
              Loading...
            </h2>
            <p className="text-white text-xl font-medium">{progress}%</p>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/services/bridalcollections"
              element={<BridalPage />}
            />
            <Route path="/services/saloon" element={<SaloonPage/>}/>
            <Route path="/services/spa" element={<Spapages/>}/>
            <Route path="/Makeup" element={<Makeup />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
