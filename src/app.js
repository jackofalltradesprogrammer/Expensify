// react uses the first letter of the component to differentiate from HTML
class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What Should I do?</button>
      </div>
    );
  }
}

// * Options -> Options Component here
class Options extends React.Component {
  render() {
    return (
      <div>
        Options Component here
        <Option />
      </div>
    );
  }
}

// * AddOption -> Add Option component here
class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption Component here
      </div>
    )
  }
}

// * Option -> Option component here
class Option extends React.Component {
  render() {
    return (
      <div>
        Option Component here
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
