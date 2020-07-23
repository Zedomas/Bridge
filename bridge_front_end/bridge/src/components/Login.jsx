import React, { Component } from 'react'
import logo from '../img/logo.png'

let baseURL = 'http://localhost:3003'

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
                user: data.username,
                NewUsername: '',
                NewPassword: '',
                email: '',
            });
        });
    }



    render() {
        return (
            <div>
                <div className='log-inPage'>
                    <div className='log-in'>

                    <form onSubmit={ (evt) => this.handleLogin(evt) } >
                        <input type='text' value={this.state.LoginUsername} id='LoginUsername' placeholder='Username' onChange={this.handleChange} ></input>

                        <input type='password' value={this.state.LoginPassword} id='LoginPassword' placeholder='Password' onChange={this.handleChange} ></input>
                        <input type='submit' value='Log-In' ></input>
                    </form> 

                    </div>
                    <div className='logo'>
                        <img src={logo}/>  
                    </div>
                    <div>
                        <form className='sign-up' onSubmit={ (evt) => this.handleSignUp(evt) } >

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
