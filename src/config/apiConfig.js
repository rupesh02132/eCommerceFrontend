import axios from "axios";

export const API_BASE_URL = "http://localhost:5454";

export const api = axios.create({ 
    baseURL:"http://localhost:5454",
    headers: { 
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`,  
        "Content-Type": "application/json" 
    }
});
