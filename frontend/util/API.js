import axios from "axios";


export const requestMenu = ()=>{
    return axios.get("http://localhost:1337/categories/");
}

export const requestCarousel = () =>{
    return axios.get("http://localhost:1337/slides");
}