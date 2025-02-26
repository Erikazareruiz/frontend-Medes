import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Menu from './Menu'; // Asegúrate de tener un componente Menu

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};

export default App;