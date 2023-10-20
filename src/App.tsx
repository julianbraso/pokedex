import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import { Home } from './Views/Home';
import { Sidebar } from './Components/Sidebar';
import { PokemonList } from './Views/PokemonList';

function App() {
  return (
    <Router>
      <Sidebar />
      <div className='sm:ml-20 ml-12'>
        <Routes>
          <Route path="/pokemon" />
          <Route path="/list" element={<PokemonList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
