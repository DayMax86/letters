
import Paper from '@mui/material/Paper';
import { useWindowSize } from "@uidotdev/usehooks";
import { useState, useEffect } from 'react';

export const GameCard = () => {
    const screenSize = useWindowSize();
    return (
        < >
            <Paper elevation={5} sx={{ minWidth: screenSize * 0.95, minHeight: screenSize * 0.95, m: 2 }}>
                <Grid />
                <button onClick={() => {
                    //Temporary button to test functionality

                }}>Press me!</button>
            </Paper>
        </>
    );
}

function Grid() {
    const [squares, setSquares] = useState(Array(25).fill(''));

    useEffect(() => {
        if (checkWordPresence("test")) {
            alert("Word is present!!");
        } else {
            //alert("Word not present");
        }
        console.log(victory);
      }, [squares]);

    function handleChange(index, letter) {
        const newGrid = squares.slice();
        newGrid[index] = {letter};
        setSquares(newGrid);
    }

    function checkWordPresence(word) {
        //Check to see if a word is in the grid (success criterion)
        //See if the grid contains the starting letter anywhere
        squares.forEach( (s) => {
            if (word.startsWith(s.letter)) {
                if (word.length === 1) {
                    //We've been through the entire word and the final starting character is present
                    //So the word is present!
                    return true;
                    //Later this should return the path taken so the player can see the route.
                }
                //Get the letter's index and check its neighbours.
                findNeighbours(squares.indexOf(s)).forEach((n) => {
                    if (word.charAt(1)!= null && word.charAt(1) === n.letter) {
                        var shortenedWord = word.substring(1);
                        console.log("Checking for substring " + shortenedWord);
                        checkWordPresence(shortenedWord);
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
