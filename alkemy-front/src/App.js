import React from "react"
import './App.css';

import Login from "./components/Login/Login.js"
import Home from "./components/Home/Home.js";
import Register from "./components/Register/Register.js";
import CreateTransaction from "./components/Create/CreateTransaction.js";
import GetAllTransaction from "./components/Transaction/GetAllTransaction.js";
import EditTransaction from "./components/Edit/EditTransaction";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
 <BrowserRouter>
      <Routes>
            <Route path='/login' element={ <Login/>} />
            <Route path='/' element={ <Home/>} />
            <Route path='/create' element={ <CreateTransaction/>} />
            <Route path='/register' element={ <Register/>} />
            <Route path='/list' element={ <GetAllTransaction/>} />   
            <Route path='/edit/:id' element={ <EditTransaction/>} />  
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
