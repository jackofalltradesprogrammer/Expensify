'use strict';

console.log("App.js is running!");

// create app object title/subtile
var app = {
    title: 'I do not know what to write',
    subtitle: 'I still do not know'
};
// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Andrew',
    age: 26,
    location: 'New York'
};
// Create a templateTwo var JSX expression
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var appRoot = document.getElementById("app");

// render() method is using to render the jsx code on the elmeent
ReactDOM.render(template, appRoot);
