console.log("App.js is running!");

// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

// create app object title/subtile
const app = {
  title: "Indecision App",
  subtitle: "Ichanged it",
  options: ["One", "Two"]
};
// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  count = count + 1;
  console.log("addOne");
};
const minusOne = () => {
  count = count -1;
  console.log("minusOne");
};
const reset = () => {
  console.log("Reset Count");
  count = 0;
};
// class attribute from html is called className in JSX as it is reserved
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

const appRoot = document.getElementById("app");

// render() method is using to render the jsx code on the elmeent
ReactDOM.render(templateTwo, appRoot);
