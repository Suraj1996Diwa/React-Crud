import React,{ useState,useEffect} from 'react';
import { toast } from 'react-toastify';
import UserApi from '../API/UserApi';
import UserItem from './UserItem';


function Home(props){
    const [login, setLogin] = useState(false);
    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        let isLogin = JSON.parse(localStorage.getItem("isLogin")|| false);
        console.log('local storage =', isLogin )
        if(isLogin){
            setLogin(true);

        }else{
            setLogin(false)
        }

    }, []);
    useEffect(() =>{
        UserApi.getAll().then(res =>{
            console.log('data = ',res.data)
            setUsers(res.data)
        }).catch(err => toast.error(err.message))
    },[]);
    return(
        <>
        {
            login ? (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="display-3">User List</h3>
                        </div>
                    </div>
                    <div className="row">{
                        users.map((item,key) =>{
                            return <UserItem key={key} {...item} />
                        })

                    }

                    </div>
                </div>
            ):(
                <div className="container">
                    <div className="col-md-12 text-centre">
                        <h3 className="display">Home</h3>
                    </div>
                </div>
            )
        }
        </>

    )
}

export default Home