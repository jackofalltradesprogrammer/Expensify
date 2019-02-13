console.log("App.js is running!");

// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

// create app object title/subtile
var app = {
  title: "Indecision App",
  subtitle: "Ichanged it",
  options: ['One', 'Two']
};
// JSX - JavaScript XML
var template = (
  <div>
    <h1>{app.title}</h1>
    { app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options.length > 0) ? "Here are your options" : "No options" }</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
    name: 'Andrew',
    age: 26,
    location: 'Philadelphia'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
  // it returns undefined if nothing is supplied, we can use JSX to
}
// Create a templateTwo var JSX expression
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation()}
  </div>
);
var appRoot = document.getElementById("app");

// render() method is using to render the jsx code on the elmeent
ReactDOM.render(template, appRoot);
