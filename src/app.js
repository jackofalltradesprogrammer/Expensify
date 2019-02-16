// react uses the first letter of the component to differentiate from HTML
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    };
  }
  // * todo handleDeleteOptions - Pass the functionality to child components as props is one way only
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  // todo: handlePick - pass down to Action and setup onClick - bind here
  // todo: randomly pick an option and alert it
  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}  
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}  
        />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick} 
          disabled={!this.props.hasOptions}
        >
          What Should I do?
        </button>
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
  // * bind method can be used to customize a context execution
  
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map((option) => (
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
    if (option) {
      alert('handleAddOption');
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
