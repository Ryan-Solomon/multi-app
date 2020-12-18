import React, { useState } from 'react';
import './TicTacToe.styles.scss';

const initialBoard = [null, null, null, null, null, null, null, null, null];

const TicTacToe = () => {
  const [board, setBoard] = useState<(null | number)[]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('One');

  const clickSquare = (idx: number) => {
    if (currentPlayer === 'One') {
      const newBoard = board.slice();
      newBoard[idx] = 1;
      setBoard(newBoard);
    } else if (currentPlayer === 'Two') {
      const newBoard = board.slice();
      newBoard[idx] = -1;
      setBoard(newBoard);
    }
  };

  return (
    <main className='tic-tac-toe-container'>
      <h1>Player: {currentPlayer}</h1>
      <div className='r row-1'>
        {board.map((num, idx) => {
          if (idx < 3) {
            return (
              <button
                onClick={() => clickSquare(idx)}
                key={Math.random()}
                className='cell'
              >
                {num === 1 ? <h2>0</h2> : num === -1 ? <h2>X</h2> : <h2></h2>}
              </button>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className='r row-2'>
        {board.map((num, idx) => {
          if (idx > 2 && idx < 6) {
            return (
              <button
                onClick={() => clickSquare(idx)}
                key={Math.random()}
                className='cell'
              >
                {num === 1 ? <h2>0</h2> : num === -1 ? <h2>X</h2> : <h2></h2>}
              </button>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className='r row-3'>
        {board.map((num, idx) => {
          if (idx >= 6) {
            return (
              <button
                onClick={() => clickSquare(idx)}
                key={Math.random()}
                className='cell'
              >
                {num === 1 ? <h2>0</h2> : num === -1 ? <h2>X</h2> : <h2></h2>}
              </button>
            );
          } else {
            return null;
          }
        })}
      </div>
    </main>
  );
};

export default TicTacToe;
