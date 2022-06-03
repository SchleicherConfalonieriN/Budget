import React from 'react'
import TransactionOutcome from "./TransactionOutcome.js";
import TransactionIncome from "./TransactionIncome.js";
import Button from './Butthon.js';

const GetAllTransaction = () =>{



    return (

    <div className= "PrimaryContainer">
                  <h1>TObUdGeT</h1>
                  <h4>Transaction List</h4>
            <TransactionIncome/>
            <TransactionOutcome/>
            <Button/>
    </div>)
}


export default GetAllTransaction