// we can use js 
// we will use axios + interceptors
import axios from 'axios'
import { response } from 'express';
const API_URL = 'http://localhost:8000';

const axiosInstance=axios.create({
baseURL:API_URL,
timeout:10000,
headers :{
        "content-type":"application/json "
}

})

axiosInstance.interceptors.request.use( {
    function(config){
        return config
    },
    function(err){
        return Promise.reject(err);
    }
    
})

axiosInstance.interceptors.response.use({
    function(response){
    return processResponse(response);
    },
    function (err){
        return promise.reject(processError(response));

    }

})
