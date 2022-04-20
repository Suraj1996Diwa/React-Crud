import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserApi from '../API/UserApi';


export default function Update(props){
    const [user, setUser] = useState({
        name :'',mobile: '', username:'',password:'',role :''
    });
    useEffect(() =>{
        UserApi.getSingle(params.id).then(res => {
            setUser(res.data)
            // console.log('single user =',res.data)

        }).catch(err => toast.error(err.message))
    },[])

    const readValue = (e) =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log('Update user = ', user)
        if(user.role === 'admin'){
            toast.warning('Admin Update Restricted')
            window.location.href = '/'
        }else{
            UserApi.update(user,params.id).then(res =>{
                toast.success("user updated successfully")
                window.location.href ='/'
            }).catch(err => toast.error(err.message))
        }
    }
    const clearHandler = (e) =>{
        e.preventDefault()
        setUser({
            name:'',mobile:'',username:'',password:''
        })
    }
 

    const params = useParams();
        console.log('params =', params)
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-centre">
                    <h3 className="display-3 text-success">Update</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form  onSubmit={submitHandler} onReset={clearHandler}>
                        <div className="form-group mt-2 mb-2">
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' id='name' value={user.name} onChange={readValue} className='form-control' required />
                        </div>
                        <div className="form-group mt-2 mb-2">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="number" name='mobile' id='mobile' value={user.mobile} onChange={readValue} className='form-control' required />
                        </div>
                        <div className="form-group mt-2 mb-2">
                            <label htmlFor="">Username</label>
                            <input type="text" name='username' id='username' value={user.username} onChange={readValue} className='form-control' required />
                        </div>
                        <div className="form-group mt-2 mb-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password' value={user.password} onChange={readValue} className='form-control' required />
                        </div>
                        <div className="form-group mt-2 mb-2">
                            <input type="hidden" name='role' value ={user.role} onChange={readValue} className='form-control' />
                        </div>
                        <div className="form-group mt-2 mb-2">
                            <input type="submit" value="Update" className='btn btn-success' />
                            <input type='reset' value='Clear'  className='btn btn-warning float-end'/> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}