import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Footer } from "../components";
import {
  Button, Seat, SeatsWrapper, SeatsSummary, SummaryItem, Label, Input, Form
} from './style'

function Seats(){
  const [movieSeats, setMovieSeats] = useState();
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [allowClick, setAllowClick] = useState('no');
  const [seatNames, setSeatNames] = useState([]);

  const {sessionId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const seatsRequest = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${sessionId}/seats`);
    seatsRequest.then( ({data}) => setMovieSeats(data), error => console.log(error));
  }, [sessionId])

  function handleStatus(seatId, seatName){
    if(selected.includes(seatId)){
      const filteredSelected = selected.filter((id) => id !== seatId);
      const filteredSeatNames = seatNames.filter((name) => name !== seatName);
      
      setSeatNames([...filteredSeatNames]);

      return setSelected([...filteredSelected]);
    }
    
    setSeatNames([...seatNames, seatName]);
    setSelected([...selected, seatId]);
  }

  function handleReservation(event) {
    event.preventDefault();

    const reserve = {
      ids: selected,
      name: name,
      cpf: cpf
    };

    const reserveRequest = axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many/', reserve);
    reserveRequest.then( handleStorage(reserve) , (error) => console.log(error));
  }

  function handleStorage(reserve) {
    localStorage.setItem('seats', JSON.stringify(seatNames));
    localStorage.setItem('username', reserve.name);
    localStorage.setItem('usercpf', reserve.cpf);
    localStorage.setItem('date', movieSeats.day.date);
    localStorage.setItem('movie', movieSeats.movie.title);
    localStorage.setItem('session', movieSeats.name);

    navigate('/sucesso');
  }

  useEffect(() => {
      if(selected.length > 0 && name && cpf){
        setAllowClick('yes');
      } else setAllowClick('no');
  }, [selected, name, cpf]);
  
  return (
    <>
      <SeatsWrapper>
      {
        movieSeats?.seats.map( (seat, index) => (
          <Seat key={index} status={seat.isAvailable} selected={selected.includes(seat.id)} onClick={() => handleStatus(seat.id, seat.name)}>
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
        <Label type='text' htmlFor='username'>Nome do comprador:</Label>
        <Input id='username' placeholder="Digite seu nome..." onChange={(input) => setName(input.target.value)} value={name}/>

        <Label type='number' htmlFor='userCPF'>CPF do comprador:</Label>
        <Input id='userCPF' placeholder="Digite seu CPF..." onChange={(input) => setCPF(input.target.value)} value={cpf}/>

        <Button onClick={(event) => handleReservation(event)} allowClick={allowClick}>Reservar assento(s)</Button>
      </Form>

      <Footer title={movieSeats?.movie.title} poster={movieSeats?.movie.posterURL} imgSize='48px' sessionInfo={`${movieSeats?.day.weekday} - ${movieSeats?.name}`}/>
    </>
  );
}

export default Seats;
