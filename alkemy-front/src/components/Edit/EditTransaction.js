import React from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import {useState,useEffect} from 'react';


const URL = 'http://localhost:8000/api/transaction/'

const EditTransaction = () => {

    let {id} = useParams();
    


    const[amount, setAmount] = useState("") 
    const[description, setDescription] = useState("")
    const[category, setCategory] = useState("")
    const[date, setDate] = useState("")

    const edit = async (e) =>{
        e.preventDefault()
       await axios.put(`${URL}${id}`,{Amount:amount, Description:description,Category:category,Date:date},{
            headers: {
            'user-token': JSON.parse(localStorage.getItem("apiData"))
            }
          });
    }

return(

    <div className='PrimaryContainer'>
        <h2>Edit Transaction</h2>
        
    <form onSubmit={edit}>
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
        <label>Date</label>
        <input
            value={date}
            onChange={(e)=> setDate(e.target.value)}
            type='date'
        />
    <button type= "submit">Edit</button>
    </form>

    <Link to={`/home`}><button><h4>Home</h4></button></Link>
</div>
)
}

export default EditTransaction;

