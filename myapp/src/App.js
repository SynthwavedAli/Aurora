import React, { Component } from 'react'
import './App.css';
import Greet from './Newcomponents/Greet'
import Prompt from './Newcomponents/prompt'
import Promptcount from './Newcomponents/promptcount'




class App extends Component {
  render() {
    return(
      <div className='App'>
        <img src='/images/mylogo.png'
         style={{ width: '300px', height: '300px', marginTop: '20px', marginBottom: '-90px'}}

         />
        <Greet />
        <Prompt />
        <Promptcount />
        
      </div>
    )
  }
}

export default App