'use strict';

// Format game board
var printBoard = function printBoard(board) {
  console.log('Current Board: ');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

// Create game board structure
var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

printBoard(board);

// Hardcoded board
board[0][1] = '1'; // player's guess
board[2][2] = 'B'; // bomb on the board
printBoard(board);