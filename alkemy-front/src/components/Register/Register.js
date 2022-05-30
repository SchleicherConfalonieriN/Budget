import React from 'react'
import "./Register.css";
import axios from "axios";
import {useState,useEffect} from 'react'

const URL ='http://localhost:8000/api/user/register';

const Register = () => {

    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('');


    const create = async (e) =>{
        e.preventDefault()
        axios.post(URL,{Email:email, Password:password})
    }

return (

    <div >
        <form onSubmit={create}>
        <h2>Register Form</h2>
        <label>Email</label>    
        <input type={"text"} value={email} onChange={(e)=> SetEmail(e.target.value)}></input>
        <br></br>
        <label>Password</label>    
        <input type={"text"} value={password} onChange={(e)=> SetPassword(e.target.value)}></input>
        <br></br>
        <input type={"submit"}></input>
        </form>
     </div>
    )
}


export default Register ;