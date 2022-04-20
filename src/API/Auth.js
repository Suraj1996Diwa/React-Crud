import UserApi from "./UserApi"
import { toast } from "react-toastify"

export const loginAuth = async(user)=>{
    // console.log('user =',user);
    try{
        await    UserApi.getAll().then(res =>{
            // console.log('user=', res.data);
            let users = res.data;
            let extUser =users.find((item) => item.username === user.username);
                if(!extUser)
                    toast.error("User doesn't existd. ")
                if(extUser.password === user.password){
                    if(extUser.role === "admin"){
                        localStorage.setItem("isAdmin", JSON.stringify(true))
                    }else {
                        localStorage.setItem("isAdmin", JSON.stringify(false))
                    }
                    toast.success('login Success')
                    localStorage.setItem('isLogin', JSON.stringify(true));
                    window.location.href = '/';
                } else{
                    toast.error('Invalid Password');
                }

        }).catch(err =>(err.message));
    } catch (err){
        toast.error(err.message)
    }
};

export const regUser = (user) => {
    // console.log('register =',user)
    try{
        UserApi.getAll().then(res =>{
            // console.log('stored users =',res.data)
            let extUsers = res.data
            let singleUser = extUsers.find((item) => item.username === user.username)
            let mob = extUsers.find((item) => item.mobile === user.mobile)
                console.log('singleUser = ',singleUser)
                if(singleUser){
                    toast.error('User already registered');
                }else if (mob){
                    toast.error('Mobile number already registered')
                }else{
                    UserApi.create(user).then(res =>{
                        toast.success('user registered successfully')
                        window.location.href = '/login'
                    }).catch(err => toast.error(err.message))
                }
               
        }).catch(err => toast.error(err.message))
    }catch (err){
        toast.error(err.message)
    }
}