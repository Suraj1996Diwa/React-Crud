import React, { useEffect, useState }from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

function Menu(props){
    const [login, setLogin] = useState(false);

    const logoutHandler = () =>{
        if(window.confirm('Are you sure want to logout ?')){
            toast.success('logout success');
            localStorage.clear();
            window.location.href = '/login';
        }
    }
    useEffect(()=>{
        let isLogin = JSON.parse(localStorage.getItem('isLogin') || false); 
            console.log('local storage =', isLogin);
            if(isLogin){
                setLogin(true);
            }else{
                setLogin(false);
            }

    },[]);

    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container">
                <NavLink to={'/'} className="navbar-brand">React Curd</NavLink>
                <button className="navbar-toggler">
                    <span className="navbar-toggler-icon" data-bs-target="#menu" data-bs-toggle='collapse'></span>
                </button>

                <div className="collapse navbar-collapse" id ='menu'>
                    <ul className="navbar-nav">
                        {
                            login ? ( <>
                                           <li className="nav-item">
                                                <NavLink to={`/home`} className="nav-link">Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <button className='btn btn-danger' onClick={logoutHandler}>logout</button>
                                            </li>

                            </>):
                            (
                                <li className='nav-item'>
                                    <NavLink to={`/login`} className="nav-link">Login</NavLink>
                                </li>
                            )}
         

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu