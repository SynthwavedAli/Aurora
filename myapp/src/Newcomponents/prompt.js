import React, { Component } from "react";
import './prompt.css'; // Import the CSS file




class Classcomp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "", // Initialize state to hold input value
      promptLog: [] // Initialize state to hold the log of prompts and responses
    };
    this.sayHello = this.sayHello.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async sayHello() {
    // Access input value from state
    const { inputValue } = this.state;

    try {
      // Send an HTTP GET request (modify URL as needed)
      const response = await fetch(`http://localhost:5066/?message=${inputValue}`)
        .then((data) => data.text())
        .catch((err) => {
          console.log(err.message);
          return "Failed to fetch response. AI has not been started up by the owner. Contact notali.shzi@gmail.com for help.";
        });

      // Add the new prompt and response to the log (prepend instead of append)
      this.setState((prevState) => ({
        promptLog: [{ prompt: inputValue, response: response }, ...prevState.promptLog], // Prepend new prompt and response to log
        inputValue: "" // Clear the input field
      }));
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      alert(`Failed to fetch: ${error.message}`);
    }
  }

  // Method to handle input change and update state
  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value // Update input value in state
    });
  }

  handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    this.sayHello(); // Call the sayHello function
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              name="myInput"
              value={this.state.inputValue} // Bind input value to state
              onChange={this.handleInputChange} // Handle input change
            />
          </label>
        </form>

        <div className="log-container">
          <h3>Prompt Log:</h3>
          <ul>
            {this.state.promptLog.map((entry, index) => (
              <li key={index}>
                <strong>Prompt:</strong> {entry.prompt} <br />
                <strong>Response:</strong> {entry.response}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Classcomp;