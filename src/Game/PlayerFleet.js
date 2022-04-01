import React from 'react';
import { ReplicaBox } from './ReplicaBox';

export const PlayerFleet = ({
  availableShips,
  selectShip,
  currentlyPlacing,
  startTurn,
  startAgain,
}) => {
  let shipsLeft = availableShips.map((ship) => ship.name);

  // For every ship still available, return a Replica Box with the ship's name and as many squares as its length
  let shipReplicaBoxes = shipsLeft.map((shipName) => (
    <ReplicaBox
      selectShip={selectShip}
      key={shipName}
      isCurrentlyPlacing={currentlyPlacing && currentlyPlacing.name === shipName}
      shipName={shipName}
      availableShips={availableShips}
    />
  ));

  let fleet = (
    <div id="replica-fleet">
      <div className="tip-box-title"> Your Ships</div>
      {shipReplicaBoxes}
      <p className="player-tip">Right click to rotate before you position.</p>
      <p className="restart" onClick={startAgain}>
        Restart
      </p>
    </div>
  );

  let startPlayButton = (
    <div id="play-ready">
      <p className="player-tip">Ships are in formation!</p>
      <br></br>
      <button id="start-play-button" onClick={startTurn}>
        Start game!
      </button>
    </div>
  );

  return (
    <div id="available-ships">
      {availableShips.length > 0 ? fleet : startPlayButton}
    </div>
  );
};
