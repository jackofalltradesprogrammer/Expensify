"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var template = React.createElement(
  "h1",
  null,
  "Indecision App"
);
var appRoot = document.getElementById("app");

// render() method is using to render the jsx code on the elmeent 
ReactDOM.render(template, appRoot);
