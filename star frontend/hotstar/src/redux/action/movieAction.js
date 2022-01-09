import axios from "axios"
import { BASE_ROUTE } from "../../config"
import {  ACTION_MOVIE, DRAMA_MOVIE, ENGLISH_MOVIE, FREE_MOVIE, HINDI_MOVIE, MARVEL_MOVIES, MOVIES_BY_PAGE, MOVIES_SEARCH, MOVIE_DETAILS, MOVIE_TOGGLE, SCIENCE_FICTION_MOVIE } from "../actionTypes"




export const movies_by_page =(page,limit) => async Dispatch =>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:MOVIE_TOGGLE})
        const movies = await axios(BASE_ROUTE+`/moviesByPage?page=${page}&limit=${limit}`,{headers: {"Authorization": user.user.token}})
        console.log(movies.data)
        Dispatch({type:MOVIE_DETAILS,payload:null})
        Dispatch({type:MOVIES_BY_PAGE,payload:movies.data})
    }catch(err){
        if (err.response && err.response.data) {
            console.log(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:MOVIE_TOGGLE})
    }
}

export const hindi_movies =(page,limit) => async Dispatch =>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:MOVIE_TOGGLE})
        const movies = await axios(BASE_ROUTE+`/moviesByLanguage?page=${page}&limit=${limit}&language=Hindi`,{headers: {"Authorization": user.user.token}})
        console.log(movies.data)
        Dispatch({type:HINDI_MOVIE,payload:movies.data})
    }catch(err){
        if (err.response && err.response.data) {
            console.log(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:MOVIE_TOGGLE})
    }
}

export const english_movies =(page,limit) => async Dispatch =>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:MOVIE_TOGGLE})
        const movies = await axios(BASE_ROUTE+`/moviesByLanguage?page=${page}&limit=${limit}&language=English`,{headers: {"Authorization": user.user.token}})
        console.log(movies.data)
        Dispatch({type:ENGLISH_MOVIE,payload:movies.data})
    }catch(err){
        if (err.response && err.response.data) {
            console.log(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:MOVIE_TOGGLE})
    }
}


export const action_movies =(page,limit) => async Dispatch =>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:MOVIE_TOGGLE})
        const movies = await axios(BASE_ROUTE+`/movies/Action?page=${page}&limit=${limit}`,{headers: {"Authorization": user.user.token}})
        console.log(movies.data)
        Dispatch({type:ACTION_MOVIE,payload:movies.data})
    }catch(err){
        if (err.response && err.response.data) {
            console.log(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:MOVIE_TOGGLE})
    }
}

export const drama_movies =(page,limit) => async Dispatch =>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:MOVIE_TOGGLE})
        const movies = await axios(BASE_ROUTE+`/movies/Adventure?page=${page}&limit=${limit}`,{headers: {"Authorization": user.user.token}})
        console.log(movies.data)
        Dispatch({type:DRAMA_MOVIE,payload:movies.data})
    }catch(err){
        if (err.response && err.response.data) {
            console.log(`${err.response.data.message}`) // some reason error message
            console.log(err)
        }
    }finally{
        Dispatch({type:MOVIE_TOGGLE})
    }
}

export const free_movies =(page,limit) => async Dispatch =>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:MOVIE_TOGGLE})
        const movies = await axios(BASE_ROUTE+`/moviesFree?page=${page}&limit=${limit}`,{headers: {"Authorization": user.user.token}})
        console.log(movies.data)
        Dispatch({type:FREE_MOVIE,payload:movies.data})
    }catch(err){
        if (err.response && err.response.data) {
            console.log(`${err.response.data.message}`) // some reason error message
            console.log(err)
        }
    }finally{
        Dispatch({type:MOVIE_TOGGLE})
    }
}

export const science_movies =(page,limit) => async Dispatch =>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:MOVIE_TOGGLE})
        const genrec = "Science Fiction"
        const movies = await axios(BASE_ROUTE+`/movies/${genrec}?page=${page}&limit=${limit}`,{headers: {"Authorization": user.user.token}})
        console.log(movies.data)
        Dispatch({type:SCIENCE_FICTION_MOVIE,payload:movies.data})
    }catch(err){
        if (err.response && err.response.data) {
            console.log(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:MOVIE_TOGGLE})
    }
}

export const marvel_movies =(page,limit) => async Dispatch =>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:MOVIE_TOGGLE})
        const movies = await axios(BASE_ROUTE+`/movies/marvel?page=${page}&limit=${limit}`,{headers: {"Authorization": user.user.token}})
        console.log(movies.data)
        Dispatch({type:MARVEL_MOVIES,payload:movies.data})
    }catch(err){
        if (err.response && err.response.data) {
            console.log(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:MOVIE_TOGGLE})
    }
}



export const search_movies =(query) => async Dispatch =>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:MOVIE_TOGGLE})
        const movies = await axios(BASE_ROUTE+`/movies/search?q=${query}`,{headers: {"Authorization": user.user.token}})
        console.log(movies.data)
        Dispatch({type:MOVIES_SEARCH,payload:movies.data})
    }catch(err){
        if (err.response && err.response.data) {
            console.log(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:MOVIE_TOGGLE})
    }
}


export const movie_details =(id) => async Dispatch =>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        Dispatch({type:MOVIE_TOGGLE})
        const movies = await axios(BASE_ROUTE+`/movie/${id}`,{headers: {"Authorization": user.user.token}})
        console.log(movies.data)
        Dispatch({type:MOVIE_DETAILS,payload:movies.data})
    }catch(err){
        if (err.response && err.response.data) {
            console.log(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        Dispatch({type:MOVIE_TOGGLE})
    }
}
