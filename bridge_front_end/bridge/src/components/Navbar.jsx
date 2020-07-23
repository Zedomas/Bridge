import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link className='nav-link' to='/'>Login</Link>
            <Link className='nav-link' to='/sign-up'>Sign-up</Link>
            <Link className='nav-link' to='/movies'>Movies</Link>
            <Link className='nav-link' to='/music'>Music</Link>
        </div>
    )
}
