
import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'

const URL = 'http://localhost:8000/api/transaction/10'


const Transaction10 =() =>{

    const[transaction, setTransaction] = useState([])
    useEffect (  () => {

        getTransactions()

    },[])

const getTransactions = async () =>{

    const res = await axios.get(URL, {
        headers: {
        'user-token': JSON.parse(localStorage.getItem("apiData"))
        }
      }
    )
    console.log(res.data);   
    setTransaction(res.data);
}
return (

    <div className='ListContainer'>

<tr className='ListTitle'>
<th>id</th>
<th>Amount</th>
<th>Description</th>
<th>Category</th>
<th>Type</th>
<th>Date</th>
</tr>
    {transaction.map((mov,index) =>
    <tr >
    <th className='Content' key={index}>{mov.id}</th>
    <th className='Content' key={index}>{mov.Amount}</th>
    <th className='Content' key={index}>{mov.Description}</th>
    <th className='Content' key={index}>{mov.Type}</th>
    <th className='Content' key={index}>{mov.Category}</th>
    <th className='Content' key={index}>{mov.Date}</th>
    </tr>
    )
    }
      </div>  
)

}
export default Transaction10;