
import Paper from '@mui/material/Paper';
import { useWindowSize } from "@uidotdev/usehooks";
import React, { useState, useEffect } from 'react';
import { DataGrid, Square } from './classes/DataGrid';
import { TargetWord } from './classes/TargetWord';

export const gameColors = {
    CORRECT: '#008f26',
    INCORRECT: '#face44',
}
export const GRID_WIDTH = 5;
export const GRID_HEIGHT = 5;

export const GameCard = () => {
    const screenSize = useWindowSize();
    const [word1, setWord1] = useState(new TargetWord({ value: 'test' }));
    const [word2, setWord2] = useState(new TargetWord({ value: 'example' }));
    const [word3, setWord3] = useState(new TargetWord({ value: 'sample' }));
    const [word4, setWord4] = useState(new TargetWord({ value: 'blah' }));
    const [word5, setWord5] = useState(new TargetWord({ value: 'blergh' }));
    
    var targetWords = new Array();
    targetWords.push(word1);
    targetWords.push(word2);
    targetWords.push(word3);
    targetWords.push(word4);
    targetWords.push(word5);

    return (
        < >
            <Paper elevation={5} sx={{ minWidth: screenSize * 0.95, minHeight: screenSize * 0.95, m: 2 }}>
                <DisplayGrid width={GRID_WIDTH} height={GRID_HEIGHT} targetWords={targetWords}/>
            </Paper>
        </>
    );
}

function DisplayGrid(props) {

    const dataGrid = new DataGrid({
        width:props.width,
        height:props.height,
        targetWords:props.targetWords,
    })

    let elementsToDisplay = [];
    for (let i = 0; i < dataGrid.state.width; i++) {
        for (let k = 0; k < dataGrid.state.height; k++) {
            var sq = new Square({
                x:i, y:k, 
            })
            dataGrid.state.squares.push(sq);
            var ls = <LetterSquare
                x={i}
                y={k}
                square={sq}
                onLetterChange={(args) => dataGrid.onGridChange(args)}
            />
            elementsToDisplay.push(ls);
        }
        elementsToDisplay.push(<br></br>);
    }

    return (
        < >
            {elementsToDisplay}
        </>
    );
}

export const LetterSquare = (props) => {

    const [colour, setColour] = useState(gameColors.INCORRECT);
    const [value, setValue] = useState('');
    const dataSquare = props.square;

    useEffect(() => {
        props.onLetterChange([props.x, props.y, value]);
        dataSquare.updateValue(value);
        if (dataSquare.state.correct) {
            console.log("setting colour to green");
            setColour(gameColors.CORRECT);
        }
    }, [value]);

    useEffect(() => {
        
    }, [dataSquare.state.value])

    return (
        <g>
            <foreignObject>
                <input className='displaySquare'
                    maxLength="1"
                    size="1"
                    value={props.value}
                    style={{ backgroundColor: colour }}
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                />
            </foreignObject>
        </g>
    );

}

export default GameCard;
