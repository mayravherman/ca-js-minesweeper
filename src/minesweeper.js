// Generate player board
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    } board.push(row);
  } return board;
};

// Generate bomb board
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    } board.push(row);
  }

  // Place bombs
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    // Note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
  } return board;
};

// Format board
const printBoard = board => console.log(board.map(row => row.join(' | ')).join('\n'));

// Create and print boards
let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

/*
A few of things to note:
Remember that the bomb board is randomly generated, so your output may not be an exact replica of the output depicted in the example above. Run your code a couple of more times and notice how the bombs rearrange themselves randomly.
Your bomb board may sometimes have fewer bombs on it than what was specified in the function call. This is due to the missing control flow code mentioned in Step 26.
Your bomb board will not appear as neatly formatted as the player board. This is because you are adding null to its board. This is fine, as this is a board that is intended to only hold information, and not to be printed. We are printing here to demonstrate the utility of the generateBombBoard() function.
*/
