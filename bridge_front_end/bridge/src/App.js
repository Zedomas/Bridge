import React from 'react';
import Login from './components/Login.jsx'
import './App.css';

let baseURL = 'http://localhost:3003'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: ''
      }
    }
  }

 


  render () {
    return (

      <div> 
        < Login
        baseURL={baseURL}
        addUser={ this.addUser } 
        handleChange={this.handleChange}
        />
      </div>


    )}
}

export default App;
