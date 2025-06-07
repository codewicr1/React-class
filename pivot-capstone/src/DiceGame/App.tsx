import { useState, useRef, useEffect } from "react";
import "./App.css";
import ReactDice, { ReactDiceRef } from "react-dice-complete";

function App() {
  const [playerTotal, setPlayerTotal] = useState(null);
  const [cpuTotal, setCpuTotal] = useState(null);
  const [winnerTxt, setWinnerTxt] = useState("");
  const [gifUrl, setGifUrl] = useState("");

  const playerRef = useRef<ReactDiceRef>(null);
  const cpuRef = useRef<ReactDiceRef>(null);

  // Sound effects
  const rollSound = new Audio("/roll.mp3");
  const winSound = new Audio("/win.mp3");
  const loseSound = new Audio("/lose.mp3");

  const rollAll = () => {
    // Play roll sound
    rollSound.play();

    // Reset old results
    setWinnerTxt("");
    setGifUrl("");
    setPlayerTotal(null);
    setCpuTotal(null);

    // Trigger dice roll
    playerRef.current?.rollAll();
    cpuRef.current?.rollAll();
  };

  // Runs after PLAYER dice roll
  const handlePlayerRoll = (total, values) => {
    const totalValue = values[0] + values[1];
    setPlayerTotal(totalValue);
  };

  // Runs after CPU dice roll
  const handleCPURoll = (total, values) => {
    const totalValue = values[0] + values[1];
    setCpuTotal(totalValue);
  };

  // When both rolls are complete, check winner
  useEffect(() => {
    if (playerTotal !== null && cpuTotal !== null) {
      checkWinner(playerTotal, cpuTotal);
    }
  }, [playerTotal, cpuTotal]);

  // Check who won and set result
  const checkWinner = (player, cpu) => {
    if (player > cpu) {
      setWinnerTxt("🎉 Congrats, you win!");
      setGifUrl("https://media1.tenor.com/m/_0Ziy1muca4AAAAC/congrats-fireworks.gif");
      winSound.play();
    } else if (cpu > player) {
      setWinnerTxt("😞 Sorry, you lost!");
      setGifUrl("https://media.tenor.com/7LEypD_uye4AAAAM/im-sorry-im-a-loser.gif");
      loseSound.play();
    } else {
      setWinnerTxt("🤝 You Tied!");
      setGifUrl("https://media.tenor.com/8IDc22MHO30AAAAM/rock-mafia-tied-up.gif");
    }
  };

  return (
    <div className="dice-game">
      <div className="overlay">
      <h1>Dice Game vs CPU</h1>
      <button onClick={rollAll}>Roll Dice</button>

      <h3>Player Dice (white with black dots)</h3>
      <ReactDice
        numDice={2}
        ref={playerRef}
        rollDone={handlePlayerRoll}
        faceColor="white"
        dotColor="black"
      />

      <h3>CPU Dice (black with white dots)</h3>
      <ReactDice
        numDice={2}
        ref={cpuRef}
        rollDone={handleCPURoll}
        faceColor="black"
        dotColor="white"
      />

      <h6>Your Total: {playerTotal}</h6>
      <h6>CPU Total: {cpuTotal}</h6>
      <h2>{winnerTxt}</h2>

      {gifUrl && (
        <img
          src={gifUrl}
          alt="Game result"
          style={{ width: "250px", marginTop: "10px", borderRadius: "12px" }}
        />
      )}
    </div>
    </div>
  );
}

export default App;



