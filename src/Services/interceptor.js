import axios from "axios";
import React from 'react';

const api = axios.create({
    headers: {
        "Content-Type": "application/json",
        "x-project" :"pcb_click"
    },
});

api.interceptors.request.use(
    function (config) {
        // console.log("TOken:",localStorage.getItem("token"))
        config.headers.Authorization = localStorage.getItem("token");
        // console.log("config", config);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// For POST requests
api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }

);
export default api;