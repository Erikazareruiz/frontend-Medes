import React, { useState } from 'react';
//import viteLogo from '/vite.svg'
import reactLogo from './assets/logo.png'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Por favor, ingrese ambos campos.');
      return;
    }

    console.log('Iniciando sesión con', username, password);
    setError('');
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
  )
}

export default Login;
