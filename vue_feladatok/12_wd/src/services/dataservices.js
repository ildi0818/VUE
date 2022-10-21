import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:3000'

export default {
    getAllFilms(){
        return Axios.get('/episodes')
        .then(resp => {
            return resp.data
        })
        .catch(()=>{})
    },
    getFilmBySeason(seasonNumber){
        return Axios.get(`/episodes?season=${seasonNumber}`)
        .then(resp => {
            return resp.data
        })
        .catch(()=>{})
    }
}