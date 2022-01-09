import React from 'react'
import { Jumbotron } from 'reactstrap'
import "../styles/newsDetails.css"
const NewsPlayer = ({video:{id,snippet,statistics }}) => {

  console.log(id)
const decriptionfillter=(description,lettercount)=>{
        return description.length <= lettercount ? description : `${description.slice(0,lettercount)}...`
}

    
    return (
        <>
        <div className="ratio ratio-16x9">
      <iframe 
        src={`https://www.youtube.com/embed/${id}`}
         title="video player" 
         frameBorder="0"
         className="IFrame"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
          </iframe>

       </div>
       <Jumbotron>
        <h1 className="display-6">{snippet.title}</h1>
        <p className="lead">{snippet.channelTitle}</p>
        <p>{decriptionfillter(snippet.description,100)}</p>
        <hr className="my-2" />
      </Jumbotron>
       </>
    )
}

export default NewsPlayer

// this NewsPlayer will be displayed in video details as a video player