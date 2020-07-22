import React from 'react';
import Login from './components/Login.jsx'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {
        userName:''
      }
    }
  }

  render () {
    return (

      <div> 
        < Login />
      </div>


    )}
}

export default App;
