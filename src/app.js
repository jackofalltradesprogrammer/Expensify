// react uses the first letter of the component to differentiate from HTML
class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing one", "Thing two", "Thing three", "Thing four"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I do?</button>
      </div>
    );
  }
}

// * Options -> Options Component here
// * todo: Setup options prop form Options component
// * todo: Render the length of the array
// * todo: Add Remove All button
// * todo: Setup handleRemoveAll -> alert some message
// * todo: setup onClick to fire the method

class Options extends React.Component {
  handleRemoveAll() {
    alert("handleRemoveAll");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

// * AddOption -> Add Option component here
// * todo: 1. Setup the form with text input and submit button
// * todo: 2. Wire up onSubmit
// * todo: 3. handleAddOption -> fetch the value typed -> if value, then alert
class AddOption extends React.Component {
  // 
  handleAddOption(e) {
    // for the form you need event that is being handled and prevent default behavior
    e.preventDefault();
    const option = e.target.option.value.trim();
    if(option){
    alert("handleAddOption");
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// * Option -> Option component here
class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
