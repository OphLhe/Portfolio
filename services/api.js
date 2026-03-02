import axios from "axios";

const API_URL = "http://localhost:3000";

const API = axios.create({
    baseURL: `${API_URL}/api`,
})

export default API;