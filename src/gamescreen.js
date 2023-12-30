//This file handles the visuals

import Paper from '@mui/material/Paper';
import { useWindowSize } from "@uidotdev/usehooks";
import React from 'react';
import { gameGrid } from './Game';

export const GameCard = () => {
    const screenSize = useWindowSize();
    return (
        < >
            <Paper elevation={5} sx={{ minWidth: screenSize * 0.95, minHeight: screenSize * 0.95, m: 2 }}>
                <LettersGrid/>
                <button onClick={() => {
                    //Temporary button to test functionality
                    alert(gameGrid.grid[1][1].letter);
                    
                }}>Press me!</button>
            </Paper>
        </>
    );
}

const LettersGrid = () => {
    //Create maximum-size visual table
    var table = document.createElement("TABLE");
    table.setAttribute("id", "grid");

    return (
        <table>
            <tbody>
                {
                    gameGrid.grid.map(row => {
                        return (<tr key={row.x}>
                            {
                                gameGrid.grid.map(cell => { 
                                    return (<td key={cell}> <LetterSquare value={cell} /></td>);
                                })
                            }
                        </tr>);
                    })
                }
            </tbody>
        </table>
    );
}

const LetterSquare = (props) => {
    const [value, setValue] = React.useState('');
    return (
        <g>
            <foreignObject>
                <input
                    maxLength="1"
                    size="1"
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value);
                        gameGrid.grid[props.x][props.y].letter = value;
                    }}
                />
            </foreignObject>
        </g>
    );
}


export default GameCard;
