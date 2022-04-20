import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Menu from './components/Menu';
import Pnf from './components/Pnf';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Update from './components/Update';

function App(props){
  return(
    <BrowserRouter>
    <Menu/>
    <ToastContainer position={'top-right'} theme={'light'} autoClose={3000} />
      <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/home`} element={<Home/>}/>
        <Route path={`/login`} element={<Login/>}/>
        <Route path={`/register`} element={<Register/>}/>
        <Route path={`/update/:id`} element={<Update/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}
export default App