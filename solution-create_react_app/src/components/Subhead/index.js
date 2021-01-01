import React, { Component } from 'react';


class Subhead extends Component {
    render() {
        return (
            <div className="subhead mb-4">
                <h1 className="subhead-heading">{this.props.label}</h1>
                {this.props.description && (
                    <div className="subhead-description">
                        {this.props.description}
                    </div>
                )}
            </div>
        );
    }
}


export default Subhead;