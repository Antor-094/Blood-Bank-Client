import { axiosInstance } from "./userApi";

export const LoginUser  = async (payload)=>{
    const response = await axiosInstance("post","http://localhost:5000/api/users/login",payload)
    return response
}
export const RegisterUser  = async (payload)=>{
    const response = await axiosInstance("post","http://localhost:5000/api/users/register",payload)
    return response
}