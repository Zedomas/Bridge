import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div className='navbar'>
            <Link className='nav-link' to='/movies'>Movies</Link>
            <Link className='nav-link' to='/music'>Music</Link>
            <Link className='nav-link' to='/highlight'>Hoops</Link>
            <Link className='nav-link' to='/books'>Books</Link>
            <Link onClick={()=> props.handleLogout()} className='nav-link' to='/'>Log-Out</Link>
            <form>
            <Link className='nav-link'  onClick={()=> props.delete()} >Delete User</Link>   
            </form>
            
        </div>
    )
}
