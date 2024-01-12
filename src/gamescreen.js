
import Paper from '@mui/material/Paper';
import { useWindowSize } from "@uidotdev/usehooks";
import React, { useState, useEffect, Component } from 'react';
import { TargetWord } from './classes/TargetWord';
import { DataGrid } from './classes/DataGrid';

export const gameColors = {
    CORRECT: '#008f26',
    INCORRECT: '#8f0000',
}

export const GameCard = () => {
    const screenSize = useWindowSize();

    const [word1, setWord1] = useState(new TargetWord({value:'test'}));
    const [word2, setWord2] = useState(new TargetWord({value:'example'}));
    const [word3, setWord3] = useState(new TargetWord({value:'sample'}));
    const [word4, setWord4] = useState(new TargetWord({value:'blah'}));
    const [word5, setWord5] = useState(new TargetWord({value:'blergh'}));
    
    var targetWords = new Array();
    targetWords.push(word1);
    targetWords.push(word2);
    targetWords.push(word3);
    targetWords.push(word4);
    targetWords.push(word5);

    const gameGrid = new DataGrid({
        width:5, 
        height:5,
        targetWords:targetWords,
    });

    return (
        < >
            <Paper elevation={5} sx={{ minWidth: screenSize * 0.95, minHeight: screenSize * 0.95, m: 2 }}>
                <DisplayGrid dataGrid={gameGrid}/>
            </Paper>
        </>
    );
}

function DisplayGrid(props) {
    let elementsToDisplay = [];
    let rowLimit = props.dataGrid.state.width;
    let i = 0;
    props.dataGrid.state.squares.forEach((s) => {
        if (i % rowLimit === 0) {
            elementsToDisplay.push(<br></br>);
        }
        elementsToDisplay.push(s.state.displaySquare);
        i++;
    })
    return (
        < >
            {elementsToDisplay}
        </>
    );
}

export class DisplaySquare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            x: props.x,
            y: props.y,
            //Associated data square
            letterSquare: props.letterSquare,
            colour: null,
        };
      }

    render() {
        return (
            <g>
                <foreignObject>
                    <input className='displaySquare'
                        maxLength="1"
                        size="1"
                        value={this.state.value}
                        style={{ backgroundColor: this.state.colour }}
                        onChange={(event) => {
                            this.state.value = event.target.value;
                            this.state.letterSquare.onLetterChange();
                        }}
                    />
                </foreignObject>
            </g>
        );
    };

}

export default GameCard;
