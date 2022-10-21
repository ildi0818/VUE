import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:3000'

export default{
    getAllUser(){
      return Axios.get('/users')
        .then(resp => {
            //console.log(resp)
            return resp.data
        })
        .catch(err => {
            console.log('error',err)
            return Promise.reject(err)
        })  
    },
    getUserById(id){
        return Axios.get(`/users/${id}`)
            .then(resp => {return resp.data})
            .catch((err)=>{console.log(err)})
    },
    saveUser(user){
        return Axios.post('/users',user)
            .then(
                ()=>{}
            )
    },
    updateUser(user,id){
        return Axios.put(`/users/${id}`,user)
            .then(
                (resp)=>{ console.log(resp)}
            )
    },
    deleteUser(id){
        return Axios.delete(`/users/${id}`)
    }

}