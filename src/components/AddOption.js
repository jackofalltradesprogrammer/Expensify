import React from 'react';

export default class AddOption extends React.Component {
    // ! New syntax to define the class properties - so they can be accessible with instance
    state = {
      error: undefined
    }
    //need to set constructor with props as we are using this
    // constructor(props){
    //   super(props);
    //   this.handleAddOption = this.handleAddOption.bind(this);
    //   // this.state = {
    //   //   error: undefined
    //   // };
    // }
    // ! handleAddOPtion is now a class property and arrow function will preserve the this syntax
    handleAddOption = (e) => {
      // for the form you need event that is being handled and prevent default behavior
      e.preventDefault();
  
      const option = e.target.option.value.trim();
      const error = this.props.handleAddOption(option);
      
      // error : error - this is ES6 syntax
      this.setState(() => ({ error }));
  
      if(!error){
        e.target.elements.option.value='';
      }
    };
    render() {
      return (
        <div>
          {this.state.error &&  <p className="add-option-error">{this.state.error}</p>}
          <form className="add-option" onSubmit={this.handleAddOption}>
            <input className="add-option__input" type='text' name='option' />
            <button className="button">Add Option</button>
          </form>
        </div>
      );
    }
  }