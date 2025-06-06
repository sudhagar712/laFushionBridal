import React, { useState, useEffect } from "react";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import backgallary from "../src/assets/images/spa2.webp"

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
          <Navbar />
          <LandingPage />
        </>
      )}
    </>
  );
};

export default App;
