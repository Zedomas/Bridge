import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logoM from '../img/logoM.png'
import logoMu from '../img/logoMu.png'
import logoB from '../img/logoB.png'
import logoV from '../img/logoV.png'


export default class Welcome extends Component {
    render() {
        return (
            <div>
                <h2 className='user'>Welcome {this.props.username}</h2>
                <h4> Explore and Share you favorite Movies, Musics and books <br></br>
                with you friends only by searching and adding to our favorite lists<br></br>
                Are you a NBA fan? check out our hoops page for the latest game results</h4>
                <div className='logo'>
                    <div className='imgDiv'>
                    <Link  to='/movies'>
                        <img className='welcomeN' src={logoM} alt=''/>  
                    </Link>    
                    </div>
                    <div className='imgDiv'>
                        <Link  to='/music'>
                            <img className='welcomeN'  src={logoMu} alt=''/>  
                        </Link> 
                    </div>    
                    <div className='imgDiv'>
                        <Link className='nav-link' to='/books'>
                        <img className='welcomeN'  src={logoB} alt=''/> 
                        </Link> 
                    </div>    
                    <div className='imgDiv'>
                    <Link className='nav-link' to='/highlight'>
                        <img className='welcomeN'  src={logoV} alt=''/> 
                    </Link>
                    </div>       
                </div>
            </div>
        )
    }
}
