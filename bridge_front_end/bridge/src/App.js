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

  handleChange = (event) => {
    this.setState({
        [this.target.id]: event.target.value,
    });
}


  render () {
    return (

      <div> 
        < Login />
      </div>


    )}
}

export default App;
