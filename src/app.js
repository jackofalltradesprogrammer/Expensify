console.log("App.js is running!");

// JSX - JavaScript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>

  </div>
);

// Create a templateTwo var JSX expression
var templateTwo =(
    <div>
        <h1>Harpreet</h1>
        <p>Age: 29</p>
        <p>Location: New York</p>

    </div>
);
var appRoot = document.getElementById("app");

// render() method is using to render the jsx code on the elmeent
ReactDOM.render(templateTwo, appRoot);
