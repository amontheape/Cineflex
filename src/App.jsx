import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Title } from './components/style';
import { CheckOut, MovieList, Seats, Sessions } from './pages';

function App() {
  return (
    <Router>

      <Header />

      <Routes>

        <Route path='/' element={
          <>
            <Title>Selecione o filme</Title>
            <MovieList />
          </>
        } />

        <Route path='/sessoes/:movieId' element={
          <>
            <Title>Selecione o horário</Title>
            <Sessions />
          </>
         } />

        <Route path='/assentos/:sessionId' element={
          <>
            <Title>Selecione o(s) assento(s)</Title>
            <Seats />
          </>
         } />

        <Route path='/sucesso' element={ 
          <>
            <Title green ><>Pedido feito<br/>com sucesso!</></Title>
            <CheckOut />
          </>
        } />

      </Routes>

    </Router>
    );
}

export default App;
