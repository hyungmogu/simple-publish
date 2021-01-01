import React, { Component } from  'react';


class Button extends Component {
    render() {
        return (
            <button
                type={this.props.type}
                className={`btn btn-${this.props.buttonType}`}
            >
                {this.props.children}
            </button>
        );
    }
}


export default Button;
