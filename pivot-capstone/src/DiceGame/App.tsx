import { useState, useRef } from "react";
import "./App.css";
import ReactDice, { ReactDiceRef } from "react-dice-complete";

function App() {
  const [playerDice, setPlayerDice] = useState();
  const [cpuDice, setCpuDice] = useState();
  const [winnerTxt, setWinnerTxt] = useState();

  const reactDice = useRef<ReactDiceRef>(null);

  // This function runs after dice finish rolling
  const rollDice = (total, values) => {
    // First two dice for player
    const playerTotal = values[0] + values[1];
    // Next two dice for CPU
    const cpuTotal = values[2] + values[3];

    setPlayerDice(playerTotal);
    setCpuDice(cpuTotal);

    if (playerTotal > cpuTotal) {
      setWinnerTxt("Congrats, you win!");
    } else if (cpuTotal > playerTotal) {
      setWinnerTxt("Sorry, you lost!");
    } else {
      setWinnerTxt("You Tied!");
    }
  };

  // This function starts the roll
  const rollAll = () => {
    reactDice.current?.rollAll();
  };

  return (
    <div className="container">
      <h1>Dice Game vs CPU</h1>
      <button onClick={rollAll}>Roll Dice</button>

      <ReactDice
        numDice={4} // 2 for player, 2 for CPU
        ref={reactDice}
        rollDone={rollDice}
      />

      <h6>Your Total: {playerDice}</h6>
      <h6>CPU Total: {cpuDice}</h6>
      <h2>{winnerTxt}</h2>
    </div>
  );
}

export default App;
