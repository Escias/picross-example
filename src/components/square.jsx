import React from 'react';
import '../assets/index.css';

export class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        return (
            <button
                className="square"
                style={{backgroundColor:this.state.bgColor}}>
                {this.state.value}
            </button>
        );
    }
}
