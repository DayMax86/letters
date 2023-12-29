//This file handles the visuals

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { Box, TextField } from '@mui/material';
import { useWindowSize } from "@uidotdev/usehooks";
import React from 'react';
import styles from './gamescreen.module.css';
import { myStyle } from './geoff';

export const GameCard = () => {
const screenSize = useWindowSize();
    return (
        < >
            <Paper elevation={5} sx={{ minWidth: screenSize*0.95, minHeight: screenSize*0.95, m: 2 }}>
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
        <Box >
            <TextField
                sx={myStyle(screenWidth)}
                //className={styles.lettersquare}
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />
        </Box>
    );
}

export default GameCard;
