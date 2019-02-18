// install --> import use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const Layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
       // ! props.children get all JSX passed between the parent tags
//       {props.children}
//       <p>footer</p>
//     </div>
//   );
// };

// ReactDOM.render((
//   <Layout>
//     <div>
//       <h1>Page Title</h1>
//       <p>This is my page</p>
//     </div>
//   </Layout>
//   ), document.getElementById('app'));
// one way to pass jsx
// ReactDOM.render(<Layout content={template} />, document.getElementById('app'));
