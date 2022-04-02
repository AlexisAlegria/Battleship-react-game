import React from 'react';
import "../src/css/welcome.css";

export const WelcomeScreen = ({ startPlay, playSound }) => {
  return (
      <div className="welcome-div">
        <h1 className="tip-box-title-welcome">Rules</h1>
        <p className="player-tip">
          You and your opponent, your Notebook, are selected and competing navy commanders.
        </p>
        <p className="player-tip">
          Your fleets are positioned at
          secret coordinates, and you take turns firing torpedoes at each other.
        </p>
        <p className="player-tip">
          The first to sink the other’s whole fleet <strong>wins!</strong>
        </p>
        <button className="welcome-btn" onClick={startPlay} >Play now!</button>
        <br/><br/>
      </div>
  );
};