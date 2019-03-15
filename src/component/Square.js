import React, { Component } from 'react';

export default class Square extends Component {
    handleClick = () => {
        //调用通过属性传递来的修改Board组件中状态的方法
        this.props.funcModify(this.props.index);
    }
    render() {
        return (
            <button onClick={this.handleClick} className="square">
                {this.props.myList[this.props.index]}
            </button>
        );
    }
}
