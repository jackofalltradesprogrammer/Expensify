import React from 'react';

export default class AddOption extends React.Component {
    //need to set constructor with props as we are using this
    constructor(props){
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }
    handleAddOption(e) {
      // for the form you need event that is being handled and prevent default behavior
      e.preventDefault();
  
      const option = e.target.option.value.trim();
      const error = this.props.handleAddOption(option);
      
      // error : error - this is ES6 syntax
      this.setState(() => ({ error }));
  
      if(!error){
        e.target.elements.option.value='';
      }
    }
    render() {
      return (
        <div>
          {this.state.error &&  <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type='text' name='option' />
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }