"use client";

import styles from "./quasar.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Quasar = () => {
  let storedCredits = JSON.parse(localStorage.credits || "{}");

  const [mainNumber, setMainNumber] = useState(0); //default score at 0
  const [payout, setPayout] = useState(0); //governs payout amount, default 0
  const [credits, setCredits] = useState(
    storedCredits ? storedCredits.credits : 200
  ); //if credits exist within local storage, use value. else set to default (200)
  const [start, setStart] = useState(1); //determines game start state for display purposes
  const [gameOver, setGameOver] = useState(0); //game over screen if score exceeds 20
  const [trueGameOver, setTrueGameOver] = useState(false); //a true game over that enables defeat screen when credits reach 0

  const randomNumberStart = Math.floor(Math.random() * 2) + 1; //random number generator

  const [gameState, setGameState] = useState(0); //game state for initilization menu (new game vs resume)
  const [hideInstructions, setHideInstructions] = useState(false); //boolean for determining hiding or displaying instructions

  const setLocalStorage = () => {
    localStorage?.setItem(
      "credits",
      JSON.stringify({
        credits: Number(credits),
      })
    );
  }; //saves credits to local storage

  const clickFourSeven = () => {
    const randomFourSeven = Math.floor(Math.random() * 4) + 4;
    setMainNumber(mainNumber + randomFourSeven);
  }; //generates random number between 4-7 and adds it to main score

  const clickOneEight = () => {
    const randomOneEight = Math.floor(Math.random() * 8) + 1;
    setMainNumber(mainNumber + randomOneEight);
  }; //generates random number between 1-8 and adds it to main score

  const clickPayOut = () => {
    setCredits(credits + payout);
    setMainNumber(0);
    setPayout(0);
    setStart(1);
  }; //pays you credits based on score

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
  }, [mainNumber]); //updates payout display when mainNumber changes

  useEffect(() => {
    if (localStorage) {
      setLocalStorage();
    }
  }, [credits]); //updates local storage credits when credits update

  const creditPayout = () => {
    console.log(credits);
    return payout;
  }; //gives you your payout

  const creditAccount = () => {
    return credits;
  }; //gives you your credits

  const clickStart = () => {
    setStart(0);
    setGameOver(0);
    setCredits(credits - 200);
    setMainNumber(randomNumberStart);
  }; //starts the game and detracts 200 credits from your account

  const startGame = () => {
    setStart(1);
    setGameState(1);
    setCredits(200);
  }; //new game function

  const resumeGame = () => {
    if (storedCredits.credits > 0) {
      setCredits(storedCredits.credits);
      setStart(1);
      setGameState(1);
    } else {
      console.error("NO CREDITS IN ACCOUNT!");
    }
  }; //resume game function, pulls your credits from local storage if they exist, else feeds error if they are 0

  if (gameState == 0 && hideInstructions == false) {
    return (
      <main className={styles.main}>
        <h1 className={styles.titles}>QUASAR</h1>
        <div className={styles.instructionsDiv}>
          <h1>Welcome to Quasar!</h1>
          <br />
          <h3>Instructions: </h3>
          <br />
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
          <button
            onClick={() => setHideInstructions(!hideInstructions)}
            className={styles.button}
          >
            Play Game
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
        <h1 className={styles.titles}>QUASAR</h1>
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
        <h1 className={styles.titles}>QUASAR</h1>
        <div className={styles.divGame}>
          <h1 className={styles.number}>{mainNumber}</h1>
          <div className={styles.buttonDiv}>
            <button onClick={clickStart} className={styles.button}>
              Play Quasar (200 credits)
            </button>
          </div>
        </div>
        <div>
          <h2 className={styles.infoText}>Payout: {creditPayout()}</h2>
        </div>
        <div>
          <h1 className={styles.infoText}>
            Credits: <span style={{ color: "green" }}>{creditAccount()}</span>{" "}
          </h1>
        </div>
        <button onClick={() => setHideInstructions(!hideInstructions)}>
          View Instructions
        </button>
        <Link href="/">
          <button>Return to Home</button>
        </Link>
      </main>
    );
  } else if (gameOver === 1) {
    return (
      <main className={styles.main}>
        <h1 className={styles.titles}>QUASAR</h1>
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
          <h2 className={styles.infoText}>Payout: {creditPayout()}</h2>
        </div>
        <div>
          <h1 className={styles.infoText}>
            Credits: <span style={{ color: "green" }}>{creditAccount()}</span>{" "}
          </h1>
        </div>
      </main>
    );
  } else {
    return (
      <main className={styles.main}>
        <h1 className={styles.titles}>QUASAR</h1>
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
          <h2 className={styles.infoText}>Payout: {creditPayout()}</h2>
        </div>
        <div>
          <h1 className={styles.infoText}>
            Credits: <span style={{ color: "green" }}>{creditAccount()}</span>{" "}
          </h1>
        </div>
      </main>
    );
  }
};

export default Quasar;
