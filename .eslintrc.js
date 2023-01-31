/* eslint-disable no-undef */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@next/next/recommended"
    ],
    "overrides": [
        {
            "files": [ "src/**/*.jsx" ]
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-unused-vars": [
            "error",
            {
                "varsIgnorePattern": "^(React|bootstrap)$",
            }
        ],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "settings": {
        "react": {
            "createClass": "createReactClass",
            "pragma": "React",
            "fragment": "Fragment",
            "version": "detect",
            "flowVersion": "0.53"
        },
        "propWrapperFunctions": [
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"},
            {"property": "forbidExtraProps", "exact": true}
        ],
        "componentWrapperFunctions": [
            "observer",
            {"property": "styled"},
            {"property": "observer", "object": "Mobx"},
        ],
        "formComponents": [
            "CustomForm",
            {"name": "Form", "formAttribute": "endpoint"}
        ],
        "linkComponents": [
            "Hyperlink",
            {"name": "Link", "linkAttribute": "to"}
        ]
    }
};
