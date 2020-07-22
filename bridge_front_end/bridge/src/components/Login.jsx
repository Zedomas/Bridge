import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className='log-inPage'>
                    <div className='log-in'>
                    <form>
                        <input type='text' value="email" name='email' placeholder='email'></input>
                        <input type='password' value="Password" name='password' placeholder="password"></input>
                        <input type='submit' value='Log-In'></input>
                    </form> 
                    </div>
                    <img className='logo' src='./public/logo.png' />
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
