import React, { PureComponent } from 'react';

export default class Square extends PureComponent {
    handleClick = () => {
        //调用通过属性传递来的修改Board组件中状态的方法
        this.props.funcModify();
    }

    render() {
        const { clientWidth, title = '' } = this.props;

        const width = clientWidth / 6;
        const fontSize = Math.ceil(clientWidth / 1240 * 60);

        console.log("clientWidth, fontSize", clientWidth, fontSize)

        return (
            <button
                onClick={this.handleClick}
                className="square"
                style={{
                    width,
                    height: width,
                    lineHeight: width + 'px',
                    fontSize
                }}
            >
                {title}
            </button >
        );
    }
}
