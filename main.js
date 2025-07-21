"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(fieldArray = [[]]) {
		this.field = fieldArray;

		// Replace with your own code //
		// Set the home position at (0, 0) before the game starts
		this.positionRow = 0;
		this.positionCol = 0;
		this.field[this.positionRow][this.positionCol] = pathCharacter;
	}

	//Print field //
 	print() {
        clear(); 

        this.field.forEach(row => {
            console.log(row.join(''));
        });

	}

	move(newRow, newCol) {

		
		// check field //
		if(newRow < 0 || newRow >= this.field.length || 
		   newCol < 0 || newCol >= this.field[0].length
		){
			return {status: 'lose', message: 'You are out of the field! You Lose!'}
		};
		//check rule hole//
		const yourCharacter = this.field[newRow][newCol];
		if(yourCharacter === hole){
			this.field[newRow][newCol] = pathCharacter;
			return{status: 'lose', message: 'You fall into the Hole! You Lose!'}
		} else if (yourCharacter === hat){
			this.field[newRow][newCol] = pathCharacter
			return {status: 'win', message: 'you got a legendary hat! You win!'}
		} else {
			this.field[this.positionRow][this.positionCol] = fieldCharacter//chang position back to path//
			this.positionRow = newRow; //new position after walking//
			this.positionCol= newCol;
			this.field[this.positionRow][this.positionCol] = pathCharacter;
			return {status: 'walking', message: 'what to do next?'};
		}
	



	}
	moveRight() { return this.move(this.positionRow, this.positionCol + 1); }
	moveLeft() { return this.move(this.positionRow, this.positionCol - 1); }
	moveUp() { return this.move(this.positionRow - 1, this.positionCol); }
	moveDown() { return this.move(this.positionRow + 1, this.positionCol); }


}
// Game Mode ON //
function runGame() {
  const initialFieldArray = [
    ["*", "░", "O"],
    ["░", "O", "░"],
    ["░", "^", "░"],
  ];
  const game = new Field(initialFieldArray); 

  let gameStatus = 'playing'; 
  let message = 'find the hat';

  
  while (gameStatus === 'playing') {
    game.print(); 
    console.log(message);

    const direction = prompt('Which way? (u, d, l, r) or type "exit" to quit: ').toLowerCase();


    if (direction === 'exit') {
        gameStatus = 'quit';
        message = 'already exit.';
        break;
    }

    let moveResult; 
    switch (direction) { 
      case 'u':
        moveResult = game.moveUp();
        break;
      case 'd':
        moveResult = game.moveDown();
        break;
      case 'l':
        moveResult = game.moveLeft();
        break;
      case 'r':
        moveResult = game.moveRight();
        break;
      default:
 
        moveResult = { status: 'playing', message: 'you should use u, d, l, r.' };
        break;
    }

 
    gameStatus = moveResult.status;
    message = moveResult.message;
  }


  game.print(); 
  console.log('-----------------------------------');
  console.log(`Game End: ${message}`);
  console.log('-----------------------------------');
}

runGame();

