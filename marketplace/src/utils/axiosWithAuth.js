import axios from 'axios'

export default function axiosWithAuth() {
    const token =localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://african-market-67.herokuapp.com',
        headers:{
            Authorization:token
        }
    })
}