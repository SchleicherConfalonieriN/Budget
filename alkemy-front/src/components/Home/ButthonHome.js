import React from 'react'
import {Link} from 'react-router-dom';

const ButtonHome = () =>{

    return(
        <div className='btnContainer'>
            <div>
            <Link to={`/create`}><button><h4>New transaction</h4></button></Link>
            </div>
            <div>
            <Link to={`/list`}><button><h4>Transaction List</h4></button></Link>
            </div>
        </div>
    )
}

export default ButtonHome