//This file handles the gameplay

export class LetterNode {
    constructor(letter, xpos, ypos) {
        this.letter = letter;
        this.neighbours = null;
        this.x = xpos;
        this.y = ypos;
//        grid[xpos, ypos] = this;
    }
    /*
    getNeighbours = function () {
        //Check the eight neighbouring squares
        if (grid[this.x - 1][this.y - 1] != null) {
            this.neighbours += grid[this.x - 1][this.y - 1];
        }
        if (grid[this.x - 1][this.y] != null) {
            this.neighbours += grid[this.x - 1][this.y];
        }
        if (grid[this.x - 1][this.y + 1] != null) {
            this.neighbours += grid[this.x - 1][this.y + 1];
        }
        if (grid[this.x][this.y - 1] != null) {
            this.neighbours += grid[this.x][this.y - 1];
        }
        if (grid[this.x][this.y + 1] != null) {
            this.neighbours += grid[this.x][this.y + 1];
        }
        if (grid[this.x + 1][this.y - 1] != null) {
            this.neighbours += grid[this.x + 1][this.y - 1];
        }
        if (grid[this.x + 1][this.y] != null) {
            this.neighbours += grid[this.x + 1][this.y];
        }
        if (grid[this.x + 1][this.y + 1] != null) {
            this.neighbours += grid[this.x + 1][this.y + 1];
        }
    }
    */
}


class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        //Initialise the grid
        this.grid = Array.from({ length: height }).map(() =>
            Array.from({ length: width }).fill(new LetterNode('A'))
        );
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                this.grid[x][y].x = x;
                this.grid[x][y].y = y;
            }
        }
    }
}

export const gameGrid = new Grid(10, 10)




