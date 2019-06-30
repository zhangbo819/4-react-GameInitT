import React, { Component } from 'react';
import Board from './component/Board';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: '三联棋'
        }
    }
    render() {
        return (
            <div className="game BoardBg">
                <div className="game-status">
                    <a>{this.state.status}</a>
                </div>
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}

export default App;