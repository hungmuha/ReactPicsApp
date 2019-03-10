import axios from "axios";

export default axios.create ({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 114f67e1d7f794015a09e40efe57f02f165ed8194bf4f309d13acb6d80cbd653'
    } 
});