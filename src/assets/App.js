import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Navbar';
import './App.css';
import Login from '../Login.tsx';
import Paciente from '../Paciente.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../Menu.tsx';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="container">
        <Routes>
          <Route path="/paciente" element={<Paciente />} />
          <Route path="/DatosMedicos" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/otros" element={<div>Otros componentes aquí</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


