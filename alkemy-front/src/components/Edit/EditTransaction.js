import React from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import TransactionURL from '../../api/Transaction';



const EditTransaction = () => {

    let {id} = useParams();
    


    const[amount, setAmount] = useState("") 
    const[description, setDescription] = useState("")
    const[category, setCategory] = useState("")
    const[user, setUser] = useState("")
    const[date, setDate] = useState("")

    const create = async (e) =>{
        e.preventDefault()
        axios.post(TransactionURL.URL1+id, {
            headers: {
            'user-token': TransactionURL.Token
            }
          });
    }

return(

    <div className='edit'>
        <h2>Edit Transaction</h2>


    <form onSubmit={create}>

<div>
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

<label>User</label>
<input
    value={user}
    onChange={(e)=> setUser(e.target.value)}
    type='number'

/>


<label>Date</label>
<input
    value={date}
    onChange={(e)=> setDate(e.target.value)}
    type='date'
/>

<button type= "submit"> New Transaction</button>

</div>


    </form>


    </div>
)
}

export default EditTransaction;

