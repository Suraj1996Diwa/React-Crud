import Axios  from "axios";

const axiosInstance = Axios.create({
    baseURL: 'http://localhost:5000'
});
const UserApi = {
    getAll: ()=>{
        return axiosInstance.request({
            method:'GET',
            url:'/users'
        })
    },
    getSingle: (id) =>{
        return axiosInstance.request({
            method:'GET',
            url:`/users/${id}`
        })
    },
    create : (user) => {
        return axiosInstance.request({
            method:'POST',
            url:'/users',
            data :user
        })
    },
    update : (user,id) => {
        return axiosInstance.request({
            method:'PUT',
            url:`/users/${id}`,
            data : user
        })
    },
    delete : (id) => {
        return axiosInstance.request({
            method:'DELETE',
            url:`/users/${id}`
        })
    },
}
export default UserApi