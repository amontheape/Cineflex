import axios from "axios";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MoviesWrapper, MovieCard } from './style'


function MovieList(){
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    const listRequest = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');
    listRequest.then( ({data}) => setMovies(data), (error) => console.log(error) );
  }, [])

  if(!movies){
    return <h1>carregando...</h1>
  }

  return(
    <MoviesWrapper>
      {
        movies.map( movie => {
          return (
            <Link to={`/sessoes/${movie.id}`} key={movie.id*10}>
              <MovieCard key={movie.id} imgSize='129px'>
                <img src={movie.posterURL} alt={movie.title}/>
              </MovieCard>
            </Link>
          )          
        })
      }
    </MoviesWrapper>
  );
}

export default MovieList;