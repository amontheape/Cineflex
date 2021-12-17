import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import MovieList from './pages/MovieList';
import Sections from './pages/Sections';
import Seats from './pages/Seats';
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <Router>

      <Header />

      <Routes>

        <Route path='/' element={ <MovieList />} />

        <Route path='/filme/:movieId' element={
          <>
            <Title text='Selecione o horário'/>
            <Sections />
            <Footer />
          </>
         } />

        <Route path='/sessao/:sectionId' element={
          <>
            <Title text='Selecione o(s) assento(s)'/>
            <Seats />
            <Footer />
          </>
         } />

        <Route path='/sucesso' element={ <CheckOut />} />

      </Routes>
      
    </Router>
    );
}

export default App;
