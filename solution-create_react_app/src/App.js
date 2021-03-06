/*
    Style Reference: https://airbnb.io/javascript/react/
*/

import './App.scss';

import { Component } from 'react';

import {
    FormRadio,
    FormCheckbox,
    InputLabel,
    OwnerRepoName
} from './components/FormGroup';
import Button from './components/Button';
import Subhead from './components/Subhead';

import { data } from './data';


class App extends Component {
    render() {
        const newRepository = data.pages.createNewRepository;

        const repoTypes = newRepository.repoTypes.map((props, index) =>
            <FormRadio
                key = {props.id}
                {...props}
            />
        );

        const repoOptions = newRepository.repoOptions.map((props, index) =>
            <FormCheckbox
                key = {props.id}
                className = {index > 0 ? "mt-0 mb-3" : ""}
                {...props}
            />
        );

        return (
            <main>
                <div className="container">
                    <form>
                        <Subhead {...data.pages.createNewRepository.subheader}/>
                        <OwnerRepoName />
                        <div>
                            <InputLabel
                                id="repository_description"
                                label="Description"
                                name="repository[description]"
                                required={false}
                            />
                            <hr></hr>
                            {repoTypes}
                            <div>
                                <hr></hr>
                                <h3 className="h5">
                                    Initialize this repository with:
                                </h3>
                                <p className="text-gray">
                                    Skip this step if you’re importing an
                                    existing repository.
                                </p>
                                {repoOptions}
                            </div>
                            <hr></hr>
                            <Button type="submit" buttonType="primary">
                                Create Repository
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}


export default App;