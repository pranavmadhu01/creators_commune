import "./Loading.css";
import React, { useMemo, useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles"
import ReactLoading from "react-loading";
import Logo from "./images/Logo.svg";
export default function Loading() {
  const options = useMemo(() => {
    return {
      background: {
        color: "#000",
      },
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
          color: {
            value: "#00B7D9",
          },
        },
        move: {
          enable: true,
          speed: { min: 0.5, max: 1 },
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
    <div className="loading-wrapper">
      <img src={Logo} alt=""  className="loading-logo"/>
      <Particles init={particlesInit} options={options} />    

      <ReactLoading type="bubbles" color="#f408a5" />

    </div>
  );
}
