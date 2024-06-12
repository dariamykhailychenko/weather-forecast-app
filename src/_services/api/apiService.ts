import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const apiService = axios.create({
  baseURL: API_BASE_URL,
  params: {
    appid: API_KEY,
  },
})

export default apiService
