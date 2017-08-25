'use strict';

// Hardcoded rows
var blankLine = '  |   |  '; // Empty row
var guessLine = '1 |   |  '; // First square selected
var bombLine = '  | B |  '; // Bomb in center square

// Empty game board
console.log('This is what an empty board would look like:');
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);

// Simulated game board
console.log('This is what a board with a guess and a bomb on it would look like');
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);