import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { add_watchlist, get_watchlist_user, remove_watchlist } from '../redux/action/watchlistAction'
import "../styles/movieDetails.css"

const MoviePlayer = ({movie,addWatchList,removeWatchList,add_watchlist,remove_watchlist,get_watchlist_user,userWatchlist}) => {

// const [button, setbutton] = useState("")
const [addWatchListtoggle, setaddWatchListtoggle] = useState(false)
const [removeWatchListtoggle, setremoveWatchListtoggle] = useState(false)
const [movieId, setmovieId] = useState(movie._id)
const watchList = JSON.parse(localStorage.getItem("watchList"))


console.log(movie._id)
console.log(movieId)
const result = watchList.filter((id)=> id.movieId === movie._id)

console.log(result)
// useEffect(() => {
//     if(result.length > 0 ){
//         setmovieId(movie._id)
//         setremoveWatchListtoggle(true)
//     }else{
//         setaddWatchListtoggle(true)
//     }
   
// }, [userWatchlist])

useEffect(() => {
   setmovieId(movie._id)
}, [movie._id])

const handelButtonRemove = e=>{
    e.preventDefault()
    if(result.length > 0){
        remove_watchlist(movieId)
        setaddWatchListtoggle(true)
        setTimeout(() => {
            get_watchlist_user()
            // window.location.reload()
        },1000 );
    } }
    
const handelButtonAdd = e=>{
    e.preventDefault()
        const obj = {
           name:movie.name,
           movieid:movieId,
           posterImage:movie.posterImage
        }
        add_watchlist(movieId,obj)
        setremoveWatchListtoggle(true)
        setTimeout(() => {
            get_watchlist_user()
            // window.location.reload()
        },1000 );
    
}
    return (
        <div className="movieDetails" >
                <iframe 
        src={`https://www.youtube.com/embed/${movie.videoId}`}
         title="video player" 
         frameBorder="0"
         className="iframe"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
          </iframe>
          <div className="moviehead" >
              <h1>{movie.name}</h1>
             {result.length > 0 ?  <button className="watchlist_remove" style={{padding:""}} onClick={handelButtonRemove} >Remove from Watchlist</button> : <button className="watchlist_add" onClick={handelButtonAdd} >Add  Watchlist</button>}
          </div>
          <div className="head2">
              <span>
                  {movie.genrec[0]}
              </span>
              <span>
                  {movie.genrec[1] ? movie.genrec[1] :""}
              </span>
              <span>
                  {movie.releaseDate}
              </span>
          </div>
          <div className="head3">
              <p style={{margin:"0px"}}>{movie.description}</p>

          </div>
        </div>
    )
}
const mapStateStore = e=>{
    return{
        addWatchList:e.watchListState.addWatchList,
        removeWatchList:e.watchListState.removeWatchList,
        userWatchlist:e.watchListState.getWatchList
    }
}
export default connect(mapStateStore,{get_watchlist_user,add_watchlist,remove_watchlist})(MoviePlayer)
