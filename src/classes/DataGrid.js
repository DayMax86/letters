import React, { useEffect, useState } from 'react';
import { TargetWord } from './TargetWord';

// export function useLetterSquare(val) {
//     const [value, setValue] = useState('A');
//     useEffect(()=> {
//         function updateValue(v) {
//             setValue(v);
//         }
//         return updateValue(val);
//     });
//     return value;
// }

export class Square {
    constructor(props) {
        this.state = {
            value: '',
            x: props.x,
            y: props.y,
        }
    }
    updateValue(val) {
        this.state.value = val;
    }
}

export class DataGrid {
    constructor(props) {
        this.state = {
            width: props.width,
            height: props.height,
            squares: Array(),
            targetWords: props.targetWords,
        }
    }

    onGridChange(args) {
        for (let i = 0; i < 5; i++) { //Change hardcoded 5 to length of target words list TODO()
            var targetWord = this.state.targetWords[i];
            var currentWordPath = Array();
            this.checkWordPresence(targetWord, targetWord, currentWordPath);
        }
    }

    checkWordPresence(targetWord, currentWord, currentWordPath) {
        //See if the grid contains the starting letter anywhere
        //currentWordPath = [];
        this.state.squares.forEach( (s) => {
            if (targetWord.state.value.startsWith(s.state.value) && s.state.value.length > 0) {
                currentWordPath.push(s);
                if (targetWord.state.value.length === 1) {
                    //We've been through the entire word and the final starting character is present
                    // console.log("Word " + currentWord + " is present!");
                    currentWord.state.path = currentWordPath;
                    targetWord.markSuccess(currentWord, true);
                    currentWord.state.path.forEach((ps) => {
                        //ps.updateColour('#FACE44');
                        console.log(ps.state.colour);
                    })
                    return currentWord.state.path;
                }
                //Get the letter's index and check its neighbours.
                var neighbours = [];
                neighbours = this.findNeighbours(s);
                neighbours.forEach((n) => {
                    // console.log("neighbours = " + neighbours);
                    // console.log("n[0].state.value = " + n[0].state.value);
                    if (targetWord.state.value.charAt(1) != null && targetWord.state.value.charAt(1) === n[0].state.value) {
                        var shortenedWord = new TargetWord({value: targetWord.state.value.substring(1)});
                        this.checkWordPresence(shortenedWord, currentWord, currentWordPath);
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
                    var n = (this.state.squares.filter((s) => s.state.x === (square.state.x + i) && s.state.y === (square.state.y + k)));
                    if (!(n.length === 0)) {
                        neighboursList.push(
                            this.state.squares.filter((s) => s.state.x === (square.state.x + i) && s.state.y === (square.state.y + k))
                        );
                    }
                }
            }
        }

        return neighboursList;
    }

    // checkCorrect(x, y, targetWords) {
    //     console.log("checking correct");
    //     var square = this.state.squares.filter((s) => s.x === x && s.y === y);
    //     targetWords.forEach(word => {
    //         if (word.state.path.includes(square)) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     });       
    //     return false;
    // }

}
