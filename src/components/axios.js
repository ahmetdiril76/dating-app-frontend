import axios from 'axios'
const instance = axios.create({
    baseURL: "https://dating-mern-backendtr.herokuapp.com"
})
export default instance