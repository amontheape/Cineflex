import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from "../components";
import {
  Button, Seat, SeatsWrapper, SeatsSummary, SummaryItem, Label, Input, Form
} from './style'

let bookingPostTo = 'https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many'

function Seats(){
  const [movieSeats, setMovieSeats] = useState();
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState();
  const [cpf, setCPF] = useState();

  const {sessionId} = useParams();

  useEffect(() => {
    const seatsRequest = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${sessionId}/seats`);
    seatsRequest.then( ({data}) => setMovieSeats(data), error => console.log(error));
  }, [sessionId])

  function handleStatus(seatId){
    if(selected.includes(seatId)){
      const filteredSelected = selected.filter((id) => id !== seatId);

      return setSelected([...filteredSelected]);
    }

    setSelected([...selected, seatId]);
  }


  return (
    <>
      <SeatsWrapper>
      {
        movieSeats?.seats.map( seat => (
          <Seat key={seat.id*1000} status={seat.isAvailable} selected={selected.includes(seat.id)} onClick={() => handleStatus(seat.id)}>
            {seat.name}
          </Seat>
        )
      )
      }
      </SeatsWrapper>

      <SeatsSummary>

        <SummaryItem>
          <Seat selected />
          <p>Selecionado</p>
        </SummaryItem>

        <SummaryItem>
          <Seat status />
          <p>Disponível</p>
        </SummaryItem>

        <SummaryItem>
          <Seat />
          <p>Indisponível</p>
        </SummaryItem>

      </SeatsSummary>     

      <Form>
        <Label htmlFor='username'>Nome do comprador:</Label>
        <Input id='username' placeholder="Digite seu nome..." onChange={(input) => setName(input.value)} value={name}/>

        <Label htmlFor='userCPF'>CPF do comprador:</Label>
        <Input id='userCPF' placeholder="Digite seu CPF..." onChange={(input) => setCPF(input.value)} value={cpf}/>

        <Button>Reservar assento(s)</Button>
      </Form>

      <Footer title={movieSeats?.movie.title} poster={movieSeats?.movie.posterURL} imgSize='48px' sessionInfo={`${movieSeats?.day.weekday} - ${movieSeats?.name}`}/>
    </>
  );
}

export default Seats;
