
import Paper from '@mui/material/Paper';
import { useWindowSize } from "@uidotdev/usehooks";
import { useState, useEffect } from 'react';
import { TargetWord } from './classes/TargetWord';

export const gameColors = {
    CORRECT: '#008f26',
    INCORRECT: '#8f0000',
}

export const GameCard = () => {
    const screenSize = useWindowSize();

    const [word1, setWord1] = useState(new TargetWord({value:'test'}));
    const [word2, setWord2] = useState(new TargetWord({value:'example'}));
    const [word3, setWord3] = useState(new TargetWord({value:'sample'}));
    const [word4, setWord4] = useState(new TargetWord({value:'-'}));
    const [word5, setWord5] = useState(new TargetWord({value:'-'}));
    
    var targetWords = new Array();
    targetWords.push(word1);
    targetWords.push(word2);
    targetWords.push(word3);
    targetWords.push(word4);
    targetWords.push(word5);

    function onSuccessChange(w, correct) {
        if (correct) {
            alert("correct!!");
        }
    }

    return (
        < >
            <Paper elevation={5} sx={{ minWidth: screenSize * 0.95, minHeight: screenSize * 0.95, m: 2 }}>
                <Grid words={targetWords} markSuccess={onSuccessChange}/>
                    <p color={word1.state.color}>{word1.value}</p>
            </Paper>
        </>
    );
}

function Grid(props) {
    const [squares, setSquares] = useState(Array(25).fill(''));

    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            checkWordPresence(props.words[i], i);
        }
    }, [squares]);

    function handleChange(index, letter) {
        const newGrid = squares.slice();
        newGrid[index] = {letter};
        setSquares(newGrid);
    }

    function checkWordPresence(word, index) {
        //See if the grid contains the starting letter anywhere
        squares.forEach( (s) => {
            if (word.state.value.startsWith(s.letter)) {
                if (word.length === 1) {
                    //We've been through the entire word and the final starting character is present
                    console.log("word is present :)");
                    props.markSuccess(word, true);
                    //Later this should return the path taken so the player can see the route.
                    return;
                }
                //Get the letter's index and check its neighbours.
                findNeighbours(squares.indexOf(s)).forEach((n) => {
                    if (word.state.value.charAt(1)!= null && word.state.value.charAt(1) === n.letter) {
                        var shortenedWord = word.state.value.substring(1);
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
