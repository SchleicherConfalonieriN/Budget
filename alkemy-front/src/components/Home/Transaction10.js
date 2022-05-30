
import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import TransactionURL from '../../api/Transaction';



const Transaction10 =() =>{

    const[transaction, setTransaction] = useState([])
    useEffect (  () => {

        getTransactions()

    },[])

const getTransactions = async () =>{

    const res = await axios.get(TransactionURL.URL, {
        headers: {
        'user-token': TransactionURL.Token
        }
      }
    )
    setTransaction(res.data);
}
return (

    <div className='ListContainer'>

<tr>
<th>id</th>
<th>Amount</th>
<th>Description</th>
<th>Category</th>
<th>Type</th>
<th>Date</th>

</tr>
    {transaction.map((mov,index) =>
    <tr>
    <th key={index}>{mov.id}</th>
    <th key={index}>{mov.Amount}</th>
    <th key={index}>{mov.Description}</th>
    <th key={index}>{mov.Type}</th>
    <th key={index}>{mov.Category}</th>
    <th key={index}>{mov.Date}</th>
    </tr>
    )
    }
      </div>  
)

}
export default Transaction10;