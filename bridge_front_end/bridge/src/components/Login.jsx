import React, { Component } from 'react'

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
                    <form>
                        <input type='text' value={this.state.LoginUsername} id='LoginUsername' placeholder='Username' onChange={this.handleChange} ></input>

                        <input type='password' value={this.state.LoginPassword} id='LoginPassword' onChange={this.handleChange} ></input>
                        <input type='submit' value='Log-In' ></input>
                    </form> 
                    </div>
                    <img className='logo' src='./public/logo.png' />
                    <div>
                        <form className='sign-up'>
                        <input type='text' value={this.state.NewUsername} id='NewUsername' onChange={this.handleChange} ></input>
                        <input type='email' onChange={this.handleChange} value={this.state.email} id='email'></input>
                        <input type='password' onChange={this.handleChange} value={this.state.NewPassword} id='NewPassword'></input>
                        <input type='submit' value='Sign-Up'></input>
                        </form> 
                    </div>                    
                </div>
            </div>
        )
    }
}
