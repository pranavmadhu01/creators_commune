import "./App.css";
import React, { useMemo, useCallback, useEffect, useState } from "react";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Totop from "./components/totop/Totop";
import Loading from "./Loading";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])
  const options = useMemo(() => {
    return {
      background: {
        color: "",
      },
      fpsLimit: 120,
      responsive: [],
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 400,
          },
        },
      },
      particles: {
        shape: {
          type: "circle",
        },
        links: {
          enable: true,
          distance: 80,
          color:{
            value:"#00B7D9"
          },
        },
        move: {
          enable: true,
          speed: { min: 0.0, max: 0.4 },
        },
        opacity: {
          value: { min: 0.01, max: 0.5 },
        },
        size: {
          value: { min: 1, max: 6 },
        },
        color: {
          value: "#f408a5",
          // value:"#000" 
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);
  return (
    <>
    {loading === false ?(
      <div className="App">
      <Navbar />
      <Totop />
      <Home />
      <About />
      <News />
      <Team />
      <Footer />
      <Particles init={particlesInit} options={options} />    
    </div>
    ):(
      <Loading />
    )}
    
    </>
  );
}

export default App;
