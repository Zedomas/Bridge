import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link className='nav-link' to='/'>Login</Link>
            <Link className='nav-link' to='/feed'>Home</Link>
            <Link className='nav-link' to='/profile'>My Profile</Link>
            <Link className='nav-link' to='/messageInbox'>Messages</Link>
        </div>
    )
}
