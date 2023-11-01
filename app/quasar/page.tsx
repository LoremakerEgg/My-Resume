"use client";

import styles from "./page.module.scss";
import { useState, useEffect } from "react";

export default function Quasar() {
  const [mainNumber, setMainNumber] = useState(0);
  const [payout, setPayout] = useState(0);
  const [credits, setCredits] = useState(200);
  const [start, setStart] = useState(1);
  const [gameOver, setGameOver] = useState(0);
  const randomNumberStart = Math.floor(Math.random() * 2) + 1;
  const [gameState, setGameState] = useState(0);
  const [hideInstructions, setHideInstructions] = useState(false);

  const setLocalStorage = () => {
    localStorage.setItem(
      "credits",
      JSON.stringify({
        credits: Number(credits),
      })
    );
  };

  const clickFourSeven = () => {
    const randomFourSeven = Math.floor(Math.random() * 4) + 4;
    setMainNumber(mainNumber + randomFourSeven);
  };

  const clickOneEight = () => {
    const randomOneEight = Math.floor(Math.random() * 8) + 1;
    setMainNumber(mainNumber + randomOneEight);
  };

  const clickPayOut = () => {
    setCredits(credits + payout);
    setMainNumber(0);
    setPayout(0);
    setStart(1);
  };

  useEffect(() => {
    if (mainNumber === 17) {
      setPayout(200);
    } else if (mainNumber === 18) {
      setPayout(250);
    } else if (mainNumber === 19) {
      setPayout(300);
    } else if (mainNumber === 20) {
      setPayout(400);
    } else if (mainNumber > 20) {
      setGameOver(1);
    }
  }, [mainNumber]);

  useEffect(() => {
    setLocalStorage();
  }, [credits]);

  const creditPayout = () => {
    console.log(credits);
    return payout;
  };

  const creditAccount = () => {
    return credits;
  };

  const clickStart = () => {
    setStart(0);
    setGameOver(0);
    setCredits(credits - 200);
    setMainNumber(randomNumberStart);
  };

  const startGame = () => {
    setStart(1);
    setGameState(1);
    setCredits(200);
  };

  const clickInstructions = () => {
    setHideInstructions(!hideInstructions);
  };

  const resumeGame = () => {
    let storedCredits = JSON.parse(localStorage.credits) || "{}";
    if (storedCredits.credits > 0) {
      setCredits(storedCredits.credits);
      setStart(1);
      setGameState(1);
    } else {
      console.error("NO CREDITS IN ACCOUNT!");
    }
  };

  if (gameState == 0 && hideInstructions == false) {
    return (
      <main className={styles.main}>
        <div className={styles.instructionsDiv}>
          <h1>INSTRUCTIONS FOR QUASAR: </h1>
          <p>
            Quasar is played by adding a random number to your score, allocated
            between set values. You have two options, either to select a random
            number between 1 and 8 or a random number between 4 and 7. The goal
            is to get as close to 20 in your score without going over. The
            payout for each number, starting at 17, are as follows:{" "}
          </p>
          <ul className={styles.payoutList}>
            <li>17 Points: 200 Credits</li>
            <li>18 Points: 250 Credits</li>
            <li>19 Points: 300 Credits</li>
            <li>20 Points: 400 Credits</li>
          </ul>
          <p>It costs 200 Credits to start playing the game!</p>
          <br />

          <button onClick={() => setHideInstructions(!hideInstructions)}>
            Close Instructions
          </button>
          <br />
          <br />
          <br />
          <p>
            Based on the casino game Quasar from the Mass Effect series, created
            by BioWare!
          </p>
        </div>
        <div
          className={styles.divGame}
          id={hideInstructions == false ? styles.blur : ""}
        >
          <div className={styles.buttonDiv}>
            <button onClick={startGame} className={styles.button}>
              Start New Game!
            </button>
          </div>
          <div className={styles.buttonDiv}>
            <button onClick={resumeGame} className={styles.button}>
              Resume Previous Game!
            </button>
          </div>
        </div>
      </main>
    );
  } else if (gameState == 0) {
    return (
      <main className={styles.main}>
        <div
          className={styles.divGame}
          id={hideInstructions == false ? styles.blur : ""}
        >
          <div className={styles.buttonDiv}>
            <button onClick={startGame} className={styles.button}>
              Start New Game!
            </button>
          </div>
          <div className={styles.buttonDiv}>
            <button onClick={resumeGame} className={styles.button}>
              Resume Previous Game!
            </button>
          </div>
        </div>
      </main>
    );
  } else if (start === 1) {
    return (
      <main className={styles.main}>
        <div className={styles.divGame}>
          <h1 className={styles.number}>{mainNumber}</h1>
          <div className={styles.buttonDiv}>
            <button onClick={clickStart} className={styles.button}>
              Play Quasar (200 credits)
            </button>
          </div>
        </div>
        <div>
          <h2>Payout: {creditPayout()}</h2>
        </div>
        <div>
          <h1>Credits: {creditAccount()} </h1>
        </div>
      </main>
    );
  } else if (gameOver === 1) {
    return (
      <main className={styles.main}>
        <div className={styles.divGame}>
          <h1 className={styles.number}>
            Too high! You lose. Press below to play again.
          </h1>
          <div className={styles.buttonDiv}>
            <button onClick={clickStart} className={styles.button}>
              Play Quasar (200 credits)
            </button>
          </div>
        </div>
        <div>
          <h2>Payout: {creditPayout()}</h2>
        </div>
        <div>
          <h1>Credits: {creditAccount()} </h1>
        </div>
      </main>
    );
  } else {
    return (
      <main className={styles.main}>
        <div className={styles.divGame}>
          <h1 className={styles.number}>{mainNumber}</h1>
          <div className={styles.buttonDiv}>
            <button onClick={clickOneEight} className={styles.button}>
              Add 1 - 8
            </button>
            <button onClick={clickPayOut} className={styles.button}>
              Pay Out
            </button>
            <button onClick={clickFourSeven} className={styles.button}>
              Add 4 - 7
            </button>
          </div>
        </div>
        <div>
          <h2>Payout: {creditPayout()}</h2>
        </div>
        <div>
          <h3>Credits: {creditAccount()} </h3>
        </div>
      </main>
    );
  }
  //   </main>
  // );
}
