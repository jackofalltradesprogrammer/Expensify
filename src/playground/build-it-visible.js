let visibility = false;
const toggleDetails = () => {
  visibility = !visibility;
   render();
 };

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>{visibility ? 'Hide details' : 'Show details'}</button>
      <p>{visibility && (
          <div>
            <p>Hey. There are some details you can now see!</p>
          </div>
      )}</p>
    </div>
  );

  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
