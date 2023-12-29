//This file handles the visuals

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { Box, TextField } from '@mui/material';
import { useWindowSize } from "@uidotdev/usehooks";
import React from 'react';
import styles from './gamescreen.module.css';
import { boxStyle } from './styles';

export const GameCard = () => {
    const screenSize = useWindowSize();
    return (
        < >
            <Paper elevation={5} sx={{ minWidth: screenSize * 0.95, minHeight: screenSize * 0.95, m: 2 }}>
                <LetterSquare></LetterSquare>
            </Paper>
        </>
    );
}

const LettersGrid = () => {

}

const LetterSquare = () => {
    const screenWidth = useWindowSize().width;
    const [value, setValue] = React.useState('A');
    return (
        <g>
            <foreignObject
                border='10'
                borderColor='red'
                justifyContent='center'
                display='flex'
                minWidth={screenWidth * 0.0009}
                backgroundColor='red'
                value={value}>
                    {/* <input onChange={(event) => {
                        setValue(event.target.value);
                    }}>
                    </input> */}
                    <div xmlns="http://www.w3.org/1999/xhtml">
      {value}
    </div>
            </foreignObject>
        </g>
    );
}

export default GameCard;
