import React from 'react'
import News from "./News"
import "../styles/home.css"
const NewsList = ({videos,props}) => {

    return (
        <div className="newsContainer"> { videos.length > 0 ? videos.map(video=>  <News key={video.id} video={video} props={props} />) : <h1>News not found</h1> } </div>
    )
    
}

export default NewsList
