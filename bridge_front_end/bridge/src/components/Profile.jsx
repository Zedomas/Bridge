import React, { Component } from 'react';

let baseURL = 'http://localhost:3003'

export default class componentName extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user : ''
    }
  }


  handleLogin = (event) => {
    event.preventDefault();
    fetch(baseURL + '/users/login', {
        method: 'POST',
        body: JSON.stringify({
            username: this.state.LoginUsername,
            password: this.state.LoginPassword
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => {
        return res.json();
    }).then(data => {
        this.setState({
            username: data.username,
            LoginUsername: '',
            LoginPassword: '',
        });
    });
}

getUser = () =>{
  fetch(baseURL + '/profile').then(res => {
    return res.json()
  }).then(user =>{
    console.log(user)
    this.setState({
      user: user
    })
  })
}



  render() {
    return (
      <div> 
        <h1>profile page</h1>
        <div key={user._id}>

        <h2>user.firstName</h2>
        
        
        </div>
      </div>
    );
  }
}
