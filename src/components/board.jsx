import React from 'react';
import '../assets/index.css';

import { square } from ''

export class Board extends React.Component {
    constructor() {
        super();
        this.grille = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    }

    renderSquare(i, square) {
        return <Square value={square} key={i}/>;
    }

    render() {
        const status = 'Hanjie: X';

        return (
            <div>
                {this.grille.map((line, i) => (
                    <div className="board-row">
                        {line.map((square, i) => {
                            return this.renderSquare(i, square)
                        })}
                    </div>
                ))}
            </div>


        );
    }
}
