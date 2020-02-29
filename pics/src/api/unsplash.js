import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2fa88e672c6260c5610b9201981143e90df0fbfbb05ab7e6febc1b190beb3fb5'
    },
})