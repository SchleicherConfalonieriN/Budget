import React from 'react'
import {Link} from 'react-router-dom';

const Button = (props) =>{

    return(
        <div className='btnContainer'>
            <div>
            <Link to={`/home`}><button><h4>Home</h4></button></Link>
            </div>
        </div>
    )
}

export default Button