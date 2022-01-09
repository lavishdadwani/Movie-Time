import axios from "axios"
import { API_KEY, BASE_URL } from "../../config"

import { NEWS_DETAILS, SEARCH_NEWS, SEARCH_NEWS_TOGGLE, SOME_NEWS, TOP_NEWS } from "../actionTypes"


export const searchNews = ()=> async dispatch=>{
    try{
        dispatch({type:SEARCH_NEWS_TOGGLE})
        const {data} = await axios(`${BASE_URL}/search?part=snippet&maxResults=40&q=live%20news&regionCode=IN&key=${API_KEY}`)
        // const new1 = await axios(`${BASE_URL}/search?part=snippet&maxResults=48&q=live%20news&regionCode=IN&key=${API_KEY}`)
        // const news1 = await  new1.data.items.filter(item => item.snippet.liveBroadcastContent === "live");
        const news = await  data.items.filter(item => item.snippet.liveBroadcastContent === "live");
        dispatch({type:SEARCH_NEWS,payload:news})
        const news2 = await  data.items.filter(item => item.snippet.liveBroadcastContent !== "live");
        const somenews = news2.slice(0,5)
        dispatch({type:TOP_NEWS,payload:news2})
        dispatch({type:SOME_NEWS,payload:somenews})
        console.log(news2,news)
    }catch(err){
        if (err.response && err.response.data) {
            console.log(`${err.response.data.message}`) // some reason error message
            console.log(err)
          }
    }finally{
        dispatch({type:SEARCH_NEWS_TOGGLE})
    }
}

// curl \
//   'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=live%20news&regionCode=IN&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed




export const videoDetails =  (id)=> async dispatch=>{
    try{
        dispatch({type:SEARCH_NEWS_TOGGLE})
        const responce = await axios(`${BASE_URL}/videos?part=snippet&hl=es&id=${id}&key=${API_KEY}`)
        dispatch({type:NEWS_DETAILS,payload:responce.data})
    }catch(err){
        if(err)console.log(err)
        dispatch({type:SEARCH_NEWS_TOGGLE})

    }finally{
        dispatch({type:SEARCH_NEWS_TOGGLE})
    }
}
// curl \
//   'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&hl=es&id=Xmm3Kr5P1Uw&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed

