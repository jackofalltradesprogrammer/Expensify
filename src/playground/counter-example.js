// * todo: Create three methods: handleAddOne, handleMinusOne, handleReset
// * todo: Use console.log to print method name
// * todo: Wire up onClick & bind in the constructor
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    // setState has function argument that is the previous state and can be named anything
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  //  * todo : Call this.setState decrement the count by 1
  // ! this.setState is asynchronous as a lot is going on the backend
  // ! using arrow functions, we set the execution context and hence the state is updated
  // ! this way we can set the state twice in the same function and it works! 
  handleMinusOne() {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   console.log("Reset Count");
//   count = 0;
//   renderCounterApp();
// };
// // class attribute from html is called className in JSX as it is reserved
// // JSX don't have data binding

// const appRoot = document.getElementById("app");

// // render() method is using to render the jsx code on the elmeent

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
