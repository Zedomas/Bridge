import React, { Component } from 'react'
import logo from '../img/logo.png'
import {Link} from 'react-router-dom'
import logoM from '../img/logoM.png'
import logoMu from '../img/logoMu.png'
import logoB from '../img/logoB.png'
import logoV from '../img/logoV.png'
export default class Welcome extends Component {


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
        <h1>Ali make me pretty</h1>
        </div>
        )
    }
}
