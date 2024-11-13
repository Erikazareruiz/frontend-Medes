import React from 'react';
import './App.css';
import Login from '../Login.tsx';
import Paciente from '../Paciente.tsx';
import DatosMedicos from '../DatosMedicos.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientSearch from './PatientSearch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
          <Route path="/register" element={<PatientRegistration />} />
          <Route path="/search" element={<PatientSearch />} />
        </Routes>
 
  );
}

export default App;


       