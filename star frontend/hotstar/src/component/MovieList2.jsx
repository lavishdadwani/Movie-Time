import React from 'react'
import MovieItem from './MovieItem'
import "../styles/home.css"
import styled from 'styled-components';
const MovieList2 = ({movies, props}) => {
    return (
        <Content> { movies.length > 0 ? movies.map(movie=>  <MovieItem key={movie._id} movie={movie.movieObj} props={props} />) : <h1>movie not found</h1> } </Content>
    )
}

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;


export default MovieList2
