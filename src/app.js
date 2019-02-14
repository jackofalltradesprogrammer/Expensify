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
  options: []
};

const onFormSubmit = (e) => {
  // it prevents the default behavior of the event
  e.preventDefault();

  // target points to the form that started the event
  const option = e.target.elements.option.value;

  if (option){
    app.options.push(option);
    e.target.elements.option.value='';
    render();
  }
}

const removeAll = () => {
  app.options = [];
  render();
}
// JSX - JavaScript XML

//Create "Remove All" button above list
// on click -> wipe the array -> rerender


const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove all</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"  />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

// Create Render function that renders the new jsx
// Call it right away
// Call it after options array added to
render();
