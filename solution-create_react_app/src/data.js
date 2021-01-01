export const data = {
    "pages": {
        "createNewRepository": {
            "repoTypes": [
                {
                    "id": "public-description",
                    "label": "Public",
                    "value": "public",
                    "name": "repository[visibility]",
                    "description": "Anyone on the internet can see this repository. You choose who can commit.",
                    "octicon": "repo",
                    "defaultChecked": true
                },
                {
                    "id": "private-description",
                    "label": "Private",
                    "value": "private",
                    "name": "repository[visibility]",
                    "description": "You choose who can see and commit to this repository.",
                    "octicon": "lock"
                }
            ],
            "repoOptions": [
                {
                    "id": "repository_auto_init",
                    "label": "Add a README file",
                    "name": "repository[auto_init]",
                    "description": "This is where you can write a long description for your project. Learn more."
                },
                {
                    "id": "repository_gitignore_template_toggle",
                    "label": "Add .gitignore",
                    "description": "Choose which files not to track from a list of templates. Learn more."
                },
                {
                    "id": "repository_license_template_toggle",
                    "label": "Choose a license",
                    "description": "A license tells others what they can and can't do with your code. Learn more."
                }
            ]
        }
    }
};