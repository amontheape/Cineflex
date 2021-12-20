import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Title } from './components'
import { CheckOut, MovieList, Seats, Sessions } from './pages'

function App() {
  return (
    <Router>

      <Header />

      <Routes>

        <Route path='/' element={
          <>
            <Title text='Selecione o filme' />
            <MovieList />
          </>
        } />

        <Route path='/sessoes/:movieId' element={
          <>
            <Title text='Selecione o horário'/>
            <Sessions />
          </>
         } />

        <Route path='/assentos/:sessionId' element={
          <>
            <Title text='Selecione o(s) assento(s)'/>
            <Seats />
          </>
         } />

        <Route path='/sucesso' element={ <CheckOut />} />

      </Routes>

    </Router>
    );
}

export default App;
