import React, { useState, useEffect, useRef, useCallback } from 'react';
import './TugOfWar.css';
import { FaMale, FaFemale, FaHeart, FaClock, FaTrophy } from 'react-icons/fa';

const randomLetter = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)];
};

const TugOfWar = () => {
  const [currentLetter, setCurrentLetter] = useState(randomLetter());
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [highestPlayer1Score, setHighestPlayer1Score] = useState(0);
  const [highestPlayer2Score, setHighestPlayer2Score] = useState(0);
  const [winner, setWinner] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);
  const inputRef = useRef(null);

  const fetchScores = () => {
    const player1StoredScore = localStorage.getItem('KaranScore');
    const player2StoredScore = localStorage.getItem('CharviScore');
    setHighestPlayer1Score(player1StoredScore ? parseInt(player1StoredScore, 10) : 0);
    setHighestPlayer2Score(player2StoredScore ? parseInt(player2StoredScore, 10) : 0);
  };

  useEffect(() => {
    fetchScores();
  }, []);

  const determineWinner = useCallback(() => {
    if (player1Score > player2Score) {
      setWinner('Karan');
    } else if (player2Score > player1Score) {
      setWinner('Charvi');
    } else {
      setWinner('It\'s a tie!');
    }
  }, [player1Score, player2Score]);

  useEffect(() => {
    if (winner) return;

    if (gameStarted) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 1) {
            clearInterval(timer);
            if (currentPlayer === 1) {
              setCurrentPlayer(2);
              setTimeLeft(30);
              setCurrentLetter(randomLetter());
            } else {
              determineWinner();
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameStarted, currentPlayer, determineWinner, winner]);

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    if (key === currentLetter) {
      if (currentPlayer === 1) {
        setPlayer1Score(player1Score + 1);
      } else if (currentPlayer === 2) {
        setPlayer2Score(player2Score + 1);
      }
      setCurrentLetter(randomLetter());
    }
  };

  useEffect(() => {
    if (!winner && gameStarted) {
      inputRef.current.focus();
    }
  }, [currentLetter, winner, gameStarted]);

  const handlePlayAgain = () => {
    updateScores();
    setPlayer1Score(0);
    setPlayer2Score(0);
    setWinner(null);
    setCurrentPlayer(1);
    setTimeLeft(30);
    setCurrentLetter(randomLetter());
    setGameStarted(false);
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handlePlayerClick = (player) => {
    if (player === 1) {
      setCurrentPlayer(1);
    } else {
      setCurrentPlayer(2);
    }
  };

  const updateScores = () => {
    const player1StoredScore = localStorage.getItem('KaranScore');
    const player2StoredScore = localStorage.getItem('CharviScore');

    if (player1Score > (player1StoredScore ? parseInt(player1StoredScore, 10) : 0)) {
      localStorage.setItem('KaranScore', player1Score);
      setHighestPlayer1Score(player1Score);
    }

    if (player2Score > (player2StoredScore ? parseInt(player2StoredScore, 10) : 0)) {
      localStorage.setItem('CharviScore', player2Score);
      setHighestPlayer2Score(player2Score);
    }
  };

  return (
    <section className="tug-of-war-section">
      <div className="tug-of-war">
        <div className="game-area">
          <div className="player player1" onClick={() => handlePlayerClick(1)}>
            <FaMale className="icon" />
            <p>Karan</p>
            <p className="score">Score: {player1Score}</p>
            <p className="highest-score">Highest Score: {highestPlayer1Score}</p>
          </div>
          <div className="rope">
            <div className="letters">
              {currentLetter}
            </div>
            <p className="time-left"><FaClock /> Time Left: {timeLeft}</p>
            <p className="current-turn"><FaHeart /> Current Turn: {currentPlayer === 1 ? 'Karan' : 'Charvi'}</p>
            {winner && <p className="winner"><FaTrophy /> Who loves who more? {winner} loves more! (By a lot)</p>}
          </div>
          <div className="player player2" onClick={() => handlePlayerClick(2)}>
            <FaFemale className="icon" />
            <p>Charvi</p>
            <p className="score">Score: {player2Score}</p>
            <p className="highest-score">Highest Score: {highestPlayer2Score}</p>
          </div>
        </div>
        <div className="controls">
          {!winner && !gameStarted && <button onClick={handleStartGame}>Start Game</button>}
          {!winner && gameStarted && <input type="text" ref={inputRef} onKeyDown={handleKeyPress} />}
          {winner && <button onClick={handlePlayAgain}>Play Again</button>}
        </div>
      </div>
    </section>
  );
};

export default TugOfWar;
