import React, { useState } from "react";
import "./CSS/home.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(index) {
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function renderSquare(index) {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  }

  function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function getStatus() {
    if (winner) {
      return (
        
        <div className="winner">Winner: <span className="winner-text">{winner}</span></div>
      );
    } else {
      return `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  }

  function handleReset() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="tic-tac-toe">
      <div className="status">{getStatus()}</div>
      <div className="board">
        {Array(3).fill(null).map((_, row) => (
          <div key={row} className="board-row">
            {Array(3).fill(null).map((_, col) => (
              <span key={col}>{renderSquare(row * 3 + col)}</span>
            ))}
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={handleReset}>Reset</button> {/* Reset-Button */}
    </div>
  );
};

export default TicTacToe;
