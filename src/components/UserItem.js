import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import UserApi from '../API/UserApi';

export default function UserItem(props){
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        let isAdmin = JSON.parse(localStorage.getItem("isAdmin")|| false);
            console.log('local storage =',isAdmin);
            if(isAdmin){
                setAdmin(true);
            }else{
                setAdmin(false)
            }
;
    }, []);
    const delHandler = (id) =>{
        if(window.confirm(`are you sure to delet an = ${id}?`)){
            if(admin === true){
                toast.warning('Admin deleted Registered')
            }else {
                UserApi.delete(id).then(res =>{
                    toast.success('User deleted successfully')
                }).catch(err => toast.error(err.message))
            }
        }else {
            toast.warning('delete terminated')
        }
    }
    const { id, name, mobile, username, password } = props;
    return (
        <div className="col-md-4 mt-2 mb-2">
            <div className="card">
                <div className="card-header">
                    <h5 className="text-centre">{name}</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Mobile</strong>
                            <span className='float-end'> {mobile}</span>
                        </li>
                        <li className="list-group-item">
                            <strong>Username</strong>
                            <span className='float-end'> {username}</span>
                        </li>
                        <li className="list-group-item">
                            <strong>Password</strong>
                            <input type="password" className="form-control" value={password} readOnly />
                        </li>
                    </ul>
                </div>
                <div className="card-footer">
                    {
                        admin ? (
                            <>
                                <NavLink to={`/update/${id}`} className="btn btn-info">Update</NavLink>
                                <button className="btn btn-danger float-end" onClick={() => delHandler(id)}>Delete</button>
                            </>
                        ):null
                    }
                </div>
            </div>

        </div>
    )
}