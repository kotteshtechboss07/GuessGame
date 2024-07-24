import React, { useState } from "react";
import "./App.css"; // Import your CSS file
const randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);
export default function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState("");
  function onClicks() {
    const userGuess = parseInt(value);
    if (userGuess === randomNumber) {
      setResults(<><h3>Your guess is correct! 🎉🎉🎉</h3> <img src="src\congrats-9.gif"/></>);
    } else if (userGuess < randomNumber) {
      setResults(<h3>Your guess is too low. 🪫🪫🪫</h3>);
    } else if (userGuess > randomNumber) {
      setResults(<h3>Your guess is too high. 💀💀💀</h3>);
    }
  }
  return (
    <div className="container">
      <h2>Guess the number</h2>
      <p>Guess a number between 0 to 10</p>
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="button" onClick={onClicks}>
        Guess
      </button>
      {results}
    </div>
  );
}
