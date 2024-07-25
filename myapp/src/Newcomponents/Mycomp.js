import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sayHello();
  }

  sayHello() {
    alert(data);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Click Me For My Response</button>
          <label>
            Enter your Prompt Here:{" "}
            <input
              name="myInput"
              value={this.state.inputValue} // Bind input value to state
              onChange={this.handleInputChange} // Handle input change
            />
          </label>
        </form>
        <div>Message from AI: {this.state.inputValue}</div>
      </>
    );
  }
}

export default MyComponent;