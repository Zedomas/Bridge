import React, { Component } from 'react'
import logo from '../img/logo.png'



export default class Login extends Component {

        

    
    render() {
        return (
            <div>
                <div className='log-inPage'>
                    <div className='log-in'>

                    <form onSubmit={ (evt) => this.props.handleLogin(evt) } >
                        <input type='text' value={this.props.LoginUsername} id='LoginUsername' placeholder='Username' onChange={this.props.handleChange} ></input>
                        <input type='password' value={this.props.LoginPassword} id='LoginPassword' placeholder='Password' onChange={this.props.handleChange} ></input>
                        <input type='submit' value='Log-In' ></input>
                    </form> 

                    </div>
                    <div className='logo'>
                        <img src={logo}/>  
                    </div>
                    <div>
                        <form className='sign-up' onSubmit={ (evt) => this.props.handleSignUp(evt) } >
                        <input type='text' value={this.props.NewUsername} id='NewUsername' placeholder='Username' onChange={this.props.handleChange} ></input>
                        <input type='email' placeholder='Email' onChange={this.props.handleChange} value={this.props.email} id='email'></input>
                        <input type='password' placeholder='Password' onChange={this.props.handleChange} value={this.props.NewPassword} id='NewPassword'></input>
                        <input type='submit' value='Sign-Up'></input>

                        </form> 
                    </div>                    
                </div>
            </div>
        )
    }
}
