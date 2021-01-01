import React, { Component } from  'react';


class FormCheckbox extends Component {
    render() {
        return (
            <div className="form-checkbox">
                <label>
                    <input
                        id={this.props.id}
                        type="checkbox"
                        value={this.props.value}
                        name={this.props.name}
                        defaultChecked={this.props.defaultChecked ? "true" : ""}
                    />
                    {this.props.label}
                </label>
                {this.props.description && <span className="note">{this.props.description}</span>}
            </div>
        );
    }
}


class FormRadio extends Component {
    render() {
        let svgIcon;
        switch (this.props.octicon) {
            case "lock":
                svgIcon = <svg height="32" className="octicon octicon-lock float-left mt-1 mr-2" viewBox="0 0 24 24" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 012.5 2.5v8a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 19.5v-8A2.5 2.5 0 015.5 9H6zm1.5-1.75C7.5 4.58 9.422 2.5 12 2.5c2.578 0 4.5 2.08 4.5 4.75V9h-9V7.25zm-3 4.25a1 1 0 011-1h13a1 1 0 011 1v8a1 1 0 01-1 1h-13a1 1 0 01-1-1v-8z"></path></svg>;
                break;
            case "repo":
                svgIcon = <svg height="32" className="octicon octicon-repo float-left mt-1 mr-2" viewBox="0 0 24 24" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"></path><path d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"></path></svg>;
                break;
            default:
                svgIcon = undefined;
        }

        return (
            <div className="form-checkbox">
                <label>
                    <input
                        id={this.props.id}
                        className="mt-2"
                        type="radio"
                        value={this.props.value}
                        name={this.props.name}
                        defaultChecked={this.props.defaultChecked ? "checked" : ""}
                    />
                    {this.props.label}
                </label>
                {svgIcon}
                {this.props.description && <span className="note">{this.props.description}</span>}
            </div>
        );
    }
}


class InputLabel extends Component {
    render() {
        return (
            <dl className={`form-group ${this.props.required && 'required'}`}>
                <dt className="input-label">
                    <label for={this.props.id}>
                        {this.props.label}
                        {!this.props.required && <span className="note">(optional)</span>}
                    </label>
                </dt>
                <dd>
                    <input id={this.props.id}
                           className="form-control long"
                           type="text"
                           name={this.props.name}/>
                </dd>
            </dl>
        );
    }
}


class OwnerRepoName extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="owner-reponame clearfix">
                    <dl className="form-group required mt-1 mb-0 float-left">
                        <dt className="form-group-header">
                            <label>Owner</label>
                        </dt>
                        <dd className="form-group-body">
                            <details className="select-menu">
                                <summary className="btn select-menu-button" role="button">
                                    <img className="avatar avatar-user mr-1" alt="@hyungmogu" width="20" height="20" src="https://avatars0.githubusercontent.com/u/6856382?s=60&amp;v=4"/>
                                    hyungmogu
                                </summary>
                                <div className="select-menu-modal position-absolute">
                                    <div className="select-menu-list">
                                        <label className="select-menu-item">
                                            <svg className="octicon octicon-check select-menu-item-icon" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                                            <div className="select-menu-item-text">
                                                <img className="avatar avatar-user mr-1" alt="@hyungmogu" width="20" height="20" src="https://avatars0.githubusercontent.com/u/6856382?s=60&amp;v=4"/>
                                                hyungmogu
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </details>
                        </dd>
                    </dl>
                    <span className="float-left f2 pt-4 mt-1 mx-2">/</span>
                    <div className="d-sm-none mb-2 clearfix"></div>
                    <dl className="form-group required mt-1 mb-0 float-left">
                        <dt className="input-label">
                            <label for="repository_name">Repository name</label>
                        </dt>
                        <dd className="form-group-body">
                            <input maxlength="100" className="form-control short" required="" size="100" type="text" name="repository[name]" id="repository_name" autocomplete="off" spellcheck="false" aria-describedby="input-check-4221 repo-name-suggestion"/>
                        </dd>
                    </dl>
                </div>
                <p className="my-2">Great repository names are short and memorable. Need inspiration? How about <strong className="reponame-suggestion">glowing-system</strong>?</p>
            </React.Fragment>
        );
    }
}


export {
    FormCheckbox,
    FormRadio,
    InputLabel,
    OwnerRepoName
};
