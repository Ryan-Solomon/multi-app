import React, { useEffect, useState } from 'react';
import './TicTacToe.styles.scss';

const initialBoard = [null, null, null, null, null, null, null, null, null];

const TicTacToe = () => {
  const [board, setBoard] = useState<(null | number)[]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('One');
  const [winner, setWinner] = useState<'X' | 'O' | 'T' | null>(null);

  const clickSquare = (idx: number) => {
    if (currentPlayer === 'One') {
      const newBoard = board.slice();
      newBoard[idx] = 1;
      setBoard(newBoard);
      setCurrentPlayer('Two');
    } else if (currentPlayer === 'Two') {
      const newBoard = board.slice();
      newBoard[idx] = -1;
      setBoard(newBoard);
      setCurrentPlayer('One');
    }
  };

  useEffect(() => {
    const potentialPaths = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let isNullValue = false;
    for (let i = 0; i < potentialPaths.length; i++) {
      let sum = 0;
      for (let j = 0; j < potentialPaths[i].length; j++) {
        let currentIdx = potentialPaths[i][j];
        if (board[currentIdx]) {
          sum += board[currentIdx]!;
        } else {
          isNullValue = true;
        }
      }
      if (sum === 3) {
        setWinner('O');
      } else if (sum === -3) {
        setWinner('X');
      }
    }

    if (!isNullValue) {
      setWinner('T');
    }
  }, [board]);

  if (winner) {
    return (
      <div>
        <h1>The winner is {winner}</h1>
        <button
          onClick={() => {
            setBoard(initialBoard);
            setWinner(null);
          }}
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <main className='tic-tac-toe-container'>
      <h1>Player: {currentPlayer}</h1>
      <div className='r row-1'>
        {board.map((num, idx) => {
          if (idx < 3) {
            return (
              <button
                disabled={num !== null}
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
                disabled={num !== null}
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
                disabled={num !== null}
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
