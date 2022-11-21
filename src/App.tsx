import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Hero from './pages/Hero';
import Heroes from './pages/Heroes';
import HeroesList from './pages/HeroesList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='heroes' />} />
          <Route path='/heroes' element={<HeroesList />} />
          <Route path='/hero/:id' element={<Hero />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
