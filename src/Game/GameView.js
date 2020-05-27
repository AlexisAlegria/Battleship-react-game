import React from 'react';

import { PlayerBoard } from './PlayerBoard';
import { PlayerFleet } from './PlayerFleet';
import { TestBoard } from './TestBoard';

export const GameView = ({
  availableShips,
  selectShip,
  currentlyPlacing,
  setCurrentlyPlacing,
  rotateShip,
  placeShip,
  placedShips,
  startTurn,
}) => {
  return (
    <section id="game-screen">
      <PlayerFleet
        availableShips={availableShips}
        selectShip={selectShip}
        currentlyPlacing={currentlyPlacing}
      />

      <TestBoard
        currentlyPlacing={currentlyPlacing}
        setCurrentlyPlacing={setCurrentlyPlacing}
        rotateShip={rotateShip}
        placeShip={placeShip}
        placedShips={placedShips}
        startTurn={startTurn}
      />
      <PlayerBoard playerType="computer" />
      {/* <TipBox /> */}
    </section>
  );
};
