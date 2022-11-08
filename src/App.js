import logo from './logo.svg';
import './App.css';
import Home from './components/pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/partial/navbar';
import DetailPokemon from './components/pages/detailPokemon';
import Footer from './components/partial/footer';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<DetailPokemon />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;