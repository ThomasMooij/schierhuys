import axios from "axios";

const newRequest = axios.create({
    baseURL:"http://localhost:8080/api/",
    withCredentials: true,
    headers:
   { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:5173/',

}

})

export default newRequest