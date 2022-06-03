import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'

const URL = 'http://localhost:8000/api/transaction/Income';

const TransactionIncome =() =>{

    const[transaction, setTransaction] = useState([])
    useEffect (  () => {

        getTransactions()

    },[])

const getTransactions = async () =>{

    const res = await axios.get(URL);
    setTransaction(res.data);
}
return (

    <div className="ListContainer">
<h4>Income</h4>
<tr>
<th>id</th>
<th>Amount</th>
<th>Description</th>
<th>Category</th>
<th>Date</th>

</tr>
    {transaction.map((mov,index) =>
    <tr>
    <th key={index}>{mov.id}</th>
    <th key={index}>{mov.Amount}</th>
    <th key={index}>{mov.Description}</th>
    <th key={index}>{mov.Category}</th>
    <th key={index}>{mov.Date}</th>
    </tr>
    )
    }
      </div>  
)

}
export default TransactionIncome;