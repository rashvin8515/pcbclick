import React from "react";
import serviceConfig from "./ServiceConfig"
import api from "./interceptor";
class AuthServices {
    signInWithEmailAndPassword = async (email,password)=> {
        await api
        .post(serviceConfig.signIn,{
            email_address : email,
            password:password
        })
        .then((response)=>{
            const data = response.data;
            return data;
        })
        .then((data)=>{
            localStorage.setItem("token",data["data"].token)
        })
    };
}
const authService = new AuthServices();
export default authService
