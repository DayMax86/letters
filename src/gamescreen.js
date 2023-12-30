//This file handles the visuals

import Paper from '@mui/material/Paper';
import { useWindowSize } from "@uidotdev/usehooks";
import React from 'react';

export const GameCard = () => {
    const screenSize = useWindowSize();
    return (
        < >
            <Paper elevation={5} sx={{ minWidth: screenSize * 0.95, minHeight: screenSize * 0.95, m: 2 }}>
                <LettersGrid/>
                <button onClick={() => {
                    //Temporary button to test functionality
                }}>Press me!</button>
            </Paper>
        </>
    );
}

const LettersGrid = () => {
    return (
        < >
            <table>
                <tr>
                    <td><LetterSquare x="0" y="0"/></td>
                    <td><LetterSquare x="1" y="0"/></td>
                    <td><LetterSquare x="2" y="0"/></td>
                </tr>
                <tr>
                    <td><LetterSquare x="0" y="1"/></td>
                    <td><LetterSquare x="1" y="1"/></td>
                    <td><LetterSquare x="2" y="1"/></td>
                </tr>
                <tr>
                    <td><LetterSquare x="0" y="2"/></td>
                    <td><LetterSquare x="1" y="2"/></td>
                    <td><LetterSquare x="2" y="2"/></td>
                </tr>
            </table>
        </>
    );
}

const LetterSquare = (props) => {
    const screenWidth = useWindowSize().width;
    const [value, setValue] = React.useState('');
    return (
        <g>
            <foreignObject
                justifyContent='center'
                border='10'
                borderColor='red'
                display='flex'
                backgroundColor='red'>
                <input
                    maxLength="1"
                    size="1"
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                />
            </foreignObject>
        </g>
    );
}


export default GameCard;
