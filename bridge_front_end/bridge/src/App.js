import React from 'react';
import Login from './components/Login.jsx'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: {
        username: ''
      }
    }
  }

handleChange = (event) => {
    this.setState({
        [this.target.id]: event.target.value,
    });
}

addUser = (newUser) => {
  const copyUser = [...this.state.users];
  copyUser.push(newUser);
  this.setState({
    users: copyUser,
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
