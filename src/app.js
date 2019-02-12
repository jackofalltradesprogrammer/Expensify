console.log("App.js is running!");

// create app object title/subtile
var app = {
  title: 'I do not know what to write',
  subtitle: 'I still do not know'  
};
// JSX - JavaScript XML
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>

  </div>
);

var user = {
    name: 'Andrew',
    age: 26,
    location: 'New York'
};
// Create a templateTwo var JSX expression
var templateTwo =(
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>

    </div>
);
var appRoot = document.getElementById("app");

// render() method is using to render the jsx code on the elmeent
ReactDOM.render(template, appRoot);
