
import Paper from '@mui/material/Paper';
import { useWindowSize } from "@uidotdev/usehooks";
import { useState, useEffect } from 'react';

export const GameCard = () => {
    const screenSize = useWindowSize();
    return (
        < >
            <Paper elevation={5} sx={{ minWidth: screenSize * 0.95, minHeight: screenSize * 0.95, m: 2 }}>
                <Grid />
                <WordList />
            </Paper>
        </>
    );
}

export const gameColors = {
    CORRECT: '#008f26',
    INCORRECT: '#8f0000',
}

var globalWords = new Array().fill('');
export const WordList = () => {

    class TargetWord {
        constructor(props) {
            this.state = {
                value: props.value,
                complete: false,
                color: gameColors.INCORRECT,
            };
        }

        updateValue(newValue) {
            this.state = {
                value: newValue,
                complete: this.state.complete,
            };
        }
        toggleComplete(props) {
            this.state = {
                value: this.state.value,
                complete: !(this.state.complete),
            };
            if(props!=null) {this.state.complete=props};
            console.log(this.state.complete);
            if(this.state.complete) {
                this.state.color = gameColors.CORRECT;
            } else {
                this.state.color = gameColors.INCORRECT;
            }
        }
    }


    const word1 = new TargetWord({value:'test'});
    const word2 = new TargetWord({value:'example'});
    const word3 = new TargetWord({value:'sample'});
    const word4 = new TargetWord({value:''});
    const word5 = new TargetWord({value:''});

    globalWords[0] = word1;
    globalWords[1] = word2;
    globalWords[2] = word3;
    globalWords[3] = word4;
    globalWords[4] = word5;

    return (
        < >
            <div>{word1.state.value}</div>
            <div>{word2.state.value}</div>
            <div>{word3.state.value}</div>
            <div>{word4.state.value}</div>
            <div>{word5.state.value}</div>
        </>
    );
}

function Grid() {
    const [squares, setSquares] = useState(Array(25).fill(''));

    useEffect(() => {
        checkWordPresence(globalWords[0].state.value, 0)
        checkWordPresence("example");
        checkWordPresence("sample");
        checkWordPresence("");
        checkWordPresence("");
    }, [squares]);

    function handleChange(index, letter) {
        const newGrid = squares.slice();
        newGrid[index] = {letter};
        setSquares(newGrid);
    }

    function checkWordPresence(word, index) {
        //See if the grid contains the starting letter anywhere
        squares.forEach( (s) => {
            if (word.startsWith(s.letter)) {
                if (word.length === 1) {
                    //We've been through the entire word and the final starting character is present
                    console.log("word is present :)");
                    globalWords[index].toggleComplete(true);
                    //Later this should return the path taken so the player can see the route.
                    return;
                }
                //Get the letter's index and check its neighbours.
                findNeighbours(squares.indexOf(s)).forEach((n) => {
                    if (word.charAt(1)!= null && word.charAt(1) === n.letter) {
                        var shortenedWord = word.substring(1);
                        checkWordPresence(shortenedWord, index);
                    }
                })
            }
        });
    }

    function findNeighbours(index) {
        var neighboursList = Array(8).fill('');
        //8 possible neighbours
        if (squares[index-6]!=null) {neighboursList[0] = squares[index-6]}
        if (squares[index-5]!=null) {neighboursList[1] = squares[index-5]}
        if (squares[index-4]!=null) {neighboursList[2] = squares[index-4]}
        if (squares[index-1]!=null) {neighboursList[3] = squares[index-1]}
        if (squares[index+1]!=null) {neighboursList[4] = squares[index+1]}
        if (squares[index+4]!=null) {neighboursList[5] = squares[index+4]}
        if (squares[index+5]!=null) {neighboursList[6] = squares[index+5]}
        if (squares[index+6]!=null) {neighboursList[7] = squares[index+6]}
        return neighboursList;
    }

    return (
        < >
            <div className="gridrow">
                <LetterSquare i={0} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={1} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={2} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={3} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={4} onLetterChange={(index, letter) => { handleChange(index, letter) }}/> 
            </div>
            <div className="gridrow">
                <LetterSquare i={5} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={6} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={7} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={8} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={9} onLetterChange={(index, letter) => { handleChange(index, letter) }}/> 
            </div>
            <div className="gridrow">
                <LetterSquare i={10} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={11} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={12} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={13} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={14} onLetterChange={(index, letter) => { handleChange(index, letter) }}/> 
            </div>
            <div className="gridrow">
                <LetterSquare i={15} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={16} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={17} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={18} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={19} onLetterChange={(index, letter) => { handleChange(index, letter) }}/> 
            </div>
            <div className="gridrow">
                <LetterSquare i={20} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={21} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={22} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={23} onLetterChange={(index, letter) => { handleChange(index, letter) }}/>
                <LetterSquare i={24} onLetterChange={(index, letter) => { handleChange(index, letter) }}/> 
            </div>
        </>
    );
}

function LetterSquare({ i, onLetterChange }) {

    const [value, setValue] = useState('');
    const index = i;

    return (
        <g>
            <foreignObject>
                <input className='letterSquare'
                    maxLength="1"
                    size="1"
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value);
                        onLetterChange(index, event.target.value);
                    }}
                />
            </foreignObject>
        </g>
    );

}

export default GameCard;
