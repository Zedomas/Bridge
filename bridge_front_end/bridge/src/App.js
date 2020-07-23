import React from 'react';
import Login from './components/Login.jsx'
import Feed from './components/Feed.jsx'
import Profile from './components/Profile.jsx'
import EditProfile from './components/Edit-profile.jsx'
import Navbar from './components/Navbar.jsx'
import MessageInbox from './components/MessageInbox.jsx'

import './App.css';
import { Switch , Route} from 'react-router-dom'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: {
        username: ''
      }
    }
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
        <Navbar />
        <Switch>
          <Route exact path='/' component={Login } />
          <Route exact path='/feed' component={Feed}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/edit-profile' component={EditProfile} />
          <Route exact path='/messageinbox' component={MessageInbox} />
        </Switch>
      
      </div>


    )}
}

export default App;
