import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
    constructor(props) {
        super(props)

        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
        this.gameover = false;
    }

    componentDidUpdate() {
        //判断输赢
        var result = this.calculateWinner(this.state.squares);

        if (result) {
            alert(result + "赢了");
            this.gameover = true;
        } else {
            //如何算平局？旗子下完了 没有赢家
            if (this.state.squares.indexOf(null) == -1) {
                //旗子下完了
                alert('平局');
            }
        }
    }

    calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    //定义一个方法，将状态中的squares数组中的第index位置的元素修改为x或者o （根据xIsNext做判断）
    modifyState = (index) => {
        if (this.gameover) return;
        var nowList = this.state.squares;
        if (!nowList[index]) {
            nowList[index] = this.state.xIsNext ? 'X' : 'O';
        } else {
            alert('玩赖了 熊迪')
        }

        this.setState({ squares: nowList });

        var nowNext = this.state.xIsNext;
        this.setState({ xIsNext: !nowNext });
    }

    renderSquare = (i) => {
        return <Square
            myList={this.state.squares}
            funcModify={this.modifyState}
            index={i} />;
    }

    handleClick = () => {
        this.setState({
            squares: Array(9).fill(null)
        }, () => {
            this.gameover = false
        })
    }

    render() {
        return (
            <div className="BoardBg">
                <div>
                    <div className="status">{status}</div>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
                <button onClick={this.handleClick} className='again'>
                    {'重新开始'}
                </button>
            </div>
        );
    }
}