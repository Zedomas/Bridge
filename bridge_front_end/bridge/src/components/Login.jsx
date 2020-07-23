import React, { Component } from 'react'
import logo from '../img/logo.png'



export default class Login extends Component {

    state = {
        LoginUsername: '',
        LoginPassword: '',
        NewUsername: '',
        NewPassword: '',
        email: '',
    }        

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }



    render() {
        return (
            <div>
                <div className='log-inPage'>
                    <div className='log-in'>

                    <form onSubmit={ (evt) => this.props.handleLogin(evt) } >
                        <input type='text' value={this.state.LoginUsername} id='LoginUsername' placeholder='Username' onChange={this.handleChange} ></input>

                        <input type='password' value={this.state.LoginPassword} id='LoginPassword' placeholder='Password' onChange={this.handleChange} ></input>
                        <input type='submit' value='Log-In' ></input>
                    </form> 

                    </div>
                    <div className='logo'>
                        <img src={logo} alt=''/>  
                    </div>
                    <div>
                        <form className='sign-up' onSubmit={ (evt) => this.props.handleSignUp(evt) } >

                        <input type='text' value={this.state.NewUsername} id='NewUsername' placeholder='Username' onChange={this.handleChange} ></input>
                        <input type='email' placeholder='Email' onChange={this.handleChange} value={this.state.email} id='email'></input>
                        <input type='password' placeholder='Password' onChange={this.handleChange} value={this.state.NewPassword} id='NewPassword'></input>
                        <input type='submit' value='Sign-Up'></input>

                        </form> 
                    </div>                    
                </div>
            </div>
        )
    }
}
