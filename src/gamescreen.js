
import Paper from '@mui/material/Paper';
import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from 'react';

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

    function handleChange(index, letter) {
        const newGrid = squares.slice();
        newGrid[index] = {letter};
        setSquares(newGrid);
        alert("newGrid[" + index + "] = " + letter);
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
