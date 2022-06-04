import React from 'react'
import {Link} from 'react-router-dom';

const ButtonHome = () =>{

    const exit = () =>{
        window.localStorage.removeItem('apiData')
        relocate();
    }

    const relocate = () =>{
        window.location.assign('http://localhost:3000')
    }
    return(
        <div className='btnContainer'>
            <div>
            <Link to={`/create`}><button><h4>New</h4></button></Link>
            </div>
            <div>
            <Link to={`/list`}><button><h4>List</h4></button></Link>
            </div>
            <div>
            <button  onClick={exit}><h4>Close</h4></button>
            </div>

        </div>
    )
}

export default ButtonHome