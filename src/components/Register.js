import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
// import UserApi from '../API/UserApi';
import { toast } from 'react-toastify';
import {regUser} from '../API/Auth';

function Register(props){
    const [user, setUser] = useState({
        name:'',
        mobile:'',
        username:'',
        password:"",
    });
    const submitHandler = async(e) => {
       
        try {
            e.preventDefault();
            // console.log('user = ',user);
                // UserApi.create(user).then(res =>{
                //     toast.success('user registered successfully');
                //     window.location.href = '/login';
                // }).catch(err => toast.error(err.message))
              let newUser = {
                  name : user.name,
                  mobile : user.mobile,
                  username : user.username,
                  password : user.password,
                  role :"user"
              }  
                regUser(user);       
        } catch(err){
            toast.error(err.message);
        }
    };
    const readValue = (e) => {
        const { name, value} = e.target;
        setUser({ ...user, [name] : value })
    };
    const resetHandler = (e) =>{
        e.preventDefault();
        setuser({
            name:'',
            mobile:'',
            username:'',
            password:"",
        });

    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-centre">
                    <h3 className="display-3">Register</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitHandler} onReset={resetHandler}>

                                <div className="form-group mt-2 mb-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name='name' id='name' value={user.name} onChange={readValue} className="form-control" required/>
                                </div>
                                <div className="form-group mt-2 mb-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name='mobile' id='mobile' value={user.mobile} onChange={readValue} className="form-control" required/>
                                </div>
                                <div className="form-group mt-2 mb-2">
                                    <label htmlFor="username">Username</label>
                                    <input type="email" name='username' id='username' value={user.username} onChange={readValue} className="form-control" required/>
                                </div>
                                <div className="form-group mt-2 mb-2">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name='password' id='password' value={user.password} onChange={readValue} className="form-control" required/>
                                </div>
                                <div className="form-group mt-2 md-2">
                                    <input type="submit" value='Register' className="btn btn-success" />
                                    <input type='reset' value='Clear' className ='btn btn-warning' />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <p>Already Registered User <NavLink to={'/login'} className='btn btn-link'>Login Here</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register