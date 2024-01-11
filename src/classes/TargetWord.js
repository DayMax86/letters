import { gameColors } from '../GameScreen';

export class TargetWord {
    constructor(props) {
        this.state = {
            value: props.value,
            complete: false,
            color: gameColors.INCORRECT,
            path: new Array()
        };
    }

    markSuccess(word,correct){
        if (correct) {
            console.log(word.state.value + " is present!!");
            console.log(word.state.value + "'s path = " + word.state.path);
        }
    }

    updateValue(newValue) {
        this.state = {
            value: newValue,
            complete: this.state.complete,
        };
    }
    toggleComplete(props) {
        this.state = {
            value: this.state.value,
            complete: !(this.state.complete),
        };
        if(props!=null) {this.state.complete=props};
        console.log(this.state.complete);
        if(this.state.complete) {
            this.state.color = gameColors.CORRECT;
        } else {
            this.state.color = gameColors.INCORRECT;
        }
    }
}

export default TargetWord;
