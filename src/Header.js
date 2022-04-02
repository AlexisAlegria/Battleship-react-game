import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "../src/css/header.css";

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
      <p className="subtitle" ref={textRef}></p>

    </header>
  );
};