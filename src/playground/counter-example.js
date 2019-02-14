let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  console.log("Reset Count");
  count = 0;
  renderCounterApp();
};
// class attribute from html is called className in JSX as it is reserved
// JSX don't have data binding 


const appRoot = document.getElementById("app");

// render() method is using to render the jsx code on the elmeent


const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();