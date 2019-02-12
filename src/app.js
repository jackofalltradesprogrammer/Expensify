console.log("App.js is running!");

// JSX - JavaScript XML
var template = <h1>Indecision App</h1>
var appRoot = document.getElementById("app");

// render() method is using to render the jsx code on the elmeent 
ReactDOM.render(template, appRoot);
