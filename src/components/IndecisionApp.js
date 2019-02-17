import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

// // todo: pull the state out of the constructor
// // todo: convert all 4 event handlers to class properties (arrow functions)
// // todo: delte the constructor completly
// // todo: start with class properties and end with method

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    };
    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     //   this.state = {
    //     //     options: []
    //     //   };
    // }

    // * todo handleDeleteOptions - Pass the functionality to child components as props is one way only
    // ! Arrow functions treat {} as a function, for an object we can use ({})

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    // to delete a single option only
    // array's filter method to remove the item
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    // * todo: handlePick - pass down to Action and setup onClick - bind here
    // * todo: randomly pick an option and alert it
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };
    // this function is to update the options array only
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exits';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }

        } catch (error) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('fetching data');
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

