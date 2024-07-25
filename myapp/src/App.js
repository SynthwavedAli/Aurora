import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './Newcomponents/Greet'
import Prompt from './Newcomponents/prompt'


class App extends Component {
  render() {
    return(
      <div className='App'>
        <Greet />
        <Prompt />
        
      </div>
    )
  }
}

export default App