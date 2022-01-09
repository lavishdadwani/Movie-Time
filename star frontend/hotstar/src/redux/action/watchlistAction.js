import axios from "axios"
import { BASE_ROUTE } from "../../config"
import { ADD_TO_WATCHLIST, GET_USER_WATCHLIST, REMOVE_FROM_WATCHLIST, WATCHLIST_TOGGLE } from "../actionTypes"

export const get_watchlist_user =() => async Dispatch =>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:WATCHLIST_TOGGLE})
        const watchlist = await axios(BASE_ROUTE+`/user/watchList`,{headers: {"Authorization": user.user.token}})
        console.log(watchlist.data)
        Dispatch({type:GET_USER_WATCHLIST,payload:watchlist.data})
    }catch(err){
        if (err.response && err.response.data) {
            // alert(`${err.response.data.message}`) // some reason error message
            console.log(err.response.data)
          }
    }finally{
        Dispatch({type:WATCHLIST_TOGGLE})
    }
}


export const add_watchlist =(movieId,movieObj) => async Dispatch =>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:WATCHLIST_TOGGLE})
        const watchlist = await axios.post(BASE_ROUTE+`/user/addToWatchList`,{movieId,movieObj},{headers: {"Authorization": user.user.token}})
        console.log(watchlist.data)
        Dispatch({type:ADD_TO_WATCHLIST,payload:watchlist.data})
    }catch(err){
        if (err.response && err.response.data) {
            // alert(`${err.response.data.message}`) // some reason error message
            console.log(err.response.data.message)
          }
    }finally{
        Dispatch({type:WATCHLIST_TOGGLE})
    }
}


export const remove_watchlist =(movieId) => async Dispatch =>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:WATCHLIST_TOGGLE})
        const watchlist = await axios.delete(BASE_ROUTE+`/user/removeWatchList/${movieId}`,{headers: {"Authorization": user.user.token}})
        console.log(watchlist.data)
        Dispatch({type:REMOVE_FROM_WATCHLIST,payload:watchlist.data})
    }catch(err){
        if (err.response && err.response.data) {
            // alert(`${err.response.data.message}`) // some reason error message
            console.log(err.response.data.message)
          }
    }finally{
        Dispatch({type:WATCHLIST_TOGGLE})
    }
}
