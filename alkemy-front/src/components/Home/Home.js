import React from 'react'
import Transaction10 from "./Transaction10.js";
import TransactionTotal from "./TransactionTotal.js";
import ButtonHome from './ButthonHome.js';
import "./Home.css";




const Home = () =>{


    return (
    
    <div className='Home'>
         <h1>TObUdGeT</h1>    
        <TransactionTotal/>
        <Transaction10/>
        <ButtonHome/>
    </div>)
}

export default Home;