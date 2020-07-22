import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type='text' value="Username" name='username'></input>
                    <input type='password' value="Password" name='password'></input>
                </form>
            </div>
        )
    }
}
