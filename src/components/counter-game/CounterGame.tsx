import React, { useEffect, useState } from 'react';

const CounterGame = () => {
  const [highScore, setHighScore] = useState(0);
  const [count, setCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = () => {
    setIsPlaying(true);
  };

  const increment = () => {
    setCount((c) => c + 1);
    setHighScore(Math.max(highScore, count));
  };

  useEffect(() => {
    if (!isPlaying) return;
    if (timeRemaining === 0) return;
    const id = setInterval(() => {
      setTimeRemaining((t) => t - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [isPlaying, timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setIsPlaying(false);
    }
  }, [timeRemaining]);

  return (
    <main className='counter-container'>
      <header>
        <h1> High Score: {highScore} </h1>
      </header>
      <section className='time-remaining'>
        <h2>Time Remaining: {timeRemaining}</h2>
      </section>
      <section className='count'>Current Score: {count}</section>
      <section className='click-button'>
        {isPlaying ? (
          <button onClick={increment}>CLICK</button>
        ) : (
          <button onClick={startGame}>Start Game</button>
        )}
      </section>
    </main>
  );
};

export default CounterGame;
