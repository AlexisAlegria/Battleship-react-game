import React from 'react';

export const PlayerTips = ({
  gameState,
  hitsbyPlayer,
  hitsByComputer,
  startAgain,
  winner,
}) => {
  let numberOfHits = hitsbyPlayer.length;
  let numberOfSuccessfulHits = hitsbyPlayer.filter((hit) => hit.type === 'hit').length;
  let accuracyScore = Math.round(100 * (numberOfSuccessfulHits / numberOfHits));
  let succesfulComputerHits = hitsByComputer.filter((hit) => hit.type === 'hit').length;

  let gameOverPanel = (
    <div className="gameover-container">
      <div className="tip-box-title">Game Over!</div>
      <br></br>
      <p className="player-tip-game">
        {winner === 'player' ? 'You win! 🎉' : 'You lose 😭.\nBetter luck next time! '}
      </p>
      <br></br>
      <p className="restart" onClick={startAgain}>
        Play again?
      </p>
    </div>
  );

  let tipsPanel = (
    <div className="playertips-container">
      <div className="tip-box-title">Stats</div>
      <div id="firing-info">
        <ul>
          <li>{numberOfSuccessfulHits} successful hits</li>
          <li>{accuracyScore > 0 ? `${accuracyScore}%` : `0%`} accuracy </li>
        </ul>
        <br></br>
        <hr></hr>
        <br></br>
        <p className="player-tip-game">The first to sink all 5 opponent ships wins.</p>
        <br></br>
        <p className="restart" onClick={startAgain}>
          Restart
        </p>
      </div>
    </div>
  );

  return (
    <div id="player-tips">
      {numberOfSuccessfulHits === 17 || succesfulComputerHits === 17
        ? gameOverPanel
        : tipsPanel}
    </div>
  );
};
