import React from 'react'
import "../styles/home.css"
// import { Link} from "react-router-dom"
const News = ({video,props}) => {

  const handelClick = e=>{
    e.preventDefault()
    props.history.push(`/newsDetails/${video.id.videoId}`)
  }
    return (
        <div className="newsItem" onClick={handelClick}>
           <img className="newsImg" src={video.snippet.thumbnails.high.url} alt="logo" /> 
            
        </div>
    )
}

export default News
