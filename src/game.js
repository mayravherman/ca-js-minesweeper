import { Board } from './board';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('You hit a bomb. Game over!');
      this._board.print();
    } else if (this._board.hasSafeTiles() === 'false') {
      console.log('You win!');
    } else {
      console.log('Current Board: ');
      this._board.print();
    }
  }
}
