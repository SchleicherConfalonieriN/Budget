import axios from 'axios'
import {useState,useEffect} from 'react'
import React from 'react'
import TransactionURL from '../../api/Transaction';

const URL = 'http://localhost:8000/api/transaction'

const Balance = () =>{
    const[total, setTotal] = useState()
    useEffect (  () => {

        getTransactions()
        
    },[])

    const getTransactions = async () =>{
     let sum=0;
     parseFloat(sum)
 
    const res = await axios.get(URL, {
        headers: {
        'user-token': JSON.parse(localStorage.getItem("apiData"))
        }
      }
    );
    res.data.forEach(ele => {
        if(ele.Type ==="Ingreso") {sum=sum+parseFloat(ele.Amount)}
        if(ele.Type ==="Egreso")  {sum=sum-parseFloat(ele.Amount)}
    
    });
    
    setTotal(sum);
    }
    return(
    <div className='Total'>
     <h3>This is your money : {total}</h3>
    </div>
)
    
}


export default Balance; 