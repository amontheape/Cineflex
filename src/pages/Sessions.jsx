import axios from "axios";
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Button, ButtonWrapper } from './style';
import { Footer } from "../components";

function Sessions() {
  const [session, setSession] = useState()
  const { movieId } = useParams();

  useEffect(() => {
    const sessionRequest = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${movieId}/showtimes`);
    sessionRequest.then( ({data}) => setSession(data), (error) => console.log(error) );
  }, [movieId])

  if(!session) {
    return <h2>carregando...</h2>
  }

  return (
    <>
      {
        session.days.map( session => {
          return (
            <>
              <h2 key={session.id}>{`${session.weekday} - ${session.date}`}</h2>
              <ButtonWrapper>
              {
                session.showtimes.map( times => {
                  return (
                    <Link to={`/assentos/${times.id}`}>
                      <Button key={times.id * 100}>{times.name}</Button>
                    </Link>
                  )
                })
              }
              </ButtonWrapper>
            </>   
          )
        })
      }

      <Footer title={session.title} poster={session.posterURL} imgSize='48px'/>
    </>
  );
}

export default Sessions;
