import axios from 'axios'

const instance = axios.create({
    baseURL:"https://facebook-clone-mern-backend.herokuapp.com/",
})

export default instance;