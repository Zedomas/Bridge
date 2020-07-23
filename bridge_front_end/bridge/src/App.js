import React from 'react';
import Login from './components/Login.jsx'
import Feed from './components/Feed.jsx'
import Profile from './components/Profile.jsx'
import EditProfile from './components/Edit-profile.jsx'
import Navbar from './components/Navbar.jsx'
import MessageInbox from './components/MessageInbox.jsx'

import './App.css';
import { Switch , Route} from 'react-router-dom'

let baseURL = 'http://localhost:3003'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: null

    }
  }

addUser = (newUser) => {
  const copyUser = [...this.state.users];
  copyUser.push(newUser);
  this.setState({
    users: copyUser,
  });
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
      // this.props.addUser(data);
      this.setState({
           username: data.username
      });
  });
}

handleSignUp = (event) => {
  event.preventDefault();
  fetch(baseURL + '/users/signup', {
      method: 'POST',
      body: JSON.stringify({
          username: this.state.NewUsername,
          password: this.state.NewPassword,
          email: this.state.email
      }),
      headers: {
          'Content-Type': 'application/json',
      },
  }).then(res => {
      return res.json();
  }).then(data => {
      console.log(data)
      this.setState({
          username: data.username
      });
      fetch(baseURL + '/bridge', {
          method: 'POST',
          body: JSON.stringify({
              username: data.username,
          }),
          headers: {
              'Content-Type': 'application/json',
          },
      }).then(res => {
          return res.json();
      }).then(data => {
          console.log(data)
    });
  })
}


 render () {
    return (

      <div> 
        <Navbar />
        <Switch>
          <Route exact path='/' 
          render={ () => 
          <Login 
            handleSignUp={this.handleSignUp}
            handleLogin={this.handleLogin}
            username = {this.state.username}
            />
        } />
          <Route exact path='/feed' component={Feed}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/edit-profile' component={EditProfile} />
          <Route exact path='/messageinbox' component={MessageInbox} />
        </Switch>
      
      </div>


    )}
}

export default App;
