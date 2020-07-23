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
      users: {
        username: ''
      }
    }
  }

  getUser = () =>{
    fetch(baseURL + '/bridge' + this.state.user.username ).then(res => {
      return res.json()
    }).then(user =>{
      console.log(user)
      this.setState({
        username: user.username,
        img: user.image 
  
      })
    })
  }
  
 render () {
    return (

      <div> 
        <Navbar />
        <Switch>
          <Route exact path='/' component={Login    } />
          <Route exact path='/feed' component={Feed}/>
          <Route exact path='/profile' render={()=><Profile username={this.state.username}/>   }/>
          <Route exact path='/edit-profile' component={EditProfile} />
          <Route exact path='/messageinbox' component={MessageInbox} />
        </Switch>
      
      </div>


    )}
}

export default App;
