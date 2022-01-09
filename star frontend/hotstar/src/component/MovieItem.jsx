import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import "../styles/home.css"
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const MovieItem = ({movie,props, user}) => {

    // const onClick = e=>{
    //     e.preventDefault()
    //     if(user?.user?.isConfirmed === false){
    //         return alert("plese verify your email") & props.history.push(`/myProfile`)
    //     }else{
    //         if(movie._id){
    //             props.history.push(`/movieDetails/${movie._id}`)
    //         }else {props.history.push(`/movieDetails/${movie.movieid}`)}

    //     }
    // }
    return (
        <Wrap>
            <Link to={`/movieDetails/${movie._id ? movie._id : movie.movieid}`} >
            <img src={movie.posterImage}  alt="poster" />
            </Link>
        </Wrap>
    )
}

const Wrap = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 70%) 0px 26px 30px -10px,
    rgb(0 0 0 / 70%) 0px 15px 10px -10px;
  cursor: pointer;
  overflow:hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height:100%;
    object-fit: cover;
    opacity: 1;
    position:relative;
    transition: opacity 500ms ease-in-out 0s;
    width:100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 /70%) 0px 30px 20px -10px;
    transform: scale(1.05);
    border-color: rgba (249, 249, 249, 0.8);
  }
`;


const mapstaStore = e=>{
    return{
        user:e.userState.user
    }
}
export default connect(mapstaStore)(MovieItem)
