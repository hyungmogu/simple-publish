import { Component } from  'react';


interface PropsButton {
    type?: JSX.IntrinsicElements['button']['type'],
    buttonType: string
}


class Button extends Component<PropsButton> {
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
