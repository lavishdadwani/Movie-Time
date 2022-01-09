import axios from "axios"
import { BASE_ROUTE } from "../../config"
import { GET_SUBCRIPTION, GET_USER2, GET_USER_SUBCRIPTION, SUBCRIPTION_SUCCESS, SUBCRIPTION_TOGGLE } from "../actionTypes"
   
export const get_user_subcription = ()=> async Dispatch=>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:SUBCRIPTION_TOGGLE})
        const subcription = await axios.get(`${BASE_ROUTE}/user/userSubcription`,{headers: {"Authorization": user.user.token}})
        console.log(subcription.data)
        Dispatch({type:GET_USER_SUBCRIPTION,payload:subcription.data})
        return subcription.data
    }catch(err){
        if (err.response && err.response.data) {
            // alert(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:SUBCRIPTION_TOGGLE})
    }
}



export const get_subcription = (type,prize)=> async Dispatch=>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:SUBCRIPTION_TOGGLE})
        const subcription = await axios.post(`${BASE_ROUTE}/user/subcription`,{type,prize},{headers: {"Authorization": user.user.token}})
        console.log(subcription.data)
        Dispatch({type:GET_SUBCRIPTION,payload:subcription.data})
        return subcription.data
    }catch(err){
        if (err.response && err.response.data) {
            alert(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:SUBCRIPTION_TOGGLE})
    }
}

export const razorpay_success = (response)=> async Dispatch=>{
    try{
        const {user} = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:SUBCRIPTION_TOGGLE})
        console.log("razoroay")
        console.log(response)
        const subcription = await axios.post(`${BASE_ROUTE}/user/paymentSuccess`,{response},{headers: {"Authorization": user.user.token}})
        console.log(subcription.data)
        console.log("hello razorpay")
        Dispatch({type:SUBCRIPTION_SUCCESS,payload:subcription.data})
        const user1 = await axios.get(BASE_ROUTE+`/userByToken/${user.token}`)
        console.log(user1.data)
        Dispatch({type:GET_USER2,payload:user.data})
        return subcription
    }catch(err){
        if (err.response && err.response.data) {
            alert(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:SUBCRIPTION_TOGGLE})
    }
}
