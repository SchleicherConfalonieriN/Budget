import React from 'react'
import  axios from 'axios'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'


const URL = 'http://localhost:8000/api/transaction/'


const CreateTransaction = () =>{
    const[amount, setAmount] = useState('')
    const[description, setDescription] = useState('')
    const[category, setCategory] = useState('')
    const[user, setUser] = useState('')
    const[type, setType] = useState('')
    const[date, setDate] = useState('')

    const create = async (e) =>{
        e.preventDefault()
        axios.post(URL,{Amount:amount, Description:description, Category:category, Type:type, Date:date},{
            headers: {
            'user-token': JSON.parse(localStorage.getItem("apiData"))
            }
          })
    }

return(

    <div className='PrimaryContainer'>
        <h2>New Trasnaction</h2>


    <form onSubmit={create}>

<label>Amount</label>
<input
    value={amount}
    onChange={(e)=> setAmount(e.target.value)}
    type='number'

/>

<label>Description</label>
<input
    value={description}
    onChange={(e)=> setDescription(e.target.value)}
    type='text'

/>

<label>Category</label>
<input
    value={category}
    onChange={(e)=> setCategory(e.target.value)}
    type='text'

/>


<label>Transaction Type</label>
<select   value={type} onChange={(e)=> setType(e.target.value)}>
   <option selected  > -- select an option -- </option>
   <option  value={"Egreso"}>Egreso</option>
   <option value={"Ingreso"}>Ingreso</option>
    </select>



<label>Date</label>
<input
    value={date}
    onChange={(e)=> setDate(e.target.value)}
    type='date'
/>

<button type= "submit">Create</button>


</form>
<div className='btnContainer'>
<Link to={`/home`}><button><h4>Home</h4></button></Link>
</div>
</div>


)
}

export default CreateTransaction;
