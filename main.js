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

	// Your Code //

}
// Game Mode ON
const newGame = new Field([
    ["░", "░", "O"],
    ["░", "O", "░"],
    ["░", "^", "░"],
]);
newGame.print();

