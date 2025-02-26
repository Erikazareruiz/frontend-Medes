import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reactLogo from './assets/logo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Por favor, ingrese ambos campos.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/v2/user/getByUsername/${username}`);

      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }

      const data = await response.json();
      console.log(data);

      if (data && data.password === password) {
        navigate('/menu');
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      setError('Error en la autenticación');
    }
  };

  return (
    <div className="login-container">
      <div>
        <a href="https://medescajamarca.com/wp-content/uploads/2019/07/MEDES-logo.png" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Iniciar Sesión</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usuario">Usuario:  </label>
          <input
            type="text"
            id="usuario"
            placeholder="Introduce tu usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Clave:  </label>
          <input
            type="password"
            id="password"
            placeholder="Introduce tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">INGRESAR</button>
      </form>
    </div>
  );
};

export default Login;