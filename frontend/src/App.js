import "./App.css";
import React, { useMemo, useCallback } from "react";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Totop from "./components/totop/Totop";

function App() {
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
          onHover: {
            // enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 200,
          },
        },
      },
      particles: {
        shape: {
          type: "square",
        },
        links: {
          enable: true,
          distance: 50,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 2 },
        },
        opacity: {
          value: { min: 0.3, max: 0.5 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);
  return (
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
  );
}

export default App;
