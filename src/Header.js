import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "../src/css/header.css";
import fireIcon from "../src/assets/FireIcon.svg.png";
import burstIcon from "../src/assets/Bursticon.svg.png";
export const Header = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { showCursor: false, strings: ['Fire and Canyons at the Sea ... Yeah!' ], backDelay: 3000, backSpeed:  25 })
  }, []);

  return (
    <header>
      <div className="title">
        <div className="skills-progress-bar-container">
          <div className="progress-bar stripes animated reverse slower">
            <h1 className="header-h1">Battleship</h1>
          </div>
        </div>
      </div>
      <div className="subtitle-container">
        <img src={burstIcon} alt="fire icon" className="fire-icon"/>
        <img src={burstIcon} alt="fire icon" className="fire-icon"/>
        <img src={fireIcon} alt="fire icon" className="fire-icon"/>
        <img src={fireIcon} alt="fire icon" className="fire-icon"/>
        <img src={fireIcon} alt="fire icon" className="fire-icon"/>
        <img src={burstIcon} alt="fire icon" className="fire-icon"/>
        
        <p className="subtitle" ref={textRef}></p>
        <img src={burstIcon} alt="fire icon" className="fire-icon"/>
        <img src={fireIcon} alt="fire icon" className="fire-icon"/>
        <img src={fireIcon} alt="fire icon" className="fire-icon"/>
        <img src={fireIcon} alt="fire icon" className="fire-icon"/>
        <img src={burstIcon} alt="fire icon" className="fire-icon"/>
        <img src={burstIcon} alt="fire icon" className="fire-icon"/>
      </div>

    </header>
  );
};