import { Bold, Button, Info } from './style';
import { Link } from 'react-router-dom';

function CheckOut() {
  let seatsStr = localStorage.getItem('seats');
  const seats = JSON.parse(seatsStr);
  const date = localStorage.getItem('date');

  return (
    <Info>
      <Bold>Filme e sessão</Bold>
      <p>{localStorage.getItem('movie')}</p>
      <p>{`${date} ${localStorage.getItem('session')}`}</p>

      <Bold>Ingressos</Bold>
      { seats.map((seat, index) => (<p key={index*43}>{`Assento ${seat}`}</p>)) }

      <Bold>Comprador</Bold>
      <p>{localStorage.getItem('username')}</p>
      <p>
        {cpfFormat(localStorage.getItem('usercpf'))}
      </p>
      
      <Link to='/'>
        <Button>Voltar pra Home</Button>
      </Link>
    </Info>
  )
}

export default CheckOut;

function cpfFormat(cpf) {
  cpf = cpf.replace(/[^\d]/g, "");
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}