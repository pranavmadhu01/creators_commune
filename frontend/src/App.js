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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  const options = useMemo(() => {
    return {
      background: {
        color: "",
      },
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
            distance: 300,
          },
        },
      },
      particles: {
        shape: {
          type: "circle",
        },
        links: {
          enable: true,
          distance: 60,
          color: {
            value: "#00B7D9",
          },
        },
        move: {
          enable: true,
          speed: { min: 0.1, max: 0.5 },
        },
        opacity: {
          value: { min: 0.01, max: 0.5 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        color: {
          value: "#f408a5",
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);
  return (
    <>
      {loading === false ? (
        <div className="App">
          <Navbar />
          <Totop />
          <Home />
          <About />
          <News />
          <Team />
          <Particles init={particlesInit} options={options} />
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
