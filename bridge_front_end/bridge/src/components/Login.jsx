import React, { Component } from 'react'
// import logo from './public/logo.png'
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
                    <img className='logo'  />
                    <div>
                        <form className='sign-up'>
                            <input type='text' value="firstname" name='firstname'></input>
                            <input type='text' value="lastname" name='lastname'></input>
                            <input type='email' value="email" name='email'></input>
                            <input type='password' value="password" name='password'></input>
                            <input type='submit' value='Sign-Up'></input>
                        </form> 
                    </div>                    
                </div>
            </div>
        )
    }
}
