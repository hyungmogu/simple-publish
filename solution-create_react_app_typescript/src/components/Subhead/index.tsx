import { Component } from 'react';


interface PropsSubhead {
    label: string,
    description?: string
}


class Subhead extends Component<PropsSubhead> {
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