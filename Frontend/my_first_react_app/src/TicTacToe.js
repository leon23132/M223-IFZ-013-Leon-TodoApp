import React, { useState } from "react";
import "./CSS/home.css";

// TicTacToe component
const TicTacToe = () => {
  // State for the game board and current player
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  // Calculate the winner of the game
  const winner = calculateWinner(board);

  // Function to handle square click
  function handleClick(index) {
    if (winner || board[index]) return; // If there's a winner or square is already filled, do nothing
    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext); // Toggle player
  }

  // Render individual square
  function renderSquare(index) {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  }

  // Function to calculate the winner
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
        return board[a]; // Return winner if there's a match
      }
    }
    return null;
  }

  // Function to get game status
  function getStatus() {
    if (winner) {
      return (
        // Display winner if there's a winner
        <div className="winner">Winner: <span className="winner-text">{winner}</span></div>
      );
    } else {
      return `Next player: ${xIsNext ? 'X' : 'O'}`; // Otherwise, display current player
    }
  }

  // Function to handle reset button click
  function handleReset() {
    setBoard(Array(9).fill(null)); // Reset the board
    setXIsNext(true); // Set next player as 'X'
  }

  return (
    <div className="tic-tac-toe">
      <div className="status">{getStatus()}</div> {/* Display game status */}
      <div className="board">
        {/* Render game board */}
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

export default TicTacToe; // Export the TicTacToe component
