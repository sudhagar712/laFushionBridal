import React, { useState, useEffect } from "react";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
// import Detailsnav from './Components/Detailsnav';

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
        <div className="loading h-screen flex flex-col items-center justify-center bg-white">
          <div id="preloader">
            <div className="spinner flex gap-2">
              <span className="ball-1 w-4 h-4 bg-black rounded-full animate-bounce" />
              <span className="ball-2 w-4 h-4 bg-black rounded-full animate-bounce delay-100" />
              <span className="ball-3 w-4 h-4 bg-black rounded-full animate-bounce delay-200" />
              <span className="ball-4 w-4 h-4 bg-black rounded-full animate-bounce delay-300" />
              <span className="ball-5 w-4 h-4 bg-black rounded-full animate-bounce delay-400" />
              <span className="ball-6 w-4 h-4 bg-black rounded-full animate-bounce delay-500" />
              <span className="ball-7 w-4 h-4 bg-black rounded-full animate-bounce delay-600" />
              <span className="ball-8 w-4 h-4 bg-black rounded-full animate-bounce delay-700" />
            </div>
            <h2 className="mt-4 text-xl font-extrabold text-yellow-400">Loading..</h2>
          </div>
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
