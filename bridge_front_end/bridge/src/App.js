import React from 'react';
import Login from './components/Login.jsx'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: ''
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
        < Login handleChange={this.handleChange}/>
      </div>


    )}
}

export default App;
