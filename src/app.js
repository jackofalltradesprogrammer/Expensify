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

// TODO Options -> Options Component here
class Options extends React.Component {
  render() {
    return (
      <div>
        Options Component here
      </div>
    );
  }
}

// TODO AddOption -> Add Option component here
class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption Component here
      </div>
    )
  }
}

// react uses the first letter of the component to differentiate from HTML
const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);
ReactDOM.render(jsx, document.getElementById("app"));
