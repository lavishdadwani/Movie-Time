import axios from "axios"
import { BASE_ROUTE } from "../../config"
import { CHANGE_USER_PASSWORD, EMAIL_VERIICATION, FIND_EMAIL, FORGOT_PASSWORD, GET_USER, GET_USER2, GOOGLE_LOGIN, LOGIN_USER, LOGOUT_USER, REGISTER_USER, TOGGLE_AUTH_USER, UPDATE_USER } from "../actionTypes"

export const log_in =(email,password) => async Dispatch =>{
    try{
        Dispatch({type:TOGGLE_AUTH_USER})
        const user = await axios.post(BASE_ROUTE+"/user/logIn",{email,password})
        console.log(user.data)
        Dispatch({type:LOGIN_USER,payload:user.data})
    }catch(err){
        if (err.response && err.response.data) {
            alert(`${err.response.data.message}`) // some reason error message
            Dispatch({type:TOGGLE_AUTH_USER})
            console.log(err)
          }
    }finally{
        Dispatch({type:TOGGLE_AUTH_USER})
    }
}

export const register =(name,email,password) => async Dispatch =>{
    try{
        Dispatch({type:TOGGLE_AUTH_USER})
        const user = await axios.post(BASE_ROUTE+"/user/register",{name,email,password}, {
            headers: {
              "Accept": "application/json",
            }})
        console.log(user.data)
        Dispatch({type:REGISTER_USER,payload:user.data})
    }catch(err){
        if (err.response && err.response.data) {
            alert(err.response.data.message) // some reason error message
            Dispatch({type:TOGGLE_AUTH_USER})
            console.log(err)
          }
    }finally{
        Dispatch({type:TOGGLE_AUTH_USER})
    }
}

export const log_out =(token) => async Dispatch =>{
    const user1 = JSON.parse(localStorage.getItem("user"))
    try{
        Dispatch({type:TOGGLE_AUTH_USER})
        const user = await axios.delete(BASE_ROUTE+"/user/logout",{headers: {"Authorization": user1.user.token}})
        console.log(user.data)
        Dispatch({type:LOGOUT_USER,payload:null})
    }catch(err){
        if (err.response && err.response.data) {
            Dispatch({type:LOGOUT_USER,payload:null}) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:TOGGLE_AUTH_USER})
    }
}


export const updateUser =(name,fileUpload) => async Dispatch =>{
    const user = localStorage.getItem("user")
    try{
        console.log("run")
        Dispatch({type:TOGGLE_AUTH_USER})
        const update = await axios.patch(BASE_ROUTE+"/user/update",{name,fileUpload}, {headers: {"Authorization": user.user.token}})
        console.log(update)
        Dispatch({type:UPDATE_USER,payload:update})
    }catch(err){
        if (err.response && err.response.data) {
            alert(err.response.data.message) // some reason error messag
            console.log(err)
          }
    }finally{
        Dispatch({type:TOGGLE_AUTH_USER})
    }
}


export const change_password =(oldpassword,newpassword) => async Dispatch =>{
    try{
        const user1 = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:TOGGLE_AUTH_USER})
        const user = await axios.patch(BASE_ROUTE+"/user/changePassword",{oldpassword,newpassword},{headers: {"Authorization": user1.user.token}})
        console.log(user.data)
        Dispatch({type:CHANGE_USER_PASSWORD,payload:user.data})
        alert(user.data.message)
    }catch(err){
        if (err.response && err.response.data) {
            alert(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:TOGGLE_AUTH_USER})
    }
}

export const google_login =(responce) => async Dispatch =>{
    try{
        Dispatch({type:TOGGLE_AUTH_USER})
        const user = await axios.post(BASE_ROUTE+"/user/googleLogin",{responce})
        console.log(user.data)
        Dispatch({type:GOOGLE_LOGIN,payload:user.data})
        return user
    }catch(err){
        if (err.response && err.response.data) {
            alert(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:TOGGLE_AUTH_USER})
    }
}


export const find_email =(email) => async Dispatch =>{
    try{
        Dispatch({type:TOGGLE_AUTH_USER})
        const user = await axios.post(BASE_ROUTE+`/forgotPasswordByEmail/${email}`)
        console.log(user.data)
        Dispatch({type:FIND_EMAIL,payload:user.data})
        if(user.data.message === "got email")alert("an password reset link has been sent to pyur Email")
    }catch(err){
        if (err.response && err.response.data) {
            alert(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:TOGGLE_AUTH_USER})
    }
}


export const forgot_password =(newPassword,cpassword,token) => async Dispatch =>{
    try{
        Dispatch({type:TOGGLE_AUTH_USER})
        const user = await axios.post(BASE_ROUTE+`/forgotPassword/${token}`,{newPassword,cpassword})
        console.log(user.data)
        Dispatch({type:FORGOT_PASSWORD,payload:user.data})
        if(user.data.message === "password Updated") alert(user.data.message +"  plese logIn again")
    }catch(err){
        if (err.response && err.response.data) {
            alert(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:TOGGLE_AUTH_USER})
    }
}


export const get_user =(token) => async Dispatch =>{
    try{
        Dispatch({type:TOGGLE_AUTH_USER})
        const user = await axios.get(BASE_ROUTE+`/user/get/${token}`)
        console.log(user.data)
        Dispatch({type:GET_USER,payload:user.data})
    }catch(err){
        if (err.response && err.response.data) {
            // alert(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:TOGGLE_AUTH_USER})
    }
}

export const get_user2 =(token) => async Dispatch =>{
    try{
        Dispatch({type:TOGGLE_AUTH_USER})
        const user = await axios.get(BASE_ROUTE+`/userByToken/${token}`)
        console.log(user.data)
        Dispatch({type:GET_USER2,payload:user.data})
    }catch(err){
        if (err.response && err.response.data) {
            if(err.response.data.message === "cannot get user" ){
                Dispatch({type:LOGOUT_USER,payload:null})
            }
            // alert(`${err.response.data.message}`) // some reason error message
            console.log(err.response)
          }
    }finally{
        Dispatch({type:TOGGLE_AUTH_USER})
    }
}


export const email_verifaction =(email,token) => async Dispatch =>{
    try{
        Dispatch({type:TOGGLE_AUTH_USER})
        const user = await axios.post(BASE_ROUTE+`/user/emailVerification/${email}/${token}`,)
        console.log(user.data)
        Dispatch({type:EMAIL_VERIICATION,payload:user.data})
        if(user.data.message)alert(user.data.message)
    }catch(err){
        if (err.response && err.response.data) {
            // alert(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:TOGGLE_AUTH_USER})
    }
}
