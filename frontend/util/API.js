import axios from "axios";

export const requestMenu = ()=>{
    return axios.get("http://localhost:1337/categories/");
}