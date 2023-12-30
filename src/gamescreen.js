
import Paper from '@mui/material/Paper';
import { useWindowSize } from "@uidotdev/usehooks";
import React from 'react';

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

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.width = props.width;
        this.height = props.height;
        this.state = { value: null };
        this.grid = [10][10];
    }

    componentDidMount() {
        //Initialise the grid
        this.setState(Array.from({ length: this.height }).map(() =>
            Array.from({ length: this.width }).fill(new LetterNode('A'))
        ));
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.grid[x][y].x = x;
                this.grid[x][y].y = y;
            }
        }
    }

    //Create maximum-size visual table
    render() {
        if (this.grid != null) {
            return (
                <table>
                    <tbody>
                        {
                            this.grid.map(row => {
                                return (<tr key={row.x}>
                                    {
                                        this.grid.map(cell => {
                                            return (<td key={cell}> <LetterSquare
                                                letter={cell.values}

                                            /></td>);
                                        })
                                    }
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            );
        }
    }
}

class LetterNode {
    constructor(letter, xpos, ypos) {
        this.letter = letter;
        this.neighbours = null;
        this.x = xpos;
        this.y = ypos;
    }
}

class LetterSquare extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.letter)
        this.state = { value: null };
        this.letter = props.letter;
        this.x = props.x;
        this.y = props.y;
    }

    componentDidMount() {
        this.setState({ value: new LetterNode('', 0, 0) });
    }

    render() {
        return (
            <g>
                <foreignObject>
                    <input
                        maxLength="1"
                        size="1"
                        value={this.state.letter}
                        onChange={(event) => {
                            this.setState({ value: LetterNode(event.target.value, this.x, this.y) });
                        }}
                    />
                </foreignObject>
            </g>
        );
    }
}

export default GameCard;


/*
    getNeighbours = function () {
        //Check the eight neighbouring squares
        if (grid[this.x - 1][this.y - 1] != null) {
            this.neighbours += grid[this.x - 1][this.y - 1];
        }
        if (grid[this.x - 1][this.y] != null) {
            this.neighbours += grid[this.x - 1][this.y];
        }
        if (grid[this.x - 1][this.y + 1] != null) {
            this.neighbours += grid[this.x - 1][this.y + 1];
        }
        if (grid[this.x][this.y - 1] != null) {
            this.neighbours += grid[this.x][this.y - 1];
        }
        if (grid[this.x][this.y + 1] != null) {
            this.neighbours += grid[this.x][this.y + 1];
        }
        if (grid[this.x + 1][this.y - 1] != null) {
            this.neighbours += grid[this.x + 1][this.y - 1];
        }
        if (grid[this.x + 1][this.y] != null) {
            this.neighbours += grid[this.x + 1][this.y];
        }
        if (grid[this.x + 1][this.y + 1] != null) {
            this.neighbours += grid[this.x + 1][this.y + 1];
        }
    }
    */