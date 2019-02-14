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
  options: ['Hello', 'Buffalo']
};

const onFormSubmit = e => {
  // it prevents the default behavior of the event
  e.preventDefault();

  // target points to the form that started the event
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const removeAll = () => {
  app.options = [];
  render();
};
// JSX - JavaScript XML

//Create "Remove All" button above list
// on click -> wipe the array -> rerender

const appRoot = document.getElementById("app");

// const numbers = [55, 101, 1000];

// * you can have jsx in jsx and so arrays in JSX can hoave more JSX
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove all</button>
      {/*numbers.map(number => {
        return <p key={number}>Number: {number}</p>;
      })*/}
      <ol>
        {/* // TODO map over app.options getting back an aray of lis (set key and text) */}
        {app.options.map((option) => <li key={option}>{option}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

// Create Render function that renders the new jsx
// ** myparam  myparam  Call it right away
// Call it after options array added to
render();
