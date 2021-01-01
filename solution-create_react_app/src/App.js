import './App.scss';

import { Component } from 'react';
import {FormRadio, FormCheckbox, InputLabel, OwnerRepoName} from './components/FormGroup';
import Button from './components/Button';

class App extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <form>
                        <div className="subhead mb-5">
                            <h1 className="subhead-heading">Create a new Repository</h1>
                            <div className="subhead-description">
                                A repository contains all project files, including the revision history. Already have a project repository elsewhere? <a href="#">Import a repository</a>.
                            </div>
                        </div>
                        <OwnerRepoName/>
                        <div>
                            <InputLabel
                                id="repository_description"
                                label="Description"
                                name="repository[description]"
                                required={false}
                            />
                            <hr></hr>
                            <FormRadio
                                id="public-description"
                                label="Public"
                                value="public"
                                name="repository[visibility]"
                                description="Anyone on the internet can see this repository. You choose who can commit."
                                octicon="repo"
                                defaultChecked={true}
                            />
                            <FormRadio
                                id="private-description"
                                label="Private"
                                value="private"
                                name="repository[visibility]"
                                description="You choose who can see and commit to this repository."
                                octicon="lock"
                            />
                            <div>
                                <hr></hr>
                                <h3 className="h5">Initialize this repository with:</h3>
                                <p className="text-gray">Skip this step if you’re importing an existing repository.</p>
                                <FormCheckbox
                                    id="repository_auto_init"
                                    label="Add a README file"
                                    name="repository[auto_init]"
                                    description="This is where you can write a long description for your project. Learn more."
                                />
                                <FormCheckbox
                                    id="repository_gitignore_template_toggle"
                                    label="Add .gitignore"
                                    description="Choose which files not to track from a list of templates. Learn more."
                                />
                                <FormCheckbox
                                    id="repository_license_template_toggle"
                                    label="Choose a license"
                                    description="A license tells others what they can and can't do with your code. Learn more."
                                />
                            </div>
                            <hr></hr>
                            <Button type="submit" buttonType="primary">Create Repository</Button>
                        </div>
                    </form>
                </div>
            </main>
        );
    }
}

export default App;
