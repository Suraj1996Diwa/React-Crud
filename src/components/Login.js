import React,{ useState} from 'react';
import { NavLink } from 'react-router-dom';
import {loginAuth} from '../API/Auth'

function Login(props){
    const [user, setuser] = useState({
        username:'',
        password:''
    });
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('login = ', user);
        loginAuth(user);
    }
    const resetHandler = (e) => {
        e.preventDefault();
        setuser({
            username:'',password:''
        })
    }
    const readValue = (e) =>{
        const { name,value} = e.target;
        setuser({...user,[name]:value})
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-centre">
                    <h3 className="display-3">Login</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitHandler} onReset={resetHandler}>
                                <div className="form-group mt-2 mb-2">
                                    <label htmlFor="username">Username</label>
                                    <input type="email" name='username' id='username' value={user.username} onChange={readValue} className="form-control" required/>
                                </div>
                                <div className="form-group mt-2 mb-2">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name='password' id='password' value={user.password} onChange={readValue} className="form-control" required/>
                                </div>
                                <div className="form-group mt-2 md-2">
                                    <input type="submit" value='Login' className="btn btn-success" />
                                    <input type='reset' value='Clear' className ='btn btn-warning' />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <p>New user <NavLink to={'/register'} className='btn btn-link'>Resister Here</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login