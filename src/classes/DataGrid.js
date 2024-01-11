import { DisplaySquare } from '../GameScreen.js';
import { TargetWord } from './TargetWord.js';

export class DataGrid {
    constructor(props) {
        this.state = {
            width: props.width,
            height: props.height,
            squares: Array(),
            targetWords: props.targetWords,
        }
        for (let i = 0; i < this.state.width; i++) { //Each row
            for (let k = 0; k < this.state.height; k++) { //Each column
                this.state.squares.push(
                    new LetterSquare({
                        value: '',
                        x: i,
                        y: k,
                        displaySquare: <DisplaySquare
                            x={i}
                            y={k}
                            onLetterChange={(props) => {
                                this.onGridChange.bind(props)
                                let sq = this.state.squares.filter((s) => s.state.x === props.x && s.state.y === props.y)
                                sq.state.value = props.value; //TODO() change this!
                            }}
                        /> 
                    })
                )                
            }
        }

    var shortenedWord = new TargetWord({value: ''});

    }
    
    onGridChange(props) {
        console.log(this);
        for (let i = 0; i < 5; i++) { //Change hardcoded 5 to length of target words list TODO()
            var targetWord = this.state.targetWords[i];
            var currentWordPath = Array();
            this.checkWordPresence(targetWord, targetWord, currentWordPath);
        }
    }

    checkWordPresence(targetWord, currentWord, currentWordPath) {
        //See if the grid contains the starting letter anywhere
        currentWordPath = [];
        this.state.squares.forEach( (s) => {
            if (targetWord.state.value.startsWith(s.state.value) && s.state.value.length > 0) {
                currentWordPath.push(s);
                if (targetWord.state.value.length === 1) {
                    //We've been through the entire word and the final starting character is present
                    console.log("Word " + currentWord + " is present!");
                    currentWord.state.path = currentWordPath;
                    targetWord.markSuccess(currentWord, true);
                    return;
                }
                //Get the letter's index and check its neighbours.
                var neighbours = [];
                neighbours = this.findNeighbours(s);
                neighbours.forEach((n) => {
                    console.log("neighbours.length = " + neighbours.length);
                    console.log("n.state.value = " + n.state.value);
                    console.log("Looking at neighbours");
                    if (targetWord.state.value.charAt(1) != null && targetWord.state.value.charAt(1) === n.state.value) {
                        this.shortenedWord.state.value = targetWord.state.value.substring(1);
                        this.checkWordPresence(this.shortenedWord);
                    }
                })
            }
        });
    }

    findNeighbours(square) {
        var neighboursList = Array();
        //8 possible neighbours
        for (let i = -1; i < 2; i++) { //Each row
           for (let k = -1; k < 2; k++) { //Each column
                if (!(i === 0 && k === 0)) { //Don't count the square itself
                    console.log("x: " + (square.state.x + i) + " | y: " + (square.state.y + k));
                    console.log("square.state.x: " + square.state.x);
                    console.log(this.state.squares.filter((s) => s.state.x === (square.state.x + i) && s.state.y === (square.state.y + k)));
                    neighboursList.push(
                        this.state.squares.filter((s) => s.state.x === (square.state.x + i) && s.state.y === (square.state.y + k))
                    );
                }
            }
        }

        return neighboursList;
    }

}

export class LetterSquare {
    constructor(props) {
        this.state = {
            value: props.value,
            x: props.x,
            y: props.y,
            onValueChange: props.onChange,
            //Associated display square
            displaySquare: props.displaySquare,
        }
    }
}
