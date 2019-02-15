// todo: VisibilityToggle - render, constructor, handleToggleVisiblity
// todo: visibility -> false
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibilty() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Toggle Details</h1>
        <button onClick={this.handleToggleVisibilty}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>I did it</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;
// const toggleDetails = () => {
//   visibility = !visibility;
//    render();
//  };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDetails}>{visibility ? 'Hide details' : 'Show details'}</button>
//       <p>{visibility && (
//           <div>
//             <p>Hey. There are some details you can now see!</p>
//           </div>
//       )}</p>
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// render();
