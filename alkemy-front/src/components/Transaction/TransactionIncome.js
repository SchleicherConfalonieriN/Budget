import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
const URL = 'http://localhost:8000/api/transaction/Income';
const URLd = 'http://localhost:8000/api/transaction/'



const TransactionIncome =() =>{

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
    setTransaction(res.data);
}


const deleteTransaction = async (id) => {
    await axios.delete(URLd+id, {
        headers: {
        'user-token': JSON.parse(localStorage.getItem("apiData"))
        }
      }
    
    )
    getTransactions()
 }




return (

    <div className="ListContainer">
<h4>Income</h4>
<tr className='ListTitle'>
<th>id</th>
<th>Amount</th>
<th>Description</th>
<th>Category</th>
<th>Date</th>
<th></th>
<th></th>
</tr>

    {transaction.map((mov,index) =>
    <tr>
    <th className='Content' key={index}>{mov.id}</th>
    <th className='Content' key={index}>{mov.Amount}</th>
    <th className='Content' key={index}>{mov.Description}</th>
    <th className='Content' key={index}>{mov.Category}</th>
    <th className='Content' key={index}>{mov.Date}</th>
    <th><Link to={`/edit/${mov.id}`}><h4>Edit</h4></Link></th>
    <th><button onClick={()=>deleteTransaction(mov.id)}>X</button></th>
    </tr>
    )
    }
      </div>  
)

}
export default TransactionIncome;