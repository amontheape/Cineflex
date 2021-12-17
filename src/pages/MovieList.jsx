import axios from "axios";
import styled from "styled-components";
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


function MovieList(){
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    const getRequest = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');
    getRequest.then( ({data}) => setMovies(data), (error) => console.log(error) );
  }, [])

  if(!movies){
    return <h1>carregando...</h1>
  }

  return(
    <MoviesWrapper>
      {
        movies.map( movie => {
          return (
            <Link to={`:/${movie.id}`}>
              <MovieCard key={movie.id}>
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

const MoviesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 27.5px;
`
const MovieCard = styled.div`
  height: 210px;
  width: 145px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;

  img {
    height: 193px;
    width: 129px;
  }
`
