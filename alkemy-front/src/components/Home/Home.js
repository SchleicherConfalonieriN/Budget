import React from 'react'
import Transaction10 from "./Transaction10.js";
import TransactionTotal from "./TransactionTotal.js";
import ButtonHome from './ButthonHome.js';
import "./Home.css";




const Home = () =>{


    return (
    
    <div className='PrimaryContainer'>
         <h1>TObUdGeT</h1>
        <ButtonHome/>    
        <TransactionTotal/>
        <Transaction10/>
       
    </div>)
}

export default Home;